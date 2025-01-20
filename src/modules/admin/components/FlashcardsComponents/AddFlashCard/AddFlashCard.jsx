import React, { useState } from "react";
import {
  Container,
  Header,
  ContentWrapper,
  FlashcardLabel,
  FlashcardNumber,
  TextArea,
  Footer,
  UploadButton,
  CloseButton,
} from "./AddFlashCard.styles";

const AddFlashCard = ({ onClose, onSave, flashcardCount }) => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (content.trim() === "") {
      alert("Flashcard content cannot be empty");
      return;
    }
    onSave({ id: flashcardCount + 1, text: content, know: 0, dontKnow: 0 });
    onClose();
  };

  return (
    <Container>
      <Header>
        Add flash card
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Header>
      <ContentWrapper>
        <FlashcardLabel>
        <div style={{marginBottom: "10px"}}>  
          Add flash card content
         </div>
          <FlashcardNumber>Flash Card - {flashcardCount + 1}</FlashcardNumber>
        </FlashcardLabel>
        <TextArea
          placeholder="Type here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={50}
        />
      </ContentWrapper>
        <span style={{marginLeft: "160px"}}>{content.length}/50</span>
      <Footer>
        <UploadButton onClick={handleSave}>Upload</UploadButton>
      </Footer>
    </Container>
  );
};

export default AddFlashCard;
