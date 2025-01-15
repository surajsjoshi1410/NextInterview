import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import Header from "./components/Header/Header";
import HeaderWithLogo from "./components/HeaderWithLogo/HeaderWithLogo";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
   <Header />
   {/* <HeaderWithLogo /> */}
    </ThemeProvider>
  );


}

export default App;
