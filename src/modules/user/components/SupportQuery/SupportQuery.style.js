import styled from "styled-components";
import theme from "../../../../theme/Theme";
export const Container = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Modal = styled.div`
  background: ${theme.colors.light};
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  
  font-family: ${theme.fonts.body};
  gap: 15px;
  margin-top: 10px;
`;

export const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  
  font-family: ${theme.fonts.body};
  border-radius: 5px;
  font-size: 16px;
  background: #f9f9f9;
  cursor: pointer;
  &:focus {
    border-color:${theme.colors.backgray};
    outline: none;
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  background: ${theme.colors.light};
  
  font-family: ${theme.fonts.body};
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  font-family: ${theme.fonts.body};
  border-radius: 5px;
//   background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
 
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.black};
  background-color:${theme.colors.light};
  font-family: ${theme.fonts.body};
 
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};

  margin-bottom: 10px;
`;
