import theme from "../../theme/Theme";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.light};
  color: ${theme.colors.primary};
  padding: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};

  @media (max-width: ${theme.breakpoints.mobile}) {
    
    gap: ${theme.spacing(1)};
  }


  @media (max-width: ${theme.breakpoints.tablet}) {

    gap: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
  
    gap: ${theme.spacing(1)};
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.display};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        font-size: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: ${theme.spacing(1)};
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        gap: ${theme.spacing(1)};
      }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${theme.spacing(1)};
  padding: ${theme.spacing(2)};
  border: 1px solid ${theme.colors.text};
  border-radius: 40px; /* Rounded corners for the box */
  background-color: transparent; /* No background fill */
  color: ${theme.colors.text}; /* Icon color */

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    display: none;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: ${theme.spacing(1)};
      display: none;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        gap: ${theme.spacing(1)};
      }
`;

export const Icon = styled.div`
  font-size: 16px;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 14px;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        font-size: 14px;
      } 
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.text};
  border-radius: 40px;
  padding: ${theme.spacing(1)};
  gap: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    // display: none;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: ${theme.spacing(1)};
      float: right;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        gap: ${theme.spacing(1)};
      } 
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Align username and email vertically */
  align-items: flex-start; /* Align text to the left */

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
    display: none;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      gap: ${theme.spacing(1)};
    //   display: none;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        gap: ${theme.spacing(1)};
      }
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.text};
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 12px;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 12px;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        font-size: 12px;
      }
`;

export const UserEmail = styled.span`
  font-size: 12px;
  color: ${theme.colors.text};
  opacity: 0.8;
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 10px;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 10px;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        font-size: 10px;
      }
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 25px;
    height: 25px;
  }
    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 25px;
      height: 25px;
    }
      @media (max-width: ${theme.breakpoints.desktop}) {
        width: 25px;
        height: 25px;
      }
`;
