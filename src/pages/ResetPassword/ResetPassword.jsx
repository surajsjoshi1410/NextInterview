import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoEyeOffOutline } from "react-icons/io5";
import { PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import {
  Container,
  BackIcon,
  FormSection,
  Title,
  Subtitle,
  InputContainer,
  Input,
  Button,
  Error,
  Success,
  Label,
  ValidationIcon,
} from "./ResetPassword.styles";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import { useSignIn, SignedOut } from "@clerk/clerk-react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { isLoaded, signIn, user, setActive } = useSignIn();

  const handleGoBack = () => {
    navigate("/forgotpassword");
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setFeedbackMessage("Password fields cannot be empty.");
      setIsSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setFeedbackMessage("Passwords do not match.");
      setIsSuccess(false);
      return;
    }

    if (
      password.length < 8 ||
      !/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(password)
    ) {
      setFeedbackMessage(
        "Password must be alphanumeric and at least 8 characters long."
      );
      setIsSuccess(false);
      return;
    }
    try {
      await signIn
        ?.attemptFirstFactor({
          strategy: "reset_password_email_code",
          code: verificationCode,
          password: password,
        })
        .then((result) => {
          // Check if 2FA is required
          console.log("result", result);
          if (result.status === "needs_second_factor") {
            setSecondFactor(true);
            setError("");
          } else if (result.status === "complete") {
            // Set the active session to
            // the newly created session (user is now signed in)
            setActive({ session: result.createdSessionId });
            console.log("user", user);
            setFeedbackMessage("Password reset successfully.");
            setIsSuccess(true);
            navigate("/resetsuccessful");

            // setError('')
          } else {
            console.log(result);
          }
        })
        .catch((err) => {
          console.error("error", err.errors[0].longMessage);
          setError(err.errors[0].longMessage);
        });
    } catch (error) {
      setFeedbackMessage("An error occurred during password reset.");
      setIsSuccess(false);
      return;
    }

    // Log or handle the successful reset
    console.log("Password reset successfully:", password);
  };

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <FormSection>
          <BackIcon onClick={handleGoBack}>
            <IoMdArrowBack />
          </BackIcon>
          <Title>Reset Password</Title>
          <Subtitle>
            Password must be alphanumeric and contain at least 8 characters.
          </Subtitle>
          {/* <form onSubmit={handleFormSubmit}> */}
          <form>
            <InputContainer>
              <Label>Email verification code</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={"text"}
                  placeholder="Enter your new verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
            </InputContainer>
            <InputContainer>
              <Label>New Password</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={toggleNewPasswordVisibility}
                  aria-label={
                    showNewPassword ? "Hide password" : "Show password"
                  }
                  style={{
                    position: "absolute",
                    right: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showNewPassword ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <PiEyeLight size={18} />
                  )}
                </button>
                {password && (
                  <ValidationIcon>
                    <AiOutlineCheckCircle color="green" />
                  </ValidationIcon>
                )}
              </div>
            </InputContainer>

            <InputContainer>
              <Label>Confirm Password</Label>
              <div style={{ position: "relative" }}>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  style={{
                    position: "absolute",
                    right: "40px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showConfirmPassword ? (
                    <IoEyeOffOutline size={18} />
                  ) : (
                    <PiEyeLight size={18} />
                  )}
                </button>
                {confirmPassword && (
                  <ValidationIcon>
                    {passwordsMatch ? (
                      <AiOutlineCheckCircle color="green" />
                    ) : (
                      <AiOutlineCloseCircle color="red" />
                    )}
                  </ValidationIcon>
                )}
              </div>
              {!passwordsMatch && confirmPassword && (
                <Error>Passwords do not match.</Error>
              )}
            </InputContainer>

            {feedbackMessage &&
              (isSuccess ? (
                <Success>{feedbackMessage}</Success>
              ) : (
                <Error>{feedbackMessage}</Error>
              ))}

            <Button type="submit" onClick={handleFormSubmit}>
              Reset Password
            </Button>
          </form>
        </FormSection>
      </Container>
    </div>
  );
};

export default ResetPassword;
