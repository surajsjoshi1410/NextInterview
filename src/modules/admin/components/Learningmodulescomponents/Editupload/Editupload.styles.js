import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  background-color: ${theme.colors.light};
  padding: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ImageUploadContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightgreen};
  border-radius: 8px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.success};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const UploadText = styled.span`
  margin-top: ${({ theme }) => theme.spacing(2)};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: start; /* important for top-aligning the second column */
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.textgray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
    width: 95%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    width: 95%;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const UploadButton = styled.button`
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.textgray};
    color: ${theme.colors.secondary};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing(1)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const Pagination = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textgray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const NavButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${theme.colors.textgray};
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;

  ${({ variant, theme }) => {
    if (variant === "primary") {
      return `
        background-color: ${theme.colors.light};
        color: ${theme.colors.secondary};
      `;
    }
    return `
      background-color: ${theme.colors.light};
      color: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.textgray};
    `;
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TextAreaContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4px;
    width: 95%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2px;
    width: 95%;
  }
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  resize: vertical;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  max-height: 150px;
  border-radius: 8px;
`;

export const ReplaceButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: ${theme.colors.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  svg {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

/**
 * Error message styled component.
 * Ensures the error text is shown directly below the input/textarea in the same column.
 */
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 4px;
  font-size: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;
