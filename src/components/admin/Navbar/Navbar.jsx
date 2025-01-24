import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { AppBarWrap } from "./Navbar.styles";

function NavBar() {
  const location = useLocation();

  // Function to generate breadcrumb items based on the current route
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x); // Split the path into segments
    const breadcrumbItems = [];

    let currentPath = "";
    // Add the breadcrumbs dynamically based on the path segments
    pathnames.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push(
        <Breadcrumb.Item key={currentPath}>
          <Link to={currentPath}>
            {/* Capitalize the first letter of each segment */}
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
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
          {/* Use separator=">" for the custom breadcrumb separator */}
          <Breadcrumb className="text-sm" separator=">">
            {generateBreadcrumbs()}
          </Breadcrumb>
        </div>

        {/* Right Section */}
        <div className="appbar-right">
          {/* Add any right-side content (like notifications, profile, etc.) */}
        </div>
      </div>
    </AppBarWrap>
  );
}

export default NavBar;
