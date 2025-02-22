import styled from "styled-components";
import theme from "../../theme/Theme";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  background-color: ${theme.colors.light};
  padding: 1rem;
  height: 70vh;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 500px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${theme.colors.light};
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.2rem;
  margin-right: 20px;
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.black};
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${theme.colors.textgray};
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${theme.colors.bluetext}45;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${theme.colors.bluetext};
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const SkipButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.text};
  background-color: transparent;
  border: 1px solid ${theme.colors.textgray};
  margin-top: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const BackIcon = styled.div`
  /* Let the icon be placed at the top of the form */
  align-self: flex-start;
  justify-content: center;
  font-size: 16px;
  color: ${theme.colors.text};
  cursor: pointer;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
