import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const HeaderWrapper = styled.div`
  // text-align: center;
  margin-bottom: ${theme.spacing(4)};

  h1 {
    font-family: ${theme.fonts.heading};
    font-size: 24px;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing(1)};
  }

  p {
    font-family: ${theme.fonts.body};
    font-size: 16px;
    color: ${theme.colors.sidebarTextColor};
    margin-bottom: ${theme.spacing(1)};
  }

  span {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.textgray};
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.light};
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: ${theme.spacing(2)};
  }
`;

export const StatCard = styled.div`
  flex: 1;
  text-align: center;

  p {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    color: ${theme.colors.sidebarTextColor};
    margin-bottom: ${theme.spacing(0.5)};
  }

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 20px;
    color: ${theme.colors.text};
  }

  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.textgray};

    @media (max-width: ${theme.breakpoints.tablet}) {
      border-right: none;
    }
  }
`;
