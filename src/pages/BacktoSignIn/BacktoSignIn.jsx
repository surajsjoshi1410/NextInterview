import React from "react";
import { Container, Image, Message, Button } from "./BacktoSignIn.styles";
import imagePlaceholder from "../../assets/Mask Group 2.svg"; // Replace with the actual image path
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import { useNavigate } from "react-router-dom";

const BacktoSignIn = () => {
  const navigate = useNavigate();
  const handleBackToSignIn = () => {
    navigate("/signup");
  };

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <Image src={imagePlaceholder} alt="Email Sent Illustration" />
        <Message>
          We have sent you an email with steps to reset
          <br />
          your password. Click on the link in your email
          <br />
          to change your password.
        </Message>
        <Button onClick={handleBackToSignIn}>Back to Sign In</Button>
      </Container>
    </div>
  );
};

export default BacktoSignIn;
