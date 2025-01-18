import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${theme.colors.light};
  border-radius: 8px;
  width: 500px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-family: ${theme.fonts.body};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  font-family: ${theme.fonts.body};
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px; /* Adjust spacing between label and input */
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: ${theme.fonts.body};
  width: 80px; /* Adjust width for alignment */
  text-align: right;
`;

export const ModalInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${theme.colors.textgray};
  border-radius: 4px;
  font-size: 14px;
`;

export const ModalTextarea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid ${theme.colors.textgray};
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  font-family: ${theme.fonts.body};
`;

export const UploadButton = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.light};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-family: ${theme.fonts.body};
display: flex;
  align-items: center;
  flex-direction: row;
  marging: 0;
  justify-content: center;
  &:hover {
    background: ${theme.colors.secondary};
  }
`;
