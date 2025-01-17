import styled from "styled-components";
import theme from "../../theme/Theme";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -2rem;
  background-color: ${theme.colors.light};
  padding: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 100vh;
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 100vh;
    margin-top: -5rem;
    padding: ${theme.spacing(1)};
  }
`;

export const Image = styled.img`
  width: 10rem;
  height: auto;
  margin-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 10rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 8rem;
  }
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing(3)};
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    margin-bottom: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const Button = styled.button`
  width: 25%;
  padding: ${theme.spacing(1)};
  font-size: 1rem;
  color: ${theme.colors.text};
  background-color: transparent;
  border: 1px solid ${theme.colors.text};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 60%;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 75%;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;
