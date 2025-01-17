import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
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
  Error,
  Success,
  Label,
  ValidationIcon,
} from './ResetPassword.styles';
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGoBack = () => {
    navigate('/forgotpassword');
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setFeedbackMessage('Password fields cannot be empty.');
      setIsSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setFeedbackMessage('Passwords do not match.');
      setIsSuccess(false);
      return;
    }

    if (password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(password)) {
      setFeedbackMessage('Password must be alphanumeric and at least 8 characters long.');
      setIsSuccess(false);
      return;
    }

    setFeedbackMessage('Password reset successfully.');
    setIsSuccess(true);

    // Log or handle the successful reset
    console.log('Password reset successfully:', password);
  };

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div>
      <HeaderWithLogo />
      <Container>
        <FormSection>
          <BackIcon onClick={handleGoBack}>
            <IoMdArrowBack />
          </BackIcon>
          <Title>Reset Password</Title>
          <Subtitle>Password must be alphanumeric and contain at least 8 characters.</Subtitle>
          <form onSubmit={handleFormSubmit}>
            <InputContainer>
              <Label>New Password</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={toggleNewPasswordVisibility}
                  aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
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
              <div style={{ position: 'relative' }}>
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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

            {feedbackMessage && (
              isSuccess ? (
                <Success>{feedbackMessage}</Success>
              ) : (
                <Error>{feedbackMessage}</Error>
              )
            )}

            <Button type="submit">Reset Password</Button>
          </form>
        </FormSection>
      </Container>
    </div>
  );
};

export default ResetPassword;
