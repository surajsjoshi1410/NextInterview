import React, { useState } from "react";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import SkillAssesmentStats from "../../components/SkillAssesmentComponents/SkillAssesmentStats/SkillAssesmentStats";
import { ContentWrapper } from "../../../../components/Sidebar/Sidebar.styles";
import EngagementInsights from "../../components/SkillAssesmentComponents/Engagement Insights/EngagementInsights";
import SkillAssesmentBarGraph from "../../components/SkillAssesmentComponents/SkillAssesmentBarGraph/SkillAssesmentBarGraph";
import QuestionsName from "../../components/SkillAssesmentComponents/QuestionsName/QuestionsName";

const SkillAssessment = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {/* <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}
      <ContentWrapper isExpanded={isExpanded}>
        <SkillAssesmentStats />
        <EngagementInsights/>
        <SkillAssesmentBarGraph />
        <QuestionsName />
      </ContentWrapper>
    </div>
  );
};

export default SkillAssessment;
