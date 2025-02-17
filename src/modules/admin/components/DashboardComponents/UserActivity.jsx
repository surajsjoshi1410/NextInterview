import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  //    padding: ${(props) => props.theme.spacing(4)};
  margin-top: ${(props) => props.theme.spacing(4)};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  text-align: left;
`;

const CardContainer = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: 0 4px 4px ${(props) => props.theme.colors.borderblue};
  width: 100%;
  height: 300px;
  margin-left: 1px;
`;

const UserActivity = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users Growth",
        data: [
          1000, 5000, 10000, 30000, 80000, 70000, 90000, 85000, 60000, 70000,
          80000, 90000,
        ],
        borderColor: `${({ theme }) => theme.colors.primary}`,
        backgroundColor: "transparent",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: `${({ theme }) => theme.colors.primary}`,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",

        labels: {
          font: {
            family: `${({ theme }) => theme.fonts.body}`,
            marginLeft: "auto",
          },
          color: `${({ theme }) => theme.colors.textgray}`,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: `${({ theme }) => theme.colors.primary}`,
      },
    },
    scales: {
      x: {
        ticks: {
          color: `${({ theme }) => theme.colors.textgray}`,
          font: {
            family: `${({ theme }) => theme.fonts.body}`,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: `${({ theme }) => theme.colors.textgray}`,
          font: {
            family: `${({ theme }) => theme.fonts.body}`,
          },
        },
      },
    },
  };

  return (
    <Wrapper>
      <Title>User Activity Trends</Title>
      <CardContainer>
        <Line data={data} options={options} />
      </CardContainer>
    </Wrapper>
  );
};

export default UserActivity;
