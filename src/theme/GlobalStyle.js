import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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


      .page-wrapper{
        min-height: 100vh;
        display: flex;
        width: 100%;
    }

    .content-wrapper{
        flex: 1;
        max-width: 1600px;
        margin-right: auto;
    
         margin-left: ${(props) => (props.isExpanded ? "200px" : "60px")};
  padding: 20px;
  width: calc(100% - ${(props) => (props.isExpanded ? "200px" : "60px")});
  transition: margin-left 0.3s ease, width 0.3s ease;
    }
    .content-wrapper2{
        flex: 1;
        max-width: 100vw;
        max-height: 100vh;
   
    
        


  transition: margin-left 0.3s ease, width 0.3s ease;
    }
`;

export default GlobalStyle;
