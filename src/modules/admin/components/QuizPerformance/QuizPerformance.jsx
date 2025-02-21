// QuizPerformance.jsx
import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { QuizPerformanceWrapper } from "./QuizPerformance.styles";

const data = [
  { subject: "Speed", value: 0 },
  { subject: "Accuracy", value: 0 },
  { subject: "Difficulty", value: 0 },
];

function QuizPerformance() {
  return (
    <QuizPerformanceWrapper>
      <div className="quizPerformanceContainer">
        {/* Left side: Radar chart */}
        <div className="radarChartArea">
          <RadarChart
            outerRadius={50}
            width={300}
            height={300}
            data={data}
            cx={100} // center x within the 200 width
            cy={100} // center y within the 200 height
          >
            <PolarGrid stroke="#ccc" strokeDasharray="1 1" />
            {/* Show the axis labels from dataKey="subject" */}
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#666", fontSize: 12 }}
            />
            {/* Domain 0 to 100 for example */}
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#eee" />
            <Radar
              name="Score"
              dataKey="value"
              stroke="#2ecc71"
              fill="#2ecc71"
              fillOpacity={0.3}
            />
          </RadarChart>
        </div>

        {/* Right side: legend with values */}
        <div className="legendArea">
          <ul>
            {data.map((item) => (
              <li key={item.subject}>
                <span className="legendDot-one"> {item.subject} – </span>{" "}
                <span className="legendDot-two">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </QuizPerformanceWrapper>
  );
}

export default QuizPerformance;
