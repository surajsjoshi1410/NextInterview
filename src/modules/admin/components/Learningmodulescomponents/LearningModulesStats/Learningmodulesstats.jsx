import React from "react";
import {
  Header,
  Stats,
  StatCard,
  StatCard1,
  StatCard2,
} from "./Learningmodulesstats.styles";

const LearningModulesStats = () => {
  return (
    <Header>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "40px" }}>
          <Stats>
            <StatCard>
              <p>Total Topics Published</p>
              <h3>35</h3>
            </StatCard>
            <StatCard>
              <p>Avg. Completion Rate</p>
              <h3>75%</h3>
            </StatCard>
            <StatCard>
              <p>Avg. Quiz Score</p>
              <h3>78%</h3>
            </StatCard>
          </Stats>
        </div>

        <div>
          <StatCard1>
            <p>Most Viewed</p>
            <strong>AI Basics – (1,245 views)</strong>
          </StatCard1>
          <StatCard2>
            <p>Least Viewed</p>
            <strong>Data Science Basics & Advanced – (1,245 views)</strong>
          </StatCard2>
        </div>
      </div>
    </Header>
  );
};

export default LearningModulesStats;
