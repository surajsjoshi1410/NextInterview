import React, { useState } from "react";
import {
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  SaveButton,
  FlashcardLabel,
  TextArea,
} from "./EditFlashCard.styles";

const EditFlashCard = ({ card, onClose, onSave }) => {
  const [text, setText] = useState(card.text);

  const handleSave = () => {
    if (text.trim().length > 0) {
      onSave({ ...card, text });
    }
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <h3>Edit Flash Card</h3>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ModalHeader>
      <ModalBody>
        <FlashcardLabel>Flash Card - {card.id}</FlashcardLabel>
        <label htmlFor="flashcardText">Add flash card content</label>
        <TextArea
          id="flashcardText"
          value={text}
          maxLength="50"
          onChange={(e) => setText(e.target.value)}
        />
        <div>{`${text.length}/50`}</div>
      </ModalBody>
      <ModalFooter>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </ModalFooter>
    </ModalContainer>
  );
};

export default EditFlashCard;
