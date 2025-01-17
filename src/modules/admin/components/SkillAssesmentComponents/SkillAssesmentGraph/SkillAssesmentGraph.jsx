import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { GraphWrapper } from "./SkillAssesmentGraph.styles";

const data = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 2000 },
  { month: "Mar", users: 1500 },
  { month: "Apr", users: 5000 },
  { month: "May", users: 25000 },
  { month: "Jun", users: 20000 },
  { month: "Jul", users: 40000 },
  { month: "Aug", users: 70000 },
  { month: "Sep", users: 60000 },
  { month: "Oct", users: 80000 },
  { month: "Nov", users: 85000 },
  { month: "Dec", users: 90000 },
];

const SkillAssesmentGraph = () => {
  return (
    <GraphWrapper>
      <h3>Completion rate</h3>
      <p className="subheading">Users Growth</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fill: "#262524" }} />
          <YAxis tick={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fill: "#262524" }} />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#28a745" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </GraphWrapper>
  );
};

export default SkillAssesmentGraph;
