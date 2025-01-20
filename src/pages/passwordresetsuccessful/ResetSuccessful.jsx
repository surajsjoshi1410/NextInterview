import React from 'react'
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import { Container, Image, Message, Button } from "./ResetSuccessful.styles";
import succes from "../../assets/succes.png"; 
import { useNavigate } from 'react-router-dom';
import { useUser,SignIn,SignedOut,useClerk } from '@clerk/clerk-react';


const ResetSuccessful = () => {
  const { signOut } = useClerk()

  const navigate = useNavigate();
  const handleBackToLogIn = () => {
    signOut({ redirectUrl: '/login' })
    
  };
  return (
      <div>
      <HeaderWithLogo />
      <Container>
        <Image src={succes} alt="Email Sent Illustration" />
        <Message>
        Your password has been reset successfully.
          <br />
          Please sign in to continue.
        
        </Message>
        <Button onClick={handleBackToLogIn}>Continue to to Log In</Button>
      </Container>
    </div>
  )
}

export default ResetSuccessful
