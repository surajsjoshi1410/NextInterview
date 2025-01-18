import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const FlashcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  padding: ${theme.spacing(2)};
  margin: auto;
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
  justify-content: space-between;
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
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  h4 {
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing(1)};
    background-color: ${theme.colors.sidebarBgColor};
    border: 1px solid ${theme.colors.sidebarHoverBgColor};
    width: fit-content;
    padding: ${theme.spacing(0.5)};
    border-radius: 4px;
    color: ${theme.colors.bluetext};
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
    justify-content: flex-end;
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
  flex-wrap: wrap;
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
    props.delete ? theme.colors.lightpink : theme.colors.sidebarBgColor};
  color: ${(props) =>
    props.delete ? theme.colors.darkred : theme.colors.sidebarTextColor};
  border: none;
  border-radius: 50%;
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  cursor: pointer;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
    padding: ${theme.spacing(0.5)};
  }
`;

export const AddButton = styled.button`
  background-color: ${theme.colors.info};
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
