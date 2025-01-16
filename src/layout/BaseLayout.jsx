import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { PageWrapper, ContentWrapper } from "./BaseLayout.style";
import Header from "../components/Header/Header";

const BaseLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PageWrapper isExpanded={isExpanded}>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    
      <ContentWrapper isExpanded={isExpanded}>
      <Header  />
    
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default BaseLayout;
