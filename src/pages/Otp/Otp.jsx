import React, { useState } from 'react';
import {
  Container,
  
  OTPMessage,
  OTPInputContainer,
  OTPInput,
  ResendMessage,
  SubmitButton,
  LogoSection,
  BackIcon,
} from '../Otp/Otp.styles';
import {  useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../assets/Logo.png';

import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';

const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigate = useNavigate(); 


  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field if a value is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleGoBack = () => {
      navigate("/login"); 
    };

  return (
    
    <Container>
 <LogoSection>
         <img src={logo} alt="Next Interview Logo" />
 </LogoSection>
   <BackIcon onClick={handleGoBack}>
         <FaArrowLeft />
       </BackIcon>

      <OTPMessage>OTP has been sent to your mobile number.</OTPMessage>
      <OTPInputContainer>
        {otp.map((value, index) => (
          <OTPInput
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </OTPInputContainer>
      <ResendMessage>
        Resend OTP in <span>12 secs</span>
      </ResendMessage>
      <SubmitButton onClick={() => console.log('OTP Submitted:', otp.join(''))}>
        Submit
      </SubmitButton>
    </Container>
  );
};

export default Otp;
