// TopicsPerformance.jsx
import React from "react";
import { TopicsPerformanceWrapper } from "./TopicsPerformance.styles";

// Example data array
const exampleData = [
  //   {
  //     imageUrl: "https://via.placeholder.com/80",
  //     topic: "Diagnosing and Investigating Metrics",
  //     score: "0%",
  //     feedback: "Neutral",
  //   },
];

function TopicsPerformance() {
  return (
    <TopicsPerformanceWrapper>
      <div className="topicsPerformanceContainer">
        <table className="topicsTable">
          <thead>
            <tr>
              <th className="headerCell">Topic</th>
              <th className="headerCell">
                Overall Assessments Score <span className="infoIcon">ℹ</span>
              </th>
              <th className="headerCell">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {exampleData.map((row, index) => (
              <tr key={index}>
                <td className="topicCell">
                  <img
                    src={row.imageUrl}
                    alt="Topic Thumbnail"
                    className="topicThumbnail"
                  />
                  <span className="topicName">{row.topic}</span>
                </td>
                <td className="scoreCell">{row.score}</td>
                <td className="feedbackCell">{row.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TopicsPerformanceWrapper>
  );
}

export default TopicsPerformance;
