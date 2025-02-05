import React from "react";
import { SideBarwrapper } from "./Sidebar.styles";
import Logo from "../../../assets/Logo.png";
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
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({ isExpanded, setIsExpanded, setTitle }) => {
  const location = useLocation();

  const SidebarItem = [
    { id: 1, name: "Dashboard", path: "/admin", icon: <RxDashboard /> },
    // { id: 2, name: "Home", path: "/admin/dashboard", icon: <FiHome /> },
    { id: 3, name: "Learning Module", path: "/admin/learning", icon: <MdOutlineMenuBook /> },
    { id: 4, name: "Flashcards", path: "/admin/flashcards", icon: <CiMobile1 /> },
    { id: 5, name: "Challenges", path: "/admin/challenges", icon: <MdOutlineLockClock /> },
    { id: 6, name: "FAQ's", path: "/admin/faq", icon: <IoIosInformationCircleOutline /> },
    { id: 7, name: "Notifications", path: "/admin/notifications", icon: <MdNotificationsNone /> },
    { id: 8, name: "Support Query", path: "/admin/SupportQuery", icon: <TfiHeadphoneAlt /> },
    { id: 9, name: "Settings", path: "/admin/settings", icon: <IoSettingsOutline /> },
    { id: 10, name: "Users", path: "/admin/users", icon: <BsFileEarmarkLock /> },
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
          {SidebarItem.map((item) => (
            <li className="menu-item" key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
                onClick={() => setTitle(item.name)}
              >
                <span className="menu-link-icon">{item.icon}</span>
                <span className="menu-link-text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SideBarwrapper>
  );
};

export default Sidebar;
