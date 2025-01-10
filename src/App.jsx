import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Rajat
    </ThemeProvider>
  );
}

export default App;
