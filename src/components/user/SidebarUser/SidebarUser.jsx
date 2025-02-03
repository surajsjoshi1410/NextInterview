import React from "react";
import { SideBarwrapper } from "../SidebarUser/SidebarUser.styles";
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
    { id: 1, name: "Dashboard", path: "/user", icon: <RxDashboard /> },
    { id: 2, name: "Home", path: "/user/home", icon: <FiHome /> },
    { id: 3, name: "Learning Module", path: "/user/learning", icon: <MdOutlineMenuBook /> },
    {id: 4, name: "Quickly Revise", path: "/user/revise", icon: <IoIosInformationCircleOutline /> },
    {id: 5, name: "Question Bank", path: "/user/questionBank", icon: <TbDeviceIpadQuestion /> },
    { id: 6, name: "Challenges", path: "/user/challenges", icon: <MdOutlineLockClock /> },
    { id: 7, name: "Interview", path: "/user/interview", icon: <CiMobile1 /> },
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
