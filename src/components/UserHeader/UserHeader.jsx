import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
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
  UserHeaderWrapper,
} from "./UserHeader.styles";
import { PiLineVertical } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { MdOutlineInfo } from "react-icons/md";
import { UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/Theme";
import { list } from "firebase/storage";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

// **Logout Confirmation Modal Component**

// **Dropdown Component**
const Dropdown = ({ isOpen, onClose, position, onLogoutClick }) => {
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Close dropdown if clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dropdownStyles = {
    position: "absolute",
    top: position.top + 50, // Adjust position below the avatar
    left: position.left - 140,
    background: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "200px",
    padding: "10px 0",
    cursor: "pointer",
  };
  const listyles={
    FontFace: "DM Sans",
    fontSize: "16px",
    fontWeight: "500",
    color: theme.colors.textgray,
    listStyle: "none",
    
 
  }
  const listLIStyles={
    // border: "1px solid #ddd",
    // borderRadius: "8px",
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  }

  return ReactDOM.createPortal(
    <div ref={dropdownRef} style={dropdownStyles}>
      <ul style={listyles}>
        <li style={listLIStyles}  onClick={() => { navigate("/user/userprofile"); onClose(); }}> <CgProfile /> My Profile</li>
        <li style={listLIStyles} onClick={() => { alert("Customer Support clicked"); onClose(); }}> <MdOutlineSupportAgent /> Customer Support</li>
        <li style={listLIStyles} onClick={onLogoutClick}><RiLogoutBoxLine /> Logout</li>
      </ul>
    </div>,
    document.body
  );
};

// **Main Header Component**
const UserHeader = ({ title }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [avatarPosition, setAvatarPosition] = useState({ top: 0, left: 0 });

  const handleAvatarClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    setAvatarPosition({ top: rect.top + window.scrollY, left: rect.left });
    setIsProfileOpen((prevState) => !prevState); // Toggle the dropdown menu
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing session, redirecting)
    alert("Logged out successfully!");
    setIsLogoutModalOpen(false);
  };

  return (
    <>
    <UserHeaderWrapper>
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
            <div style={{ position: "relative" }} className="dropdown-container">
              <Avatar src={Logo} alt="Profile" onClick={handleAvatarClick} />
              <Dropdown
                isOpen={isProfileOpen}
                position={avatarPosition}
                onClose={() => setIsProfileOpen(false)}
                onLogoutClick={() => {
                  setIsLogoutModalOpen(true);
                  // setIsProfileOpen(false);
                }}
              />
            </div>
            <UserButton afterSignOutUrl="/" />
          </UserProfile>
        </HeaderRight>
      </HeaderContainer>

      
      {isLogoutModalOpen &&
        <div className="User-Header-modal-overlay">
          <div className="User-Header-modal-content">
            <h3>Are you sure, you want to Logout?</h3>
            <div className="User-Header-modal-buttons">
              <button className="User-Header-cancel-btn" onClick={() => setIsLogoutModalOpen(false)}>
                Cancel
              </button>
              <button className="User-Header-logout-btn" onClick={() => {alert("Logged out successfully!");handleLogout( )}}>
                Logout
              </button>
            </div>
          </div>
        </div>
      }
      </UserHeaderWrapper>
    </>
  );
};

UserHeader.propTypes = {
  title: PropTypes.string.isRequired, // Enforces a dynamic title
};

export default UserHeader;
