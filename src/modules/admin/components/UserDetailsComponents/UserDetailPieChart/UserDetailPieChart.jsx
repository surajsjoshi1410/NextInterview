import React from "react";
import { Pie } from "react-chartjs-2";
import { FeedbackContainer } from "./UserDetailPieChart.styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const UserDetailPieChart = ({ performanceData, feedbackData, options }) => {
  return (
    <FeedbackContainer>
      <div className="chart-wrapper">
        <h4>Users Performance Scores</h4>
        <div className="chart-container">
          <Pie data={performanceData} options={options} />
        </div>
      </div>
      <div className="chart-wrapper">
        <h4>Overall Feedback Analytics</h4>
        <div className="chart-container">
          <Pie data={feedbackData} options={options} />
        </div>
      </div>
    </FeedbackContainer>
  );
};

export default UserDetailPieChart;
