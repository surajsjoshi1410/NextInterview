import React from "react";
import { Breadcrumb } from "antd"; // Importing Ant Design's Breadcrumb
import { MdNotificationsNone } from "react-icons/md";
import { Link, useLocation } from "react-router-dom"; // Importing useLocation from react-router-dom
import { AppBarWrap } from "./Navbar.styles"; // Adjust the path accordingly

function NavBar() {
  const location = useLocation();

  // Function to generate breadcrumb items based on the current route
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x); // Split the path into segments
    const breadcrumbItems = [];

    let currentPath = ""; // Start with an empty path
    // Add the breadcrumbs dynamically based on the path segments
    pathnames.forEach((segment) => {
      currentPath += `/${segment}`; // Build the path incrementally
      breadcrumbItems.push(
        <Breadcrumb.Item key={currentPath}>
          <Link to={currentPath}>
            {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize first letter */}
          </Link>
        </Breadcrumb.Item>
      );
    });

    return breadcrumbItems;
  };

  return (
    <AppBarWrap>
      <div className="appbar-content">
        {/* Center Section - Breadcrumb */}
        <div className="appbar-breadcrumb">
          <Breadcrumb className="text-sm">
            {generateBreadcrumbs()} {/* Render the dynamic breadcrumbs */}
          </Breadcrumb>
        </div>

        {/* Right Section */}
        <div className="appbar-right">
        
        </div>
      </div>
    </AppBarWrap>
  );
}

export default NavBar;
