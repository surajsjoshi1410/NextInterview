import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
//   background-color: ${theme.colors.light};
background-color:"#fff";
font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin-left: 30px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(4)};
`;

export const UploadSection = styled.div`
  margin-bottom: ${theme.spacing(6)};
`;

export const UploadBox = styled.div`
  background-color: ${theme.colors.lightgreen};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  text-align: center;
  border:none;
//   border: 1px dashed ${theme.colors.primary};
`;

export const UploadText = styled.p`
  font-size: 1rem;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};
`;

export const UploadIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.primary};
`;

export const DragDropText = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.black};
  font-weight: bold;
  margin-bottom: ${theme.spacing(1)};
`;

export const BrowseLink = styled.span`
  color: ${theme.colors.secondary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SupportedFormats = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
`;

export const ChallengesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
`;

export const ChallengeCard = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 8px;
  padding: ${theme.spacing(4)};
`;

export const ChallengeHeader = styled.h3`
  font-size: 1rem;
  font-family: ${theme.fonts.accent};
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};
`;

export const ChallengeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const UploadDate = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
`;

export const Status = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.secondary};
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AnalyticsButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.light};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ActionButtons = styled.button`
//   background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  background-color:transparent;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  justify-content: center;
  flex-direction: row;
  margin:auto;


`;

export const Button = styled.button`
  background-color: transparent;
  color: ${theme.colors.secondary};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;


`;