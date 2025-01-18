import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalInput,
  ModalTextarea,
  UploadButton,
  Label,
  InputContainer,
} from "./FaqEdit.styles";

const FaqEdit = ({ faq, onSave, onCancel }) => {
  const [editedQuestion, setEditedQuestion] = useState(faq.question);
  const [editedAnswer, setEditedAnswer] = useState(faq.answer);

  const handleSave = () => {
    onSave(editedQuestion, editedAnswer);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Edit FAQ Question</ModalTitle>
          <CloseButton onClick={onCancel}>×</CloseButton>
        </ModalHeader>
        <InputContainer>
          <Label>Question</Label>
          <ModalInput
            type="text"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
            placeholder="Question"
          />
        </InputContainer>
        <InputContainer>
          <Label>Answer</Label>
          <ModalTextarea
            rows="4"
            value={editedAnswer}
            onChange={(e) => setEditedAnswer(e.target.value)}
            placeholder="Answer"
          />
        </InputContainer>
        <UploadButton onClick={handleSave}>Save</UploadButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FaqEdit;
