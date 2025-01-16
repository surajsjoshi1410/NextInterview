import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartSection } from "./UserDetailBarGraph.styles";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const UserDetailBarGraph = ({ data, options }) => {
  // Ensure the bar thickness is applied in the data's dataset
  const updatedData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      barThickness: 15, // Set individual bar thickness to 5px
    })),
  };

  return (
    <ChartSection>
      <h3>User Completion Rate (Last 30 Days)</h3>
      <div className="chart-container">
        <Bar data={updatedData} options={options} />
      </div>
    </ChartSection>
  );
};

export default UserDetailBarGraph;
