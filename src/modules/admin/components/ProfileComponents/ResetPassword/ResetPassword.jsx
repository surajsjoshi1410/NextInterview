import React, { useState } from "react";
import {
  ResetPasswordOverlay,
  ResetPasswordModal,
  SectionTitle,
  Instructions,
  FormGroup,
  Label,
  InputField,
  SubmitButton,
  CloseButton,
} from "./ResetPassword.styles";

const ResetPassword = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password reset successfully!");
    onClose();
  };

  return (
    <ResetPasswordOverlay>
      <ResetPasswordModal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SectionTitle>Reset Password?</SectionTitle>
        <Instructions>
          Password must be alphanumeric and contain at least 8 characters
        </Instructions>
        <FormGroup>
          <Label>Old Password</Label>
          <InputField
            type="password"
            placeholder="Enter your old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>New Password</Label>
          <InputField
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Confirm Password</Label>
          <InputField
            type="password"
            placeholder="Re-enter your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <SubmitButton onClick={handleSubmit}>Reset Password</SubmitButton>
      </ResetPasswordModal>
    </ResetPasswordOverlay>
  );
};

export default ResetPassword;
