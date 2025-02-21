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
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PiVideoConference } from "react-icons/pi";
import dboard from "../../../assets/Dashboard.svg";
import homeicon from "../../../assets/homeicon.svg";
import learnmod from "../../../assets/Learning_Module.svg";
import quick from "../../../assets/quicklyrevise.svg";
import question from "../../../assets/questionbank.svg";
import challenge from "../../../assets/Challenges.svg";

const Sidebar = ({ isExpanded, setIsExpanded, setTitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const SidebarItem = [
    {
      id: 1,
      name: "Dashboard",
      path: "/user",
      icon: <img className="svgicon" src={dboard} alt="Users Icon" />,
    },
    {
      id: 2,
      name: "Home",
      path: "/user/home",
      icon: <img className="svgicon" src={homeicon} alt="homeicon" />,
    },
    {
      id: 3,
      name: "Learning Module",
      path: "/user/learning",
      icon: <img className="svgicon" src={learnmod} alt="Users Icon" />,
    },
    {
      id: 4,
      name: "Quickly Revise",
      path: "/user/revise",
      icon: <img className="svgicon" src={quick} alt="quick" />,
    },
    {
      id: 5,
      name: "Question Bank",
      path: "/user/questionBank",
      icon: <img className="svgicon" src={question} alt="question" />,
    },
    {
      id: 6,
      name: "Challenges",
      path: "/user/challenges",
      icon: <img className="svgicon" src={challenge} alt="Users Icon" />,
    },
    {
      id: 8,
      name: "Subscription",
      path: "/user/subscription",
      icon: <FaMoneyCheckAlt />,
    },
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
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
                onClick={() => {
                  setTitle(item.name),
                    localStorage.setItem("title", JSON.stringify(item.name));
                }}
                end
              >
                <span className="menu-link-icon">{item.icon}</span>
                <span className="menu-link-text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="mock-card">
        <div className="mock-card-icon">
          <PiVideoConference />
        </div>
        <h2 className="mock-card-title">Take a Mock Interview</h2>
        <p className="mock-card-description">
          Take a Mock interview to understand whether you are Interview Ready!
        </p>
        <button
          className="mock-card-button"
          onClick={() => navigate("/user/interview")}
        >
          Start interview
        </button>
      </div>
    </SideBarwrapper>
  );
};

export default Sidebar;
