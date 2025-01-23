import React, { useState } from "react";
import {
  ModalContainer,
  Header,
  ContentWrapper,
  FlashcardLabel,
  TextArea,
  Footer,
  SaveButton,
  CloseButton,
} from "./EditFlashCard.styles";

const EditFlashCard = ({ card, onClose, onSave }) => {
  const [text, setText] = useState(card.text);

  const handleSave = () => {
    if (text.trim() === "") {
      alert("Flashcard content cannot be empty");
      return;
    }
    onSave({ ...card, text });
    onClose();
  };

  return (
    <ModalContainer>
      <Header>
        Edit Flash Card
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Header>
      <ContentWrapper>
        <div>
        <div>
        Add flash card content
        </div>
        <FlashcardLabel>Flash Card - {card.id}</FlashcardLabel>
        </div>
        <TextArea
          placeholder="Edit flash card content"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={50}
        />
      </ContentWrapper>
        <div style={{ textAlign: "right" }}>{text.length}/50</div>
      <Footer>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </Footer>
    </ModalContainer>
  );
};

export default EditFlashCard;
