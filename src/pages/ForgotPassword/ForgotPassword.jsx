import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxArrowLeft, RxFontSize } from "react-icons/rx";
import {
  Container,
  BackIcon,
  FormSection,
  Title,
  Subtitle,
  InputContainer,
  Input,
  Button,
  Label,
} from "./ForgotPassword.styles";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import { useSignIn } from "@clerk/clerk-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const { isLoaded, signIn } = useSignIn();
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      alert("Reset link sent to your email!");
      // Add API call for password reset

      try {
        const data = await signIn.create({
          strategy: "reset_password_email_code",
          identifier: email,
        });
        console.log("data", data);
        setMessage("Password reset email sent. Please check your inbox.");
        setError(null);
        navigate("/resetpassword");
        // Optionally, redirect to a confirmation page
      } catch (err) {
        console.error("Error resetting password:", err);
        setError(err.errors?.[0]?.long_message || "An error occurred.");
        setMessage("");
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <FormSection>
          <BackIcon onClick={handleGoBack}>
            <RxArrowLeft />
          </BackIcon>
          <Title>Forgot Password ?</Title>
          <Subtitle>
            Reset instructions will be sent to your registered email.
          </Subtitle>
          <InputContainer>
            <Label>E-Mail ID</Label>
            <Input
              type="email"
              value={email}
              placeholder="Enter your registered E-Mail ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <Button onClick={handleResetPassword}>Reset Password</Button>
        </FormSection>
      </Container>
    </div>
  );
};

export default ForgotPassword;
