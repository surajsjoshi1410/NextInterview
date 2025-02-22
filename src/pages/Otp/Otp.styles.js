import styled from "styled-components";
import theme from "../../theme/Theme";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${theme.colors.light};
  font-family: Arial, sans-serif;
  padding: 0 15px;
  @media (max-width: 480px) {
    padding: 0 10px;
    justify-content: unset;
  }
  /* Added padding for better responsiveness */
`;

export const BackIcon = styled.div`
  cursor: pointer;
  font-size: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const OTPMessage = styled.p`
  font-size: 26px;
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.text};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size on mobile */
  }
  @media (max-width: 480px) {
    font-size: 14px; /* Adjust font size on mobile */
  }
`;

export const OTPInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  width: 100%;
  justify-content: center; /* Center inputs for better layout */

  @media (max-width: 768px) {
    gap: 8px; /* Reduce gap for smaller screens */
  }

  @media (max-width: 480px) {
    gap: 6px; /* Reduce gap for smaller screens */
  }

  @media (max-width: 320px) {
    gap: 4px; /* Reduce gap for smaller screens */
  }
`;

export const OTPInput = styled.input`
  height: 30px;
  text-align: center;
  font-size: 18px;
  border: 1px solid ${theme.colors.textgray};
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${theme.colors.textgray};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 40px; /* Adjust width for mobile */
    height: 40px; /* Adjust height for mobile */
  }
  @media (max-width: 480px) {
    width: 30px; /* Adjust width for mobile */
    height: 30px; /* Adjust height for mobile */
  }
  @media (max-width: 320px) {
    width: 20px; /* Adjust width for mobile */
    height: 20px; /* Adjust height for mobile */
  }
`;

export const ResendMessage = styled.div`
  font-size: 16px;
  padding: 10px 0 20px 0;
  color: ${theme.colors.black};

  span {
    color: #007bff;
    font-weight: bold;
    cursor: pointer;
  }

  .resendotp {
    font-size: 16px;
    text-align: left;
  }

  resendotp:hover {
    text-decoration: underline;
    color: #007bff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller text on mobile */
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 11px;
  font-size: 18px;
  color: #fff;
  background-color: ${theme.colors.bluetext}45;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.bluetext};
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    padding: 12px; /* Adjust padding */
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: #${theme.colors.light};
  font-family: Arial, sans-serif;
  padding: 0 15px;
  width: 25vw;

  @media (max-width: 480px) {
    padding: 0 10px;
    justify-content: unset;
  }
`;
