import React from "react";
import { SideBarwrapper } from "./Sidebar.styles";
import Logo from "../../../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import dboard from "../../../assets/Dashboard.svg";
import users from "../../../assets/Vector.svg";
import learnmod from "../../../assets/Learning_Module.svg";
import squerry from "../../../assets/Support_Query.svg";
import fcard from "../../../assets/Flash_Cards.svg";
import faq from "../../../assets/FAQ's.svg";
import challenge from "../../../assets/Challenges.svg";
import Settings from "../../../assets/Settings.svg";
import Notification from "../../../assets/Notifications.svg";

const Sidebar = ({ isExpanded, setIsExpanded, setTitle }) => {
  const location = useLocation();

  // const SidebarItem = [
  //   { id: 1, name: "Dashboard", path: "/admin", icon: <RxDashboard /> },
  //   { id: 2, name: "Users", path: "/admin/users", icon: <BsFileEarmarkLock /> },
  //   // { id: 2, name: "Home", path: "/admin/dashboard", icon: <FiHome /> },
  //   {
  //     id: 3,
  //     name: "Learning Module",
  //     path: "/admin/learning",
  //     icon: <MdOutlineMenuBook />,
  //   },
  //   {
  //     id: 4,
  //     name: "Support Query",
  //     path: "/admin/SupportQuery",
  //     icon: <TfiHeadphoneAlt />,
  //   },
  //   {
  //     id: 5,
  //     name: "Flashcards",
  //     path: "/admin/flashcards",
  //     icon: <CiMobile1 />,
  //   },
  //   {
  //     id: 6,
  //     name: "FAQ's",
  //     path: "/admin/faq",
  //     icon: <IoIosInformationCircleOutline />,
  //   },
  //   {
  //     id: 7,
  //     name: "Challenges",
  //     path: "/admin/challenges",
  //     icon: <MdOutlineLockClock />,
  //   },

  //   // { id: 8, name: "Notifications", path: "/admin/notifications", icon: <MdNotificationsNone /> },

  //   // { id: 9, name: "Settings", path: "/admin/settings", icon: <IoSettingsOutline /> },
  // ];

  const SidebarItem = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin",
      icon: <img className="svgicon" src={dboard} alt="Users Icon" />,
    },
    {
      id: 2,
      name: "Users",
      path: "/admin/users",
      icon: <img className="svgicon" src={users} alt="Users Icon" />,
    },
    // { id: 2, name: "Home", path: "/admin/dashboard", icon: <FiHome /> },
    {
      id: 3,
      name: "Learning Module",
      path: "/admin/learning",
      icon: <img className="svgicon" src={learnmod} alt="Users Icon" />,
    },
    {
      id: 4,
      name: "Support Query",
      path: "/admin/SupportQuery",
      icon: <img className="svgicon" src={squerry} alt="Users Icon" />,
    },
    {
      id: 5,
      name: "Flashcards",
      path: "/admin/flashcards",
      icon: <img className="svgicon" src={fcard} alt="Users Icon" />,
    },
    {
      id: 6,
      name: "FAQ's",
      path: "/admin/faq",
      icon: <img className="svgicon" src={faq} alt="Users Icon" />,
    },
    {
      id: 7,
      name: "Challenges",
      path: "/admin/challenges",
      icon: <img className="svgicon" src={challenge} alt="Users Icon" />,
    },

    {
      id: 8,
      name: "Notifications",
      path: "/admin/notifications",
      //  icon: <MdNotificationsNone />
      icon: <img className="svgicon" src={Notification} alt="Users Icon" />,
    },

    {
      id: 9,
      name: "Settings",
      path: "/admin/settings",
      //  icon: <IoSettingsOutline />
      icon: <img className="svgicon" src={Settings} alt="Users Icon" />,
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
    </SideBarwrapper>
  );
};

export default Sidebar;
