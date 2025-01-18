import styled from "styled-components";
import theme from "../../../../theme/Theme";
export const FAQContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  margin: ${({ theme }) => theme.spacing(2)} 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.sidebarBgColor};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.sidebarHoverBgColor};
  }
`;

export const Answer = styled.div`
  font-size: 0.9rem;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  padding-left: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.textgray};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)};
//   display: flex;
//   flex-direction: column;
`;

export const AddQuestionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
//   font-weight: bold;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing(1)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
border: 1px solid ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin:auto;
  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;


export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.type === "edit" ? "#e3fceb" : "#fce3e3")};
  color: ${(props) => (props.type === "edit" ? "#28a745" : "#dc3545")};
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }
`;
