import styled from "styled-components";
import theme from "../../../../../theme/Theme";

export const GraphWrapper = styled.div`
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.sidebarHoverBgColor};
  border-radius: 8px;
  padding: ${theme.spacing(3)};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
margin-left: -100px;

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: 18px;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text};
  }

  .subheading {
    font-family: ${theme.fonts.body};
    font-size: 14px;
    margin-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text};
  }
`;
