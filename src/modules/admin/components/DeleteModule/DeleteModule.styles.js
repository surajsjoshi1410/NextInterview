import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${theme.colors.light};
  padding: ${theme.spacing(4)};
  border-radius: ${theme.spacing(1)};
  width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  font-family: ${theme.fonts.body};
  font-size: 1.25rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(3)};
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing(2)};
`;

export const ModalButton = styled.button`
  background-color: ${theme.colors.light};
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.spacing(0.5)};
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darken(${theme.colors.error}, 10%);
  }
`;

export const CancelButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  border: none;
  border-radius: ${theme.spacing(0.5)};
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darken(${theme.colors.secondary}, 10%);
  }
`;
