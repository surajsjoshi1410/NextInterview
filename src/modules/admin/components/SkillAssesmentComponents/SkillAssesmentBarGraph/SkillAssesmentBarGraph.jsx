import React from "react";
import { Bar } from "react-chartjs-2";
import { GraphWrapper } from "./SkillAssesmentBarGraph.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SkillAssesmentGraph from "../SkillAssesmentGraph/SkillAssesmentGraph";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillAssesmentBarGraph = () => {
  const data = {
    labels: ["Week 1", "Week 2"],
    datasets: [
      {
        label: "Score",
        data: [1500, 1000],
        backgroundColor: "#2390ac",
        borderRadius: 4,
        barPercentage: 0.5,
        barThickness: 15, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#262524",
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#262524",
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
        beginAtZero: true,
        max: 2000,
        stepSize: 500,
      },
    },
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" , marginTop: "20px"}}>
      <div>
        <GraphWrapper>
          <h3>Score Distribution</h3>
          <div className="chart-container">
            <Bar data={data} options={options} />
          </div>
        </GraphWrapper>
      </div>
      <div>
        <SkillAssesmentGraph />
      </div>
    </div>
  );
};

export default SkillAssesmentBarGraph;
