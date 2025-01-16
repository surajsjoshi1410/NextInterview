// Login.styles.js

import styled from "styled-components";
import theme from "../../theme/Theme";

export const Loginmobilewrapper = styled.div`
  height: 100vh; /* Set full height of the viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.light};
  position: relative;
  //  z-index: -1;
  //  margin-top: -72px;
  @media (max-width: 768px) {
    height: 100vh;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 100vh;
    padding: 20px;
  }

  @media (max-width: 320px) {
    height: 100vh;
    padding: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   height: 80vh;
  // height: 100%;
  background-color: ${theme.colors.light};
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 320px) {
    height: auto;
    padding: 20px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  max-width: 400px;
  width: 100%;
  // padding: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 20px;
  }

  @media (max-width: 320px) {
    max-width: 100%;
    padding: 20px;
  }
`;

export const BackIcon = styled.div`
  /* Let the icon be placed at the top of the form */
  align-self: flex-start;
  justify-content: center;
  font-size: 16px;
  color: ${theme.colors.text};
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${theme.colors.text};

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.text};
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    margin-right: 10px;
  }

  @media (max-width: 320px) {
    margin-bottom: 5px;
    margin-right: 5px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
//   font-weight: 500;
  color:${theme.colors.text};
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-bottom: 8px;
  }

  @media (max-width: 320px) {
    font-size: 8px;\
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${theme.colors.textgray};
  border-radius: 4px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.colors.textgray};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    padding: 4px;
  }
`;

export const Button = styled.button`
  width: auto;
  padding: 10px;
  font-size: 16px;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.success};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    padding: 4px;
  }
`;
