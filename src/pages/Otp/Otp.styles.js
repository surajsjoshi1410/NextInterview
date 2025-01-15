import styled from 'styled-components';
 import theme from "../../theme/Theme";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
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
  font-size: 24px;
  color: #000;
  margin-bottom: 1rem; 

display: flex;
justify-content: flex-start;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 20px;
        margin: 20px auto;
  }
`;


 

 
export const OTPMessage = styled.p`
  margin-top: 60px;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  text-align: left;
 
  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size on mobile */
    margin-top: 40px; /* Adjust top margin on mobile */
  }
`;
 
export const OTPInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  justify-content: center; /* Center inputs for better layout */
 
  @media (max-width: 768px) {
    gap: 8px; /* Reduce gap for smaller screens */
  }
`;
 
export const OTPInput = styled.input`
  width: 50px; /* Increased width for better accessibility */
  height: 50px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  
 
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
 
  @media (max-width: 768px) {
    width: 40px; /* Adjust width for mobile */
    height: 40px; /* Adjust height for mobile */
  }
`;
 
export const ResendMessage = styled.p`
  font-size: 14px;
  color: #666;
  text-align: left;
 
  span {
    color: #007bff;
    font-weight: bold;
    cursor: pointer;
  }
 
  @media (max-width: 768px) {
    font-size: 12px; /* Smaller text on mobile */
  }
`;
 
export const SubmitButton = styled.button`
  width:100%;
  margin-top: 20px;
  padding: 11px;
  font-size: 16px;
  color: #fff;
  background-color:${theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
 
  &:hover {
    background-color:${theme.colors.success};
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
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 0 15px; 
  @media (max-width: 480px) {
    padding: 0 10px;
    justify-content: unset;
    
  }
  /* Added padding for better responsiveness */
`;