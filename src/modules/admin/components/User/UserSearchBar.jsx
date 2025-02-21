import React, { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const SearchBarContainer = styled.div`
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightgreen};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const SearchInput = styled.input`
  width: 30%;
  padding: ${({ theme }) => theme.spacing(1)};
  padding-left: 35px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderblue};
  border-radius: 4px;
  outline: none;
  margin-left: 10px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: 35px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchResults = styled.div`
  margin-left: 60px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const UserSearchBar = ({ placeholder, onChange, userCount }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onChange) {
      onChange(value); // Notify the parent about the change
    }
  };
  return (
    <>
      <SearchBarContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </SearchBarContainer>
      <SearchResults show={searchTerm.trim() !== ""}>
        <p className="search-results-text">
          Showing {userCount} results for "{searchTerm}"
        </p>
      </SearchResults>
    </>
  );
};

export default UserSearchBar;
