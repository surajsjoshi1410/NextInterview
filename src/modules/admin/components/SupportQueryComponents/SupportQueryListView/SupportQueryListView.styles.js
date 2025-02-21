import styled from "styled-components";
import theme from "../../../../../theme/Theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  font-family: ${theme.fonts.body};
  gap: 30px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(4)};
  background-color: ${theme.colors.sidebarBgColor};
  padding: ${theme.spacing(2)};
  border-radius: 8px;

  .search-container {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.sidebarHoverBgColor};
    border-radius: 4px;
    padding: ${theme.spacing(1)};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    gap: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 1rem;
  font-family: ${theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const FilterButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: ${theme.spacing(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  .theader {
    background-color: ${theme.colors.sidebarBgColor};
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.sidebarHoverBgColor};

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: ${theme.spacing(2)};
  color: ${theme.colors.text};
  font-size: 0.9rem;
`;

export const TableCell = styled.td`
  padding: ${theme.spacing(2)};
  font-size: 0.9rem;
  color: ${theme.colors.textgray};
  border: 1px solid ${theme.colors.sidebarBgColor};

  &:first-child {
    font-weight: bold;
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;

export const StatusBadge = styled.span`
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: normal;
  color: ${(props) =>
    props.status === "solved"
      ? theme.colors.white
      : props.status === "Pending"
      ? theme.colors.white
      : props.status === "In-progress"
      ? theme.colors.info
      : props.status === "Open"
      ? theme.colors.white
      : theme.colors.text};
  background-color: ${(props) =>
    props.status === "solved"
      ? theme.colors.primary
      : props.status === "Pending"
      ? "#fdecea"
      : props.status === "In-progress"
      ? "#e6f3fa"
      : props.status === "Open"
      ? theme.colors.error
      : "#f8f9fa"};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const NameEmail = styled.div`
  strong {
    color: ${theme.colors.text};
  }

  span {
    color: ${theme.colors.textgray};
    font-size: 0.8rem;
  }
`;

export const QueryLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const FilterModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 300px;
  max-width: 90%;
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: none;
    color: ${theme.colors.text};
    border: none;
    font-size: 20px;
  }
`;

// Overlay for background blur effect
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
