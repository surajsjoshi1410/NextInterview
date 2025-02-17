import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { MockTestsStatsWrapper } from "./MockTestsStats.styles";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MockTestsStats = () => {
  // Bar chart data
  const data = {
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
    datasets: [
      {
        label: "Total Mock Tests",
        data: [200, 850, 564, 25, 340, 900, 150], // Example mock test data
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Light green background
        borderColor: "rgba(75, 192, 192, 1)", // Darker green border
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Total Mock Tests per Month",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Monthly change percentage (you can calculate dynamically)
  const monthlyChangePercentage = 0;

  return (
    <MockTestsStatsWrapper>
      <Card className="mock-tests-card">
        <CardContent>
          <div className="rowOne">
            <div className="rowOneLeft">
              <Typography className="rowOneLeftTitle">
                Total Mock Tests
              </Typography>
              <Typography className="rowOneLeftValue">0</Typography>
            </div>
            <div>
              <Grid
                container
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
                marginTop={2}
              >
                <Grid item xs={4} textAlign="right">
                  <Box display="flex" alignItems="center" color="green">
                    <ArrowUpward />
                    <Typography variant="body2" color="green" fontWeight="bold">
                      +{monthlyChangePercentage}%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>

          <Bar data={data} options={options} className="barChart" />
        </CardContent>
      </Card>
    </MockTestsStatsWrapper>
  );
};

export default MockTestsStats;
