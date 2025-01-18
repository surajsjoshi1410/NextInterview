import styled from "styled-components";
import theme from "../../../../theme/Theme";

export const Container = styled.div`
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.body};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)};
    gap: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(1)};
    gap: ${theme.spacing(2)};
  }
`;
