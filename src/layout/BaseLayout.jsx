import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const BaseLayout = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        rajat
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
