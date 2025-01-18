import React, { useState } from "react";
import styled from "styled-components";

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  InputContainer,
  Label,
  Input,
  TextArea,
  ButtonGroup,
  Button,
} from "../../components/FAQAdd/FaqAdd.style";

const FaqAdd = ({ onClose, onSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    if (question.trim() && answer.trim()) {
      onSave({ question, answer, isVisible: false });
      onClose();
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Add FAQ Question</ModalHeader>
        <InputContainer>
          <Label>Question</Label>
          <Input
            type="text"
            placeholder="Type here"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Label>Answer</Label>
          <TextArea
            rows="5"
            placeholder="Type here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </InputContainer>
        <ButtonGroup>
          <Button type="cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Upload</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FaqAdd;
