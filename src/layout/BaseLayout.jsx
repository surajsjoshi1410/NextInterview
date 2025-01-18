import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { PageWrapper, ContentWrapper } from "./BaseLayout.style";
import Header from "../components/Header/Header";

const BaseLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <PageWrapper isExpanded={isExpanded}>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} setTitle={setTitle} />
      <ContentWrapper isExpanded={isExpanded}>
        <Header title={title} />
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default BaseLayout;
