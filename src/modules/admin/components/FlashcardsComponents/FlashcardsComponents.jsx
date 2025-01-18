import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  FlashcardContainer,
  Flashcard,
  ActionButton,
  InteractionStats,
  AddButton,
  SearchBar,
  Header,
} from './FlashcardsComponents.styles';

const FlashcardsComponents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [flashcards, setFlashcards] = useState([
    { id: 1, text: 'You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.', know: 0, dontKnow: 0 },
    { id: 2, text: 'You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.', know: 95, dontKnow: 5 },
    { id: 3, text: 'You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.', know: 95, dontKnow: 5 },
    { id: 4, text: 'You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.', know: 95, dontKnow: 5 },
    { id: 5, text: 'You are given a dataset from a subscription-based business that includes customer demographics, subscription details, usage patterns, and past customer interactions.', know: 95, dontKnow: 5 },
  ]);

  const handleEdit = (id) => {
    alert(`Edit flashcard ${id}`);
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
  };

  const handleAddFlashcard = () => {
    const newFlashcard = {
      id: flashcards.length + 1,
      text: 'New Flashcard Text',
      know: 0,
      dontKnow: 0,
    };
    setFlashcards([...flashcards, newFlashcard]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFlashcards = flashcards.filter((card) =>
    card.text.toLowerCase().includes(searchTerm)
  );

  return (
    <FlashcardContainer>
      <Header>
        <SearchBar
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <AddButton onClick={handleAddFlashcard}>Add flashcard</AddButton>
      </Header>
      {filteredFlashcards.map((card) => (
        <Flashcard key={card.id}>
          <h3>Flash Card - {card.id}</h3>
          <p>{card.text}</p>
          <InteractionStats>
            <span>Shared with - 1589 people</span>
            <span>No. of people interacted - {card.know}</span>
            <div>
              <span style={{ color: 'green', fontWeight: 'bold' , backgroundColor: 'lightgreen'}}>I know - {card.know}%</span>
              <span style={{ color: '#dc3545', fontWeight: 'bold', marginLeft: '10px' , backgroundColor: 'lightcoral'}}>
                I don't know - {card.dontKnow}%
              </span>
            </div>
          </InteractionStats>
          <div className="actions">
            <ActionButton onClick={() => handleEdit(card.id)}>
              <FaEdit /> Edit
            </ActionButton>
            <ActionButton onClick={() => handleDelete(card.id)} delete>
              <FaTrash /> Delete
            </ActionButton>
          </div>
        </Flashcard>
      ))}
    </FlashcardContainer>
  );
};

export default FlashcardsComponents;
