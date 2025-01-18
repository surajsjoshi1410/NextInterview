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
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 500px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: ${theme.fonts.body};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  width: 30%;
  font-size: 14px;
  color: ${theme.colors.textgray};
//   font-weight: bold;
  margin-right: 10px;
  font-family: ${theme.fonts.body};
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.textgray};
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.textgray};
  border-radius: 5px;
  resize: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.type === "cancel" ? "#ccc" : `${theme.colors.secondary}`)};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
