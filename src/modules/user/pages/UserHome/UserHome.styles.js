import styled from "styled-components";

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
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: #0056b3;
  }
`;
