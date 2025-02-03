// RaiseQuery.js
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../../theme/Theme';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${theme.colors.light};
//   color: ${theme.colors.text};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 25px;
  width: 800px;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h3`
  
  margin-bottom: 20px;
  font-family: ${theme.fonts.body};

  font-size: 17px;
font-style: normal;
font-weight: 600;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  width: 100%;
  color: ${theme.colors.subtext};
  font-family: ${theme.fonts.body};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.colors.borderblue};
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 14px;
  font-family: ${theme.fonts.body};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.colors.borderblue};
  border-radius: 5px;
  height: 120px;
  font-size: 14px;
  margin-bottom: 15px;
  font-family: ${theme.fonts.body};
`;

const Note = styled.p`
 
  color: ${theme.colors.textgray};
  margin-bottom: 20px;
  gap: 16px;
    font-family: ${theme.fonts.body};
`;

const Button = styled.button`
  background: ${theme.colors.secondary};
    font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.backgray};
`;

const RaiseQuery = ({ isOpen, onClose }) => {
  const [issueSummary, setIssueSummary] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Query Submitted: ${issueSummary}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Raise Query</Title>
        <form onSubmit={handleSubmit}>
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            width: '90%',
            marginBottom: '15px',
        }}
        >
        <Label>Issue summary</Label>
          <Input 
            type="text" 
            placeholder="Issue in short" 
            value={issueSummary} 
            onChange={(e) => setIssueSummary(e.target.value)} 
            required 
          />
        </div>
          <div
           style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            width: '90%',
            marginBottom: '15px',
        }}
          >
          <Label>Description</Label>
          <TextArea 
            placeholder="Issue in detail" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
          
          </div>
          <Note>You will receive an email regarding the update on this query.</Note>
          <Button type="submit">Submit</Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default RaiseQuery;