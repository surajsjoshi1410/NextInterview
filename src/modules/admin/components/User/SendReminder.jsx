import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/Theme";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  width: 600px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.body};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
font-family: ${theme.fonts.body};
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 16px;
  width: 120px; /* Adjust this width as needed */
  text-align: left;
`;

const Input = styled.input`
font-family: ${theme.fonts.body};
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
`;

const TextArea = styled.textarea`
font-family: ${theme.fonts.body};
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  flex: 1;
`;

const RadioGroup = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  input {
    margin-right: 8px;
    accent-color: green;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SendReminder = ({ isOpen, onClose }) => {
  const [heading, setHeading] = useState("");
  const [subText, setSubText] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("Only notification");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      heading,
      subText,
      deliveryMode,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <Title>Send Reminder</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Heading</Label>
            <Input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter heading here..."
            />
          </FormGroup>
          <FormGroup>
            <Label>Sub Text</Label>
            <TextArea
              rows="3"
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
              placeholder="Enter sub text here..."
            />
          </FormGroup>
          <RadioGroup>
            <RadioButton>
              <input
                type="radio"
                value="Only notification"
                checked={deliveryMode === "Only notification"}
                onChange={(e) => setDeliveryMode(e.target.value)}
              />
              Only notification
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                value="Only e-mail"
                checked={deliveryMode === "Only e-mail"}
                onChange={(e) => setDeliveryMode(e.target.value)}
              />
              Only e-mail
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                value="Both notification and e-mail"
                checked={deliveryMode === "Both notification and e-mail"}
                onChange={(e) => setDeliveryMode(e.target.value)}
              />
              Both notification and e-mail
            </RadioButton>
          </RadioGroup>
          <ButtonContainer>
            <Button type="submit">Send</Button>
          </ButtonContainer>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

export default SendReminder;
