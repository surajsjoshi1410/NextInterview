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
  Header,
  LogoutButton,
} from "./ProfileInfo.styles";
import { GoPerson } from "react-icons/go";
import { useUser } from "@clerk/clerk-react";
import { getUserByClerkId, updateUser } from "../../../../api/userApi";

const ProfileInfo = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const [profileFile, setProfileFile] = useState(null);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await getUserByClerkId(user.id);
      console.log("response", response);
      setProfilePhoto(response.data.clerkUserData.imageUrl);
      setUserName(response.data.user.user_name);
      setEmail(response.data.user.user_email);
      setPhone(response.data.user.user_phone_number);
    };
    apiCaller();
  }, []);

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    setProfileFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("clerk_id", user.id);
    formData.append("user_name", userName);
    if (profileFile) {
      formData.append("user_profile_pic", profileFile);
    }

    formData.append("user_Phone_number", phone);
    formData.append("user_email", email);

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
      <Header>
        <LogoutButton
          onClick={() => {
            alert("Logged out successfully!");
            // handleLogout(); // Ensure this function exists
          }}
        >
          Logout
        </LogoutButton>
      </Header>
      <ProfileContainer>
        <SectionTitle>Basic Info</SectionTitle>
        <ProfilePhoto>
          <div className="profilePic">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="uploadedProfilePic"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <GoPerson size={50} className="profileicon" />
            )}
          </div>

          <UploadButton>
            <label>
              {profilePhoto ? "Change photo" : "Upload photo"}
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </label>
          </UploadButton>
        </ProfilePhoto>
        <FormGroup>
          <Label>Full Name</Label>
          <InputField
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email ID</Label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <InputField
            type="tel"
            value={phone}
            onChange={(e) => {
              if (/^[0-9]*$/.test(e.target.value)) {
                setPhone(e.target.value);
              }
            }}
            maxLength={10}
          />
        </FormGroup>
        <ResetButtonWrapper>
          <ResetButton onClick={handleResetPasswordClick}>
            Reset password
          </ResetButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </ResetButtonWrapper>
      </ProfileContainer>
      {showResetPassword && (
        <ResetPassword onClose={handleCloseResetPassword} />
      )}
    </>
  );
};

export default ProfileInfo;
