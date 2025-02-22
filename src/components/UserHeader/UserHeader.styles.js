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

  overflow: visible;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(1)};
  }

  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: ${theme.spacing(1)};
  }

  .dropdown-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .dropdown-menu ul li {
    padding: 10px 15px;
    cursor: pointer;
    font-size: 14px;
  }

  .dropdown-menu ul li:hover {
    background-color: #f5f5f5;
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

export const ModalContainer = styled.div`
  position: absolute; /* Changed from fixed */
  top: 25%;
  left: 85%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalCard = styled.div`
  background: ${theme.colors.light};
  padding: ${theme.spacing(4)};
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.text};
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
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
export const UserHeaderWrapper = styled.div`
  /* Modal Background Overlay */
  .User-Header-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  /* Modal Content */
  .User-Header-modal-content {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    min-width: 300px;
  }

  /* Modal Buttons */
  .User-Header-modal-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }

  .User-Header-cancel-btn {
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background: white;
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    cursor: pointer;
  }

  .User-Header-cancel-btn:hover {
    background: ${({ theme }) => theme.colors.info};
    color: white;
  }

  .User-Header-logout-btn {
    padding: 10px 15px;
    border: none;
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .User-Header-logout-btn:hover {
    background: ${({ theme }) => theme.colors.info};
  }
`;
