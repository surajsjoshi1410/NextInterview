import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
margin-left: 60px;
margin-top: 20px;
padding: 10px;

background-color: ${({ theme }) => theme.colors.lightgreen};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const SearchInput = styled.input`
  // width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 4px;
  outline: none;
  marginn-left: 60px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const UserSearchBar = ({ placeholder, onChange }) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchBarContainer>
  );
};

export default UserSearchBar;
