import styled from "styled-components";
import theme from "../../../../../theme/Theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.sidebarBgColor};
  font-family: ${theme.fonts.body};
  margin-left: 40px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  padding: ${theme.spacing(1)};
  border-radius: 8px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;
  padding: ${theme.spacing(1)};
  font-size: 1rem;
  font-family: ${theme.fonts.body};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const FilterButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: ${theme.spacing(1)};

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

  &:first-child {
    font-weight: bold;
  }
`;

export const StatusBadge = styled.span`
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) =>
    props.status === "Resolved"
      ? theme.colors.success
      : props.status === "Pending"
      ? theme.colors.error
      : props.status === "In-progress"
      ? theme.colors.info
      : props.status === "Open"
      ? theme.colors.warning
      : theme.colors.text};
  background-color: ${(props) =>
    props.status === "Resolved"
      ? "#e7f6e9"
      : props.status === "Pending"
      ? "#fdecea"
      : props.status === "In-progress"
      ? "#e6f3fa"
      : props.status === "Open"
      ? "#fff4e6"
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
  padding: ${theme.spacing(4)};
  border-radius: 8px;
`;
