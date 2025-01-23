import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 40px;
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
`;

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.info};
  font-weight: bold;
  // backgroundColor: ${theme.colors.error};
 border : 1px solid ${theme.colors.sidebarHoverBgColor};
  width: 90px;
  padding: 4px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin: ${theme.spacing(1)} 0;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.text};
  line-height: 1.5;
`;

export const Topics = styled.div`
  display: flex;
  gap: 8px;
  margin: ${theme.spacing(1)} 0;
  // background-color: #F5F5F5;
`;

export const Topic = styled.div`
  background-color: ${theme.colors.sidebarActiveBgColor};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: ${theme.colors.sidebarTextColor};
`;

export const Attendees = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.text};
  margin: ${theme.spacing(1)} 0;
`;

export const Stats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: ${theme.spacing(5)};
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  padding: ${theme.spacing(0.5)};
  border-radius: 14px;
  gap: 8px;
  font-size: 12px;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.text};
`;

export const StatValue = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const PreviouslyAskedIn = styled.div`
  margin-top: ${theme.spacing(2)};
  font-size: 0.9rem;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // gap: 8px;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
