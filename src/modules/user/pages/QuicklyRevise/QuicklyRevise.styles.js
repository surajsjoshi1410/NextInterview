import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
// //   height: 100%;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   background-color: ${({ theme }) => theme.colors.light};
//   padding: ${({ theme }) => theme.spacing(3)}; 
// `;

// export const Image = styled.div`
//   .rocket-launch {
//     position: relative;
// `;  

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three cards in a row */
  gap: 20px;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.light};
  margin-left: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* Two cards per row on tablets */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr); /* One card per row on mobile */
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  line-height: 1;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 320px; /* Adjusted to fit image and text neatly */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  border-bottom: 3px solid ${({ theme }) => theme.colors.backgray}; /* Adds a clear separation between image and text */
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  text-align: left;
padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: 0 0 8px 8px;
`;
