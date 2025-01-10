import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
  }

  .accent-text {
    font-family: ${(props) => props.theme.fonts.accent};
  }

  .display-text {
    font-family: ${(props) => props.theme.fonts.display};
  }
`;

export default GlobalStyle;
