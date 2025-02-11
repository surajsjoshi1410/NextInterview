import React, { useState, useEffect } from "react";
import ResetPassword from "./ResetPassword/ResetPassword";
import {
  ProfileContainer,
  SectionTitle,
  ProfilePhoto,
  UploadButton,
  FormGroup,
  Label,
  InputField,
  SaveButton,
  ResetButtonWrapper,
  ResetButton,
} from "./ProfileInfo.styles";
import { useUser } from '@clerk/clerk-react'
import { getUserByClerkId, updateUser } from "../../../../api/userApi";

const ProfileInfo = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [userName, setUserName] = useState("Krishna Kumar");
  const [email, setEmail] = useState("krishna@samplemailid.com");
  const [phone, setPhone] = useState("+91 9999999999");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser()
  const [profileFile, setProfileFile] = useState(null);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await getUserByClerkId(user.id);
      console.log("response", response);
      setProfilePhoto(response.data.clerkUserData.imageUrl);
      setUserName(response.data.user.user_name);
      setEmail(response.data.user.user_email);
      setPhone(response.data.user.user_phone_number);
    }
    apiCaller();
  }, []);

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    console.log("file 111 ", file);

    // const sub = { clerk_id: user.id, user_name: "", user_profile_pic: file, user_Phone_number: "", user_email: "" }
    // const update = await updateUser(sub);
    // console.log("update", update);
    setProfileFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    console.log("profileFile", profileFile);
    formData.append('clerk_id', user.id);
    formData.append('user_name', userName);
    if (profileFile) {
      formData.append('user_profile_pic', profileFile);
    }

    formData.append('user_Phone_number', phone);
    formData.append('user_email', email);

  
    // Debug the contents of FormData by logging each entry
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    const data = await updateUser(formData);
    alert("Profile updated successfully!");
  };

  const handleResetPasswordClick = () => {
    setShowResetPassword(true);
  };

  const handleCloseResetPassword = () => {
    setShowResetPassword(false);
  };

  return (
    <>
      <ProfileContainer>
        <SectionTitle>Basic info</SectionTitle>
        {/* <p>Profile Photo</p> */}
        <ProfilePhoto>
          <img
            src={
              profilePhoto ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            }
            alt="Profile"
          />
          <UploadButton>
            <label>
              {profilePhoto ? "Change photo" : "Upload photo"}
              {/* <input type="file" accept="image/*" onChange={handlePhotoUpload} /> */}
              <input type="file" onChange={handlePhotoUpload} />
            </label>
          </UploadButton>
        </ProfilePhoto>
        <FormGroup>
          <Label>User name</Label>
          <InputField
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>User mail ID</Label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone number</Label>
          <InputField
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <SaveButton onClick={handleSave}>Save</SaveButton>
        <ResetButtonWrapper>
          <ResetButton onClick={handleResetPasswordClick}>
            Reset password
          </ResetButton>
        </ResetButtonWrapper>
      </ProfileContainer>
      {showResetPassword && (
        <ResetPassword onClose={handleCloseResetPassword} />
      )}
    </>
  );
};

export default ProfileInfo;
