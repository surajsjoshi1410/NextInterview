import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import {
  Container,
  BackIcon,
  FormSection,
  Title,
  Subtitle,
  InputContainer,
  Input,
  Button,
  Label,  // Import the Label component here
} from '../Login/Login.styles';
import logo from '../../assets/Logo.png';
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';
import { IoMdArrowBack } from "react-icons/io";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate(); 

  const handleSendOTP = () => {
    if (mobileNumber.trim().length === 10) {
      alert("OTP Sent!");
      // Add API call for sending OTP
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <div>
  <HeaderWithLogo />
    <Container>
      
      <FormSection>
   
      <BackIcon onClick={handleGoBack}
      style={{
        border:'1px solid grey',
        // padding: '2px',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '8px',
        borderRadius: '4px',
        alignItems: 'center',
      }}
      >
    <IoMdArrowBack />
    </BackIcon>
    


        <Title>Login with Mobile number</Title>
        <Subtitle>OTP will be sent to your mobile number.</Subtitle>
        <InputContainer>
          <Label>Mobile Number</Label> {/* Use the styled Label component */}
        
          <Input
  type="tel"
  value={mobileNumber}
  placeholder="Enter your Mobile Number"
  onChange={(e) => {
    // Only allow digits (0-9) or backspace (empty)
    const re = /^[0-9\b]+$/;

    // If the input is empty or if it matches the regex, update state
    if (e.target.value === '' || re.test(e.target.value)) {
      // Truncate to 10 characters if user goes beyond 10
      setMobileNumber(e.target.value.slice(0, 10));
    }
  }}
/>


        </InputContainer>
        <Button onClick={handleSendOTP}>Send OTP</Button>
      </FormSection>
    
    </Container>
    </div>
  );
};

export default Login;
