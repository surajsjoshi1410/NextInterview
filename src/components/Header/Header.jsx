import React, { useState } from "react";
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
import { UserButton } from "@clerk/clerk-react";
import ProfileInfo from "../../../src/modules/admin/components/ProfileComponents/ProfileInfo";

const Header = ({ title }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsProfileOpen((prevState) => !prevState); // Toggle the profile view
  };

  return (
    <>
      <HeaderContainer>
        <div style={{ marginLeft: "60px" }}>
          <Title>{title}</Title> {/* Dynamic title with fallback */}
        </div>
        <HeaderRight>
          <IconWrapper>
            <Icon>
              <BsBell title="Notifications" />
            </Icon>
            <Icon>
              <PiLineVertical title="Vertical Line" />
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
            <Avatar src={Logo} alt="Profile" onClick={handleAvatarClick} />
            <UserButton afterSignOutUrl="/" />
          </UserProfile>
        </HeaderRight>
      </HeaderContainer>
      {isProfileOpen && <ProfileInfo onClose={handleAvatarClick} />}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired, // Enforces a dynamic title
};

export default Header;
