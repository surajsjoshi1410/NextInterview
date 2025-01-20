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
              <h1>35</h1>
            </StatCard>
            <StatCard>
              <p>Avg. Completion Rate</p>
              <h1>75%</h1>
            </StatCard>
            <StatCard>
              <p>Avg. Quiz Score</p>
              <h1>78%</h1>
            </StatCard>
          </Stats>
        </div>

        <div>
          <StatCard1>
            <p>Most Viewed</p>
            <div>
              Ai Basics <strong> - (1,245 views)</strong>
            </div>
          </StatCard1>
          <StatCard2>
            <p>Least Viewed</p>
            <div>
              Data Science Basics & Advanced  <strong> - (1,245 views)</strong>
            </div>
          </StatCard2>
        </div>
      </div>
    </Header>
  );
};

export default LearningModulesStats;
