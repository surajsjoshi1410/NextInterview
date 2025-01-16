import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Header = styled.div`
  margin-bottom: ${theme.spacing(4)};
  display: flex;
  line-height: 1;
  img {
    margin-top: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h1 {
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.text};
  }

  p {
    color: ${theme.colors.sidebarActiveBgColor};
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`;

export const StatCard = styled.div`
  padding: ${theme.spacing(2)};
  border-radius: 8px;
  margin-left: 30px;
  margin-right: 30px;

  h3 {
    font-size: 24px;
    color: ${theme.colors.primary};
  }

  p {
    margin: 0;
    color: ${theme.colors.text};
  }
`;
