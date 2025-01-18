import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  width: 500px;
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${theme.fonts.body};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 90%;
    padding: ${theme.spacing(2)};
  }
`;

export const Header = styled.div`
  font-size: 1.5rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(3)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.error};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const FlashcardLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: ${theme.colors.text};
`;

export const FlashcardNumber = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  background-color: #e7f6e9;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: ${theme.spacing(2)};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${theme.spacing(3)};
`;

export const UploadButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;
