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
      <div>
        <div
          style={{
            background: "#f5f5f5",
            padding: "0 20px ",
            borderRadius: "8px",
          }}
        >
          <Stats>
            <StatCard>
              <p>Total Topics Published</p>
              <h1>0</h1>
            </StatCard>
            <hr style={{ height: "80px", margin: "20px 0 0 0" }} />
            <StatCard>
              <p>Avg. Completion Rate</p>
              <h1>0%</h1>
            </StatCard>
            <hr style={{ height: "80px", margin: "20px 0 0 0" }} />
            <StatCard>
              <p>Avg. Quiz Score</p>
              <h1>0%</h1>
            </StatCard>
          </Stats>
        </div>

        <div style={{ background: "#fff", borderRadius: "8px" }}>
          <StatCard1>
            <p>Most Viewed</p>
            <div className="datascience">Ai Basics</div>
            <div>
              <strong> - (0 views)</strong>
            </div>
          </StatCard1>
          <hr style={{ width: "95%" }} />
          <StatCard2>
            <p>Least Viewed</p>
            <div className="datascience">Data Science Basics & Advanced</div>
            <div>
              {" "}
              <strong> - (0 views)</strong>
            </div>
          </StatCard2>
        </div>
      </div>
    </Header>
  );
};

export default LearningModulesStats;
