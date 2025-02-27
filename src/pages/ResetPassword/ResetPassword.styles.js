import styled from "styled-components";
import theme from "../../theme/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-top: -2rem;
  background-color: ${theme.colors.light};
  padding: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 100vh;
    margin-top: -2rem;
    padding: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 100vh;
    margin-top: -2rem;
    padding: ${theme.spacing(2)};
  }
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -5rem;
  max-width: 25rem;
  width: 100%;
  padding: ${theme.spacing(2)};
`;

export const BackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  font-size: 16px;
  color: ${theme.colors.text};
  cursor: pointer;
  margin-bottom: ${theme.spacing(2)};
  padding: ${theme.spacing(1)};
  border: 0.1rem solid ${theme.colors.textgray};
  border-radius: 0.25rem;

  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
  }
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: ${theme.spacing(1)};
  color: ${theme.colors.text};
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${theme.colors.sidebarTextColor}60;
  margin-bottom: ${theme.spacing(4)};
`;

export const InputContainer = styled.div`
  margin-bottom: ${theme.spacing(3)};
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(0.5)};
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: ${theme.spacing(1.25)};
  font-size: 14px;
  border: 0.1rem solid ${theme.colors.bluetext}45;
  border-radius: 0.25rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const ValidationIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  width: 100%;
  padding: ${theme.spacing(1.5)};
  font-size: 1rem;
  color: ${theme.colors.light};
  background-color: ${theme.colors.bluetext}45;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: ${theme.colors.bluetext};
  }
`;

export const Success = styled.p`
  color: ${theme.colors.success};
  font-size: 0.875rem;
  margin-top: ${theme.spacing(0.5)};
`;

export const Error = styled.p`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  margin-top: ${theme.spacing(0.5)};
`;
