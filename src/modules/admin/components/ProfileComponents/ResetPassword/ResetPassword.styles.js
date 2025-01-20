import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const ResetPasswordOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ResetPasswordModal = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${theme.fonts.body};
  position: relative;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.text};
  // text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const Instructions = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.8;
  margin-bottom: ${theme.spacing(3)};
  // text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing(2)};
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: ${theme.spacing(1)};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
  font-size: 14px;
  font-family: ${theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.info};
  color: white;
  border: none;
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: ${theme.fonts.body};
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: 20px;
  position: absolute;
  top: ${theme.spacing(1)};
  right: ${theme.spacing(1)};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.error};
  }
`;
