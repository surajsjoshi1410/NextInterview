import React, { useEffect, useState } from "react";
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
  ResetContainer,
  PasswordWrapper,
  EyeIcon,
} from "./ResetPassword.styles";
import { useUser } from "@clerk/clerk-react";
import { getUserByClerkId, updatePassword } from "../../../../../api/userApi";
import { IoEyeOffOutline } from "react-icons/io5";
import { PiEyeLight } from "react-icons/pi";

const ResetPassword = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();
  const [clerkId, setClerkId] = useState(user.id);

  useEffect(() => {
    const apiCaller = async () => {
      const respose = await getUserByClerkId(user.id);
      console.log("response", respose);
    };
    apiCaller();
  }, []);

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    const response = await updatePassword({
      clerk_id: user.id,
      oldPassword: oldPassword,
      newPassword: confirmPassword,
    });
    console.log("response", response);

    alert("Password reset successfully!");
    onClose();
  };

  return (
    <ResetPasswordOverlay>
      <ResetPasswordModal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ResetContainer>
          <SectionTitle>Reset Password ?</SectionTitle>
          <Instructions>
            Password must be at least 8 characters and contain letters &
            numbers.
          </Instructions>

          <FormGroup>
            <Label>Old Password</Label>
            <PasswordWrapper>
              <InputField
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <EyeIcon onClick={() => setShowOldPassword(!showOldPassword)}>
                {showOldPassword ? <PiEyeLight /> : <IoEyeOffOutline />}
              </EyeIcon>
            </PasswordWrapper>
          </FormGroup>

          <FormGroup>
            <Label>New Password</Label>
            <PasswordWrapper>
              <InputField
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <EyeIcon onClick={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? <PiEyeLight /> : <IoEyeOffOutline />}
              </EyeIcon>
            </PasswordWrapper>
          </FormGroup>

          <FormGroup>
            <Label>Confirm Password</Label>
            <PasswordWrapper>
              <InputField
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <EyeIcon
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <PiEyeLight /> : <IoEyeOffOutline />}
              </EyeIcon>
            </PasswordWrapper>
          </FormGroup>

          <SubmitButton onClick={handleSubmit}>Reset Password</SubmitButton>
        </ResetContainer>
      </ResetPasswordModal>
    </ResetPasswordOverlay>
  );
};

export default ResetPassword;
