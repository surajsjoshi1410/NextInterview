import React from "react";
import { HeaderWrapper, StatsContainer, StatCard } from "./SkillAssesmentStats.styles";

const SkillAssesmentStats = () => {
  return (
    <div>
      <HeaderWrapper>
        <h1>Skill Assesment Test</h1>
        <p>Diagnosing and Investigating Metrics</p>
        <span>Uploaded on: 12/12/24 12:01:01 pm</span>
      </HeaderWrapper>
      <StatsContainer>
        <StatCard>
          <p>Total Attempts</p>
          <h3>1245</h3>
        </StatCard>
        <StatCard>
          <p>Completion Rate</p>
          <h3>90%</h3>
        </StatCard>
        <StatCard>
          <p>Avg. Score</p>
          <h3>75%</h3>
        </StatCard>
        <StatCard>
          <p>Highest Score</p>
          <h3>95%</h3>
        </StatCard>
      </StatsContainer>
    </div>
  );
};

export default SkillAssesmentStats;
