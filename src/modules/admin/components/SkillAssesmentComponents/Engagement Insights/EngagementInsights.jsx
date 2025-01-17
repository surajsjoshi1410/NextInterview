import React from "react";
import { InsightsWrapper, StatsRow, StatBox, StatLabel, StatValue, Note } from "./EngagementInsights.styles";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const EngagementInsights = () => {
  return (
    <div style={{display: "flex" , gap: "20px"}}>
        <div>
      <h3>Engagement Insights</h3>

    <InsightsWrapper>
      <StatsRow>
        <StatBox>
          <StatLabel>Time Taken</StatLabel>
          <StatValue>Avg. 12m</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>Fastest</StatLabel>
          <StatValue>8m</StatValue>
        </StatBox>
        <StatBox>
          <StatLabel>Longest</StatLabel>
          <StatValue>24m</StatValue>
        </StatBox>
      </StatsRow>
      <Note>
        <span className="badge first-attempt">First Attempt</span> Success - 80%
      </Note>
      <Note>
        <span className="badge retakes">Retakes</span> Users retook the quiz at least once - 60%
      </Note>
    </InsightsWrapper>
    </div>
    <div>
    <FeedbackCard />
    </div>
    </div>
  );
};

export default EngagementInsights;
