import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const ModalContainer = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  margin: auto;
  padding: ${theme.spacing(4)};
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};

  h3 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
  }
`;

export const ModalBody = styled.div`
  margin-bottom: ${theme.spacing(2)};

  label {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing(1)};
    display: block;
  }

  div {
    font-family: ${theme.fonts.body};
    font-size: 12px;
    color: ${theme.colors.text};
    text-align: right;
    margin-top: ${theme.spacing(1)};
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(2)};
`;

export const CloseButton = styled.button`
  background-color: ${theme.colors.error};
  color: ${theme.colors.light};
  border: none;
  border-radius: 4px;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const SaveButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  border: none;
  border-radius: 4px;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const FlashcardLabel = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  border-radius: 4px;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  display: inline-block;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;
