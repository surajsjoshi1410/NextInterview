import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background: linear-gradient(
    to bottom,
    ${theme.colors.secondary},
    ${theme.colors.primary}
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: ${theme.fonts.body};
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }
`;

export const Stats = styled.div`
  background: #f5f5f5;
  width: 95%;
  margin: 0 auto;
  border-radius: 8px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex: unset;
  }

  .stats-container {
    display: flex;
    width: 98%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    border: 1px solid #f8f8f8;
    border-radius: 8px;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${theme.spacing(1)};
  padding-left: ${theme.spacing(3)};
  margin-top: 20px;
  flex: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex: unset;
  }
`;

export const StatLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.sidebarTextColor};
  font-family: ${theme.fonts.body};
  margin: 0;
`;

export const StatValue = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  margin: ${theme.spacing(1)};
  font-family: ${theme.fonts.body};
`;

export const Divider = styled.div`
  width: 1px;
  background-color: ${theme.colors.textgray};
  height: 50px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 80%;
    height: 1px;
  }
`;
