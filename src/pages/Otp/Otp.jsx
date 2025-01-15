import React, { useState } from 'react';
import {
  Container,
  OTPMessage,
  OTPInputContainer,
  OTPInput,
  ResendMessage,
  SubmitButton,
  BackIcon,
  Section,
} from '../Otp/Otp.styles';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';

const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    // Only allow 0-9
    const isDigit = /[0-9]/.test(e.key);
    if (!isDigit) {
      e.preventDefault();
    }
  };

  const handleChange = (value, index) => {
    // If the user clears the input, accept the empty string
    // If user typed one digit, accept it
    if (value === '' || /^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if a value is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleGoBack = () => {
    navigate('/login');
  };

  const handleSubmit = () => {
    console.log('OTP Submitted:', otp.join(''));
    // Add your submit logic here
  };

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <Section>
          <BackIcon
            onClick={handleGoBack}
            style={{
              borderRadius: '10%',
              border: '1px solid grey',
              padding: '8px',
            }}
          >
            <FaArrowLeft className='back-icon' />
          </BackIcon>
          <OTPMessage>OTP has been sent to your mobile number.</OTPMessage>
          <OTPInputContainer>
            <label htmlFor="otp">Enter OTP</label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                gap: '10px',
              }}
            >
              {otp.map((value, index) => (
                <OTPInput
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              ))}
            </div>
          </OTPInputContainer>
          <ResendMessage>
            Resend OTP in <span>12 secs</span>
          </ResendMessage>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </Section>
      </Container>
    </div>
  );
};

export default Otp;
