import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three cards in a row */
  gap: 30px;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.light};
  margin-left: 40px;

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
  border-radius: 12px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  // width: 320px; /* Adjusted to fit image and text neatly */
  display: flex;
  flex-direction: column;
  // align-items: center;
  // text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 18px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  // height: 300px; /* Adjusted to fit image and text neatly */
  height: 100%;

  
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  text-align: left;
// padding-left: 20px;
// padding-top: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  border-radius: 0 0 8px 8px;
`;
