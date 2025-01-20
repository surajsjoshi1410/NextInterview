import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 85%;
  margin-left: 10%;
  margin: 40px auto;
  font-family: ${theme.fonts.body};
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 20px;
  text-align: left;
  margin-bottom: ${theme.spacing(3)};
`;

export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
//   align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${theme.colors.sidebarHoverBgColor};
    margin-bottom: ${theme.spacing(1)};
  }
`;

export const UploadButton = styled.div`
  label {
    cursor: pointer;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.body};
    font-size: 14px;

    input {
      display: none;
    }
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(0.5)};
  font-size: 14px;
`;

export const InputField = styled.input`
  padding: ${theme.spacing(1)};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 5px;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  width: 50%;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

export const SaveButton = styled.button`
  background-color: ${theme.colors.bluetext};
  color: white;
  padding: ${theme.spacing(1.5)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${theme.fonts.body};
  font-size: 16px;
  margin-top: ${theme.spacing(3)};
      width: 20%;
    margin-left: auto;

  &:hover {
    opacity: 0.9;
  }
`;

export const ResetButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${theme.spacing(3)};
`;

export const ResetButton = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.bluetext};
  padding: ${theme.spacing(1.5)};
  border: 1px solid ${theme.colors.bluetext};
  border-radius: 5px;
  cursor: pointer;
  font-family: ${theme.fonts.body};
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;
