import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/admin/Sidebar/Sidebar";
import { ContentWrapper } from "../../../../components/admin/Sidebar/Sidebar.styles";
import LearningModulesStats from "../../components/Learningmodulescomponents/LearningModulesStats/Learningmodulesstats";
import LearningModulesListView from "../../components/Learningmodulescomponents/LearningModulesListView/Learningmoduleslistview";
// import { Header } from "../../components/Learningmodulescomponents/LearningModulesStats/Learningmodulesstats.styles";
import Header from "../../../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getModule } from "../../../../api/addNewModuleApi";
const LearningModules = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  //rajatgit

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      {/* <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}

      {/* Content */}
      <ContentWrapper isExpanded={isExpanded} style={{ width: "100%" }}>
        {/* <Header/> */}
        {/* <h2>Learning Modules</h2> */}
        <LearningModulesStats />
        <LearningModulesListView />
      </ContentWrapper>
      {/* <Outlet/> */}
    </div>
  );
};

export default LearningModules;
