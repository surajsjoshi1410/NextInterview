import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin-left: 30px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: 15px;
    padding: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: 10px;
    padding: ${theme.spacing(2)};
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1.3rem;
    margin-bottom: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: ${theme.spacing(2)};
  }
`;

export const UploadSection = styled.div`
  margin-bottom: ${theme.spacing(6)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing(4)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const UploadBox = styled.div`
  background-color: ${theme.colors.lightgreen};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  text-align: center;
  border: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const UploadText = styled.p`
  font-size: 1rem;
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const UploadIcon = styled.img`
  font-size: 2rem;
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const DragDropText = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.black};
  font-weight: bold;
  margin-bottom: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
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

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const ChallengesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(2)};
  }
`;

export const ChallengeCard = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 8px;
  padding: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const ChallengeHeader = styled.h3`
  font-size: 1rem;
  font-family: ${theme.fonts.accent};
  color: ${theme.colors.black};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

export const ChallengeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

export const UploadDate = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const Status = styled.span`
  font-size: 25px;
  color: ${theme.colors.secondary};
  font-weight: bold;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
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
    background-color: ${theme.colors.secondary}90;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: ${theme.spacing(0.8)} ${theme.spacing(1.5)};
  }
`;

export const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(8)};
  align-items: center;
  width: 35%;
  margin-left: auto;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(0.5)};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${theme.colors.secondary};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: ${theme.spacing(0.8)} ${theme.spacing(1.5)};
  }
`;
