import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const UserHomeWrapper = styled.div`
  margin-left: 60px;
  padding: 10px;

  .reminderContainer {
    margin-top: 10px;
  }

  @media (max-width: 1024px) {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 5px;
  }

  .interviewFav-title {
    font-size: 16px;
    margin: 0;
  }
`;

export const InterviewFavoriteCardContainer = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const ArrowButton = styled.button`
  background-color: ${theme.colors.white};
  opacity: 0.5;
  color: ${theme.colors.black};
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
 
   &:first-of-type {
    left: 0px; // Adjust as needed
  }
 
  &:last-of-type {
    right: 0px; // Adjust as needed
  }
 
  @media (max-width: 768px) {
    &:first-of-type {
      left: -20px;
    }
    &:last-of-type {
      right: -20px;
    }
  }
`;
 
 
