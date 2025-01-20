import styled from "styled-components";
import theme from "../../theme/Theme";
export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${theme.colors.light};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 20;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Signupage = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.light};

  img {
    width: 100%;
    max-width: 700px;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  color: ${theme.colors.text};
  font-size: 1.35rem;
  font-weight: 600;
  padding-right: 7rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    padding-right: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.div`
  margin-bottom: 1.4rem;
  margin-top: 0.4rem;

  label {
    display: block;
    margin-bottom: 0.9rem;
    color: ${theme.colors.textgray};
    font-size: 0.9rem;
    font-weight: 500;
  }

  .input {
    padding: 0.6rem;
    border: 1px solid ${theme.colors.textgray};
    border-radius: 5px;
    font-size: 0.9rem;
    color: #333;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    label {
      font-size: 1.1rem;
    }
    .input {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${theme.colors.success};
  }
`;

export const AlternativeLogin = styled.div`
  margin-top: 0.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.8rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    background: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #f4f4f4;
    }

    svg {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }

    &:nth-child(1) svg {
      color: rgb(25, 25, 25);
    }

   
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;

  button:nth-child(3) {
    margin-top: 1rem;
  }
`;
// export const GoogleButton = styled.div`
// height: '20px', marginRight: '10px';
// `;

export const LinkedInButton = styled.div`
  margin-top: 2.8rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.8rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    background: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #f4f4f4;
    }

    svg {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }

    &:nth-child(1) svg {
      color: rgb(26, 36, 237);
    }

    @media (max-width: 768px) {
      margin-top: 2rem;
    }
  }
`;

export const Footer = styled.p`
  margin-top: 0.2rem;
  font-size: 0.8rem;
  gap: 0.5rem;
  color: #666;
  text-align: center;

  a {
    color: #007bff;
    gap: 0.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
