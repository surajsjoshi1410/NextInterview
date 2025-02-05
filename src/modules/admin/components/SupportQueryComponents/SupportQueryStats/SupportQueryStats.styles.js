import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
  border-radius: 8px;
  padding: ${theme.spacing(2)};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: ${theme.fonts.body};
margin-left: 40px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing(2)};
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex: unset;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-top: ${theme.spacing(0.5)};
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
