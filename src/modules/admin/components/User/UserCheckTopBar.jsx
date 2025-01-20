import React from 'react';
import styled from 'styled-components';
import { FaBan, FaBell } from 'react-icons/fa';

const Container = styled.div`
  margin-left: 60px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.bluetext};
  border-radius: 4px;
  appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing(0.5)};

  &:checked {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    position: relative;

    &::after {
      content: '✔';
      font-size: 12px;
      color: ${({ theme }) => theme.colors.light};
      display: block;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
  border: none;
  background-color: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing(1)};
  transition: background-color 0.3s;

  svg {
    margin-right: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const UserCheckTopBar = ({ selectAll, onSelectAllChange, onRestrictUserClick, onSendReminderClick }) => {
  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          checked={selectAll}
          onChange={(e) => onSelectAllChange(e.target.checked)}
        />
        <Label>Select all</Label>
      </CheckboxContainer>
      <ActionsContainer>
        <ActionButton color="error" onClick={onRestrictUserClick}>
          <FaBan />
          Restrict user
        </ActionButton>
        <ActionButton color="bluetext" onClick={onSendReminderClick}>
          <FaBell />
          Send reminder
        </ActionButton>
      </ActionsContainer>
    </Container>
  );
};

export default UserCheckTopBar;
