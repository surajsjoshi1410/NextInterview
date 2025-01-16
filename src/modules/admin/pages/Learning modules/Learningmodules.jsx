import React, { useState } from "react";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import { ContentWrapper } from "../../../../components/Sidebar/Sidebar.styles";
import LearningModulesStats from "../../components/Learningmodulescomponents/LearningModulesStats/Learningmodulesstats";
import LearningModulesListView from "../../components/Learningmodulescomponents/LearningModulesListView/Learningmoduleslistview";

const LearningModules = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const modules = [
    { title: "Diagnosing and Investigating Metrics", topics: 5 },
    { title: "Diagnosing and Investigating Metrics", topics: 5 },
    { title: "Diagnosing and Investigating Metrics", topics: 5 },
    { title: "Diagnosing and Investigating Metrics", topics: 5 },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Content */}
      <ContentWrapper isExpanded={isExpanded}>
        <h2>Learning Modules</h2>
        <LearningModulesStats />
        <LearningModulesListView modules={modules} />
      </ContentWrapper>
    </div>
  );
};

export default LearningModules;
