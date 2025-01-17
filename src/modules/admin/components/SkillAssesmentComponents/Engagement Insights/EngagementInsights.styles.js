import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const InsightsWrapper = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  padding: ${theme.spacing(3)};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 700px;
  

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 18px;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text};
  }
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const StatBox = styled.div`
  flex: 1;
  text-align: center;
  margin: 0 ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: ${theme.spacing(1)} 0;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${theme.colors.text};
`;

export const StatValue = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const Note = styled.div`
  font-size: 14px;
  margin-top: ${theme.spacing(1)};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;

  .badge {
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    padding: ${theme.spacing(0.5)} ${theme.spacing(1)};
    border-radius: 4px;
    margin-right: ${theme.spacing(1)};
    text-transform: uppercase;

    &.first-attempt {
      background-color: ${theme.colors.success};
      color: ${theme.colors.light};
    }

    &.retakes {
      background-color: ${theme.colors.warning};
      color: ${theme.colors.text};
    }
  }
`;
