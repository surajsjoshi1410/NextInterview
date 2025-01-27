import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js"; // Import RadialLinearScale
import { UserStatsOneWrapper } from "./UserStatsOne.styles";

// Register chart.js components including the radialLinear scale
ChartJS.register(RadialLinearScale, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const UserStatsOne = () => {
    // Radar chart data
    const data = {
        labels: ["One word answers", "MCQs", "Coding", "Approach analysis", "Short answers"],
        datasets: [
            {
                label: "Performance",
                data: [0, 0, 0, 0, 0], // Example data points
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Light green background
                borderColor: "rgba(75, 192, 192, 1)", // Darker green border
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                min: 0,
                max: 5,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };

    // Data Display
    const totalQuestionsAttempted = 0;
    const successfullyCompleted = 0;
    const successfullyRate = totalQuestionsAttempted > 0 ? (successfullyCompleted / totalQuestionsAttempted) * 100 : 0;

    return (
        <UserStatsOneWrapper>
            <div className="performance-card">
                <div className="data-display">
                    <div className="metrics">
                        <div className="metric">
                            <span>Total questions attempted</span>

                            <span>Successfully completed:</span>

                            <span>Successfully rate:</span>

                            <span>Your Strength:</span> 

                            <span>Your Weakness:</span>
                        </div>
                        <div className="metric-value">
                            <span> : {totalQuestionsAttempted}</span>
                            <span> : {successfullyCompleted}</span>
                            <span> : {successfullyRate}%</span>
                            <span> : -</span>
                            <span> : -</span>

                        </div>
                    </div>

                </div>

                <div className="chart">
                    <Radar data={data} options={options} />
                </div>
            </div>
        </UserStatsOneWrapper>

    );
};

export default UserStatsOne;
