import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import AddFlashCard from "./AddFlashCard/AddFlashCard";
import EditFlashCard from "./EditFlashCard/EditFlashCard";
import DeleteModule from "../DeleteModule/DeleteModule";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  FlashcardContainer,
  Flashcard,
  ActionButton,
  InteractionStats,
  AddButton,
  SearchBar,
  Header,
} from "./FlashcardsComponents.styles";

const FlashcardsComponents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [flashcards, setFlashcards] = useState([
    { id: 1, text: "Flashcard 1 Content", know: 0, dontKnow: 0 },
    { id: 2, text: "Flashcard 2 Content", know: 95, dontKnow: 5 },
    { id: 3, text: "Flashcard 3 Content", know: 95, dontKnow: 5 },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleEdit = (id) => {
    const cardToEdit = flashcards.find((card) => card.id === id);
    setCurrentCard(cardToEdit);
    setIsEditing(true);
  };

  const handleDeleteClick = (id) => {
    setCurrentCard(id);
    setDeleteModalVisible(true); // Show DeleteModule
  };

  const handleConfirmDelete = () => {
    setFlashcards(flashcards.filter((card) => card.id !== currentCard));
    setDeleteModalVisible(false); // Hide DeleteModule after deletion
    setCurrentCard(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false); // Hide DeleteModule without deletion
    setCurrentCard(null);
  };

  const handleAddFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
    setIsAdding(false);
  };

  const handleSaveEdit = (updatedCard) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
    setIsEditing(false);
    setCurrentCard(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFlashcards = flashcards.filter((card) =>
    card.text.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <FlashcardContainer>
        <Header>
          <SearchBar
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <AddButton onClick={() => setIsAdding(true)}>Add flashcard</AddButton>
        </Header>

        {isAdding && (
          <AddFlashCard
            onClose={() => setIsAdding(false)}
            onSave={handleAddFlashcard}
            flashcardCount={flashcards.length}
          />
        )}

        {isEditing && currentCard && (
          <EditFlashCard
            card={currentCard}
            onClose={() => setIsEditing(false)}
            onSave={handleSaveEdit}
          />
        )}

        {filteredFlashcards.map((card) => (
          <Flashcard key={card.id}>
            <h4>Flash Card - {card.id}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>{card.text}</p>
              <div className="actions">
                <ActionButton onClick={() => handleEdit(card.id)}>
                  <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => handleDeleteClick(card.id)} delete>
                  <RiDeleteBin6Line />
                </ActionButton>
              </div>
            </div>
            <InteractionStats>
              <span>Shared with - 1589 people</span>
              <span>No. of people interacted - {card.know}</span>
              <div>
                <span
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    backgroundColor: "lightgreen",
                  }}
                >
                  I know - {card.know}%
                </span>
                <span
                  style={{
                    color: "#dc3545",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    backgroundColor: "lightcoral",
                  }}
                >
                  I don't know - {card.dontKnow}%
                </span>
              </div>
            </InteractionStats>
          </Flashcard>
        ))}
      </FlashcardContainer>
      {deleteModalVisible && (
        <DeleteModule
          onDelete={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default FlashcardsComponents;
