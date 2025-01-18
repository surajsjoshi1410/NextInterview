import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
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
} from './ForgotPassword.styles';
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    if (email.trim() && email.includes('@')) {
      alert("Reset link sent to your email!");
      // Add API call for password reset
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
      <div >
     <HeaderWithLogo />
    <Container>
      <FormSection>
        <BackIcon onClick={handleGoBack}>
          <IoMdArrowBack />
        </BackIcon>
        <Title>Forgot Password?</Title>
        <Subtitle>Reset instructions will be sent to your registered email.</Subtitle>
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
