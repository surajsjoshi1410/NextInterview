import React from "react";
import { SideBarwrapper } from "./Sidebar.styles";
import Logo from "./../../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsFileEarmarkLock } from "react-icons/bs";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { IoIosRepeat } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineLockClock } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";

const Sidebar = ({ isExpanded, setIsExpanded, setTitle }) => {
  const location = useLocation();

  const SidebarItem = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: <RxDashboard /> },
    { id: 2, name: "Home", path: "/home", icon: <FiHome /> },
    { id: 3, name: "Learning", path: "/admin/learning", icon: <MdOutlineMenuBook /> },
    { id: 4, name: "Flashcards", path: "/admin/flashcards", icon: <CiMobile1 /> },
    { id: 5, name: "Quickly Revise", path: "/revise", icon: <IoIosRepeat /> },
    { id: 6, name: "Question Bank", path: "/questions", icon: <TbDeviceIpadQuestion /> },
    { id: 7, name: "Challenges", path: "/admin/challenges", icon: <MdOutlineLockClock /> },
    { id: 8, name: "FAQs", path: "/admin/faq", icon: <IoIosInformationCircleOutline /> },
    { id: 9, name: "Notifications", path: "/admin/notifications", icon: <MdNotificationsNone /> },
  ];

  return (
    <SideBarwrapper
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      isExpanded={isExpanded}
    >
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink
              to={SidebarItem[0].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[0].name)}
            >
              <span className="menu-link-icon">{SidebarItem[0].icon}</span>
              <span className="menu-link-text">{SidebarItem[0].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[1].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[1].name)}
            >
              <span className="menu-link-icon">{SidebarItem[1].icon}</span>
              <span className="menu-link-text">{SidebarItem[1].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[2].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[2].name)}
            >
              <span className="menu-link-icon">{SidebarItem[2].icon}</span>
              <span className="menu-link-text">{SidebarItem[2].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[3].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[3].name)}
            >
              <span className="menu-link-icon">{SidebarItem[3].icon}</span>
              <span className="menu-link-text">{SidebarItem[3].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[4].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[4].name)}
            >
              <span className="menu-link-icon">{SidebarItem[4].icon}</span>
              <span className="menu-link-text">{SidebarItem[4].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[5].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[5].name)}
            >
              <span className="menu-link-icon">{SidebarItem[5].icon}</span>
              <span className="menu-link-text">{SidebarItem[5].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[6].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[6].name)}
            >
              <span className="menu-link-icon">{SidebarItem[6].icon}</span>
              <span className="menu-link-text">{SidebarItem[6].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[7].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[7].name)}
            >
              <span className="menu-link-icon">{SidebarItem[7].icon}</span>
              <span className="menu-link-text">{SidebarItem[7].name}</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to={SidebarItem[8].path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
              onClick={() => setTitle(SidebarItem[8].name)}
            >
              <span className="menu-link-icon">{SidebarItem[8].icon}</span>
              <span className="menu-link-text">{SidebarItem[8].name}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </SideBarwrapper>
  );
};

export default Sidebar;
