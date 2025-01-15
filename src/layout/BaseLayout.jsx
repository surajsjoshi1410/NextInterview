import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { PageWrapper, ContentWrapper } from "./BaseLayout.style";

const BaseLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PageWrapper>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ContentWrapper isExpanded={isExpanded}>
        rajat
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default BaseLayout;
