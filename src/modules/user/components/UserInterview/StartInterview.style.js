import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  
`;

export const Modal = styled.div`
  background: ${(props) => props.theme.colors.background};
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
background-color: ${(props) => props.theme.colors.light};
  width: 600px;
//   height: 70%;
  border-radius: 10px;
  margin-left: 60px;
  position: relative;
  
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding: 50px;
`;

export const Dropdown = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
 border-radius:4px;
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.text};
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 8px;
  background:${theme.colors.secondary};
  color:${theme.colors.light};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  font-family: ${theme.fonts.body};
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
justify-content: flex-end;
margin-left: auto;
  
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.textgray};
`;

export const Title = styled.h2`
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
padding: 0px;
margin: 0px;
color:${theme.colors.text};
font-family: ${theme.fonts.body};
`;