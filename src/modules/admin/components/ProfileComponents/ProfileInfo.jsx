import React, { useState } from "react";
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

const ProfileInfo = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [userName, setUserName] = useState("Krishna Kumar");
  const [email, setEmail] = useState("krishna@samplemailid.com");
  const [phone, setPhone] = useState("+91 9999999999");
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePhoto(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
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
              <input type="file" accept="image/*" onChange={handlePhotoUpload} />
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
