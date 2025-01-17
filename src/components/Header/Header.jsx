import React from "react";
import Logo from "../../assets/Logo.png";
import PropTypes from "prop-types";
import {
  HeaderContainer,
  Title,
  HeaderRight,
  IconWrapper,
  Icon,
  UserProfile,
  UserDetails,
  UserName,
  UserEmail,
  Avatar,
} from "./Header.styles";
import { PiLineVertical } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { MdOutlineInfo } from "react-icons/md";

const Header = ({ title}) => {
  return ( 
    <HeaderContainer  >
      <div>
        <Title>{title} </Title> 
      </div>
      <HeaderRight>
        <IconWrapper>
          <Icon>
            <BsBell title="Notifications" />
          </Icon>
          <Icon>
            <PiLineVertical title="VerticalLine" />
          </Icon>
          <Icon>
            <MdOutlineInfo title="Information" />
          </Icon>
        </IconWrapper>
        <UserProfile>
          <UserDetails>
            <UserName>Krishna</UserName>
            <UserEmail>Krishna@gmail.com</UserEmail>
          </UserDetails>
          <Avatar src={Logo} alt="Profile" />
        </UserProfile>
      </HeaderRight>
    </HeaderContainer>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired, // Enforces a dynamic title
};

export default Header;
