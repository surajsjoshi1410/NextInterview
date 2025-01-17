import React from "react";
import { SideBarwrapper } from "./Sidebar.styles";
import Logo from "./../../assets/Logo.png";
import { FiHome } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsFileEarmarkLock } from "react-icons/bs";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { IoIosRepeat } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();

  const getLearningLinkClass = ({ isActive }) => {
    // If the normal check says it’s active
    // OR if the path is `/uploadmodule`, mark it active
    if (isActive || location.pathname === "/uploadmodule") {
      return "menu-link active";
    }
    return "menu-link";
  };

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
              to="/dashboard"
              activeClassName="active"
              className="menu-link"
            >
              <span className="menu-link-icon">
                <RxDashboard />
              </span>
              <span className="menu-link-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/home" activeClassName="active" className="menu-link">
              <span className="menu-link-icon">
                <FiHome />
              </span>
              <span className="menu-link-text">Home</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/admin/learning" className={getLearningLinkClass}>
              <span className="menu-link-icon">
                <MdOutlineMenuBook />
              </span>
              <span className="menu-link-text">Learning Module</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/revise"
              activeClassName="active"
              className="menu-link"
            >
              <span className="menu-link-icon">
                <IoIosRepeat />
              </span>
              <span className="menu-link-text">Quickly Revise</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/questions"
              activeClassName="active"
              className="menu-link"
            >
              <span className="menu-link-icon">
                <TbDeviceIpadQuestion />
              </span>
              <span className="menu-link-text">Question Bank</span>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/challenges"
              activeClassName="active"
              className="menu-link"
            >
              <span className="menu-link-icon">
                <BsFileEarmarkLock />
              </span>
              <span className="menu-link-text">Challenges</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </SideBarwrapper>
  );
};

export default Sidebar;
