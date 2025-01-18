import styled from 'styled-components';
import theme from '../../theme/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: ${theme.colors.light};
  padding: ${theme.spacing(3)};
  box-sizing: border-box; /* Ensure padding is included in the height calculation */

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(3)};
    margin-bottom: 5rem;
    }
`;


export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 25rem; /* 400px converted to rem */
  width: 100%;
  margin-top: -2rem;
  padding: ${theme.spacing(1.5)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(1.5)};
    margin-bottom: 5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
  }
`;

export const BackIcon = styled.div`
  align-self: flex-start;
  font-size: 1.5rem; /* Use rem for consistency */
  color: ${theme.colors.text};
  cursor: pointer;
  margin-bottom: ${theme.spacing(2)};
  padding: ${theme.spacing(1)};
  border: 0.1rem solid ${theme.colors.textgray}; /* 1px converted to rem */
  border-radius: 0.25rem; /* 4px converted to rem */

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: ${theme.spacing(0.5)};
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing(1)};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${theme.spacing(3)};
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(0.5)};
  display: block;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: ${theme.spacing(1)};
  font-size: 1rem;
  border: 0.1rem solid ${theme.colors.textgray};
  border-radius: 0.25rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    padding: ${theme.spacing(0.75)};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing(1.5)};
  font-size: 1rem;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.success};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    padding: ${theme.spacing(1)};
  }
`;
