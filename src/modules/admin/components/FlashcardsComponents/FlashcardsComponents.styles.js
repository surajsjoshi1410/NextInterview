import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const FlashcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  margin: auto;
  width: 95%;
  background-color: ${theme.colors.light};
  margin-left: ${theme.spacing(5)};

  @media (max-width: ${theme.breakpoints.desktop}) {
    margin-left: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: ${theme.spacing(1)};
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(2)};
  align-items: center;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(1)};
    align-items: flex-start;
  }
`;

export const SearchBar = styled.input`
  width: 20%;
  padding: ${theme.spacing(1)};
  font-size: 14px;
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Flashcard = styled.div`
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.light};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  h3 {
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing(1)};
  }

  p {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing(2)};
  }

  .actions {
    display: flex;
    gap: ${theme.spacing(1)};
    margin-top: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const InteractionStats = styled.div`
  margin-top: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  display: flex;
  gap: ${theme.spacing(2)};

  div {
    display: flex;
    gap: ${theme.spacing(1)};
  }

  span {
    font-size: 14px;
    border: 1px solid ${theme.colors.sidebarHoverBgColor};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
    border-radius: 14px;
    background-color: ${theme.colors.light};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;

    span {
      font-size: 12px;
      padding: ${theme.spacing(0.5)};
    }
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) =>
    props.delete ? theme.colors.error : theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(0.5)};
  }
`;

export const AddButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  }
`;
