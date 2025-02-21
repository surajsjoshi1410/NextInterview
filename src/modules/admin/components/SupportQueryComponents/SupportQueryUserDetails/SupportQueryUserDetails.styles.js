import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  margin-left: 5%;
  width: 90%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
  .hrdivider {
    width: 2px;
    height: 70px;
    background-color: ${theme.colors.sidebarTextColor}40;
    margin-left: 50px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const QueryId = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.text};
  .queryDetails {
    display: flex;
    margin-bottom: 10px;
  }

  .query {
    font-size: 24px;
    margin: 0;
  }
`;

export const SeverityBadge = styled.span`
  background-color: ${(props) =>
    props.severity === "High" ? theme.colors.error : theme.colors.warning};
  color: ${theme.colors.black};
  padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: ${theme.spacing(1)};
  display: flex;
  align-items: center;
`;

export const QueryDetails = styled.p`
  font-size: 20px;
  color: ${theme.colors.sidebarTextColor}60;
  margin: 0;
`;
export const QueryDate = styled.p`
  font-size: 12px;
  color: ${theme.colors.sidebarTextColor}60;
  margin: 0;
`;

export const RaisedBy = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  .RaisedBy {
    font-size: 20px;
    color: ${theme.colors.sidebarTextColor}60;
    padding: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  strong {
    color: ${theme.colors.text};
    font-size: 1rem;
  }
  span {
    color: ${theme.colors.textgray};
    font-size: 0.8rem;
  }
`;

export const QueryInfoSection = styled.div`
  margin-top: ${theme.spacing(4)};
`;

export const QueryHeading = styled.h4`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};
`;

export const QueryContent = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textgray};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  padding: ${theme.spacing(2)};
  border-radius: 4px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.sidebarHoverBgColor};
  margin: ${theme.spacing(4)} 0;
`;

export const CommunicationLog = styled.div`
  margin-top: ${theme.spacing(4)};
`;

export const LogEntry = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing(2)};
  gap: ${theme.spacing(2)};
`;

export const LogTime = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.textgray};
  min-width: 150px;
`;

export const LogMessage = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.text};
`;
