import theme from "../../theme/Theme";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.light};

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
    padding: ${theme.spacing(1)};
    
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
      padding: ${theme.spacing(1)};
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        justify-content: flex-start;
        padding: ${theme.spacing(1)};
      }
`;

export const LogoImage = styled.img`
  height: 40px; /* Adjust the height as needed */
  width: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 30px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 35px;
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    height: 40px;
  }
`;
