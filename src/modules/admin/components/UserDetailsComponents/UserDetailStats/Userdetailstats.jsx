import React from "react";
import {
  Header,
  StatsContainer,
  StatCard,
} from "./Userdetailstats.styles";

const UserDetailStats = () => {
  return (
    <>
      <Header>
        <div>
          <img
            src="https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38="
            alt=""
          />
        </div>
        <div>
          <h1>Diagnosing and Investigating Metrics</h1>
          <p>Topic </p>
          <p>Uploaded on: 12/12/24 12:00:01 pm</p>
        </div>
      </Header>
      <StatsContainer>
        <StatCard>
          <p>Views</p>
          <h3>1245</h3>
        </StatCard>
        <hr />
        <StatCard>
          <p>Completion Rate</p>
          <h3>90%</h3>
        </StatCard>
        <hr />
        <StatCard>
          <p>Avg. Time Spent</p>
          <h3>45m</h3>
        </StatCard>
        <hr />
        <StatCard>
          <p>Quiz Score</p>
          <h3>80%</h3>
        </StatCard>
      </StatsContainer>
    </>
  );
};

export default UserDetailStats;
