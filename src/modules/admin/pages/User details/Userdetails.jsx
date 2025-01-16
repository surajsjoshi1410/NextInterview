import React from "react";
import { Container } from "./Userdetails.styles";
import UserDetailStats from "../../components/UserDetailStats/Userdetailstats";
import UserDetailBarGraph from "../../components/UserDetailBarGraph/UserDetailBarGraph";
import UserDetailPieChart from "../../components/UserDetailPieChart/UserDetailPieChart";
import AllUsers from "../../components/AllUsers/AllUsers";

const Userdetails = () => {
  // Data for bar chart
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Completion Rate",
        backgroundColor: "#68c184",
        data: [1500, 1200, 1400, 1300, 1000],
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  // Data for pie charts
  const pieDataPerformance = {
    labels: ["Below 75%", "75% - 89%", "Above 90%"],
    datasets: [
      {
        data: [51, 20, 30],
        backgroundColor: ["#dc3545", "#ffc107", "#68c184"],
      },
    ],
  };

  const pieDataFeedback = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [51, 20, 30],
        backgroundColor: ["#68c184", "#ffc107", "#dc3545"],
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  // Data for user table
  const users = [
    { name: "Olivia Rhye", email: "olivia@gmail.com", score: "78%", feedback: "Positive" },
    { name: "Phoenix Baker", email: "phoenix@gmail.com", score: "78%", feedback: "Positive" },
    { name: "Lana Steiner", email: "lana@gmail.com", score: "78%", feedback: "Positive" },
    { name: "Demi Wilkinson", email: "dem@gmail.com", score: "78%", feedback: "Negative" },
    { name: "Candice Wu", email: "candice@gmail.com", score: "78%", feedback: "Negative" },
    { name: "Natal Craig", email: "natal@gmail.com", score: "78%", feedback: "Negative" },
  ];

  return (
    <Container>
      <UserDetailStats />
      <UserDetailBarGraph data={barData} options={barOptions} />
      <UserDetailPieChart
        performanceData={pieDataPerformance}
        feedbackData={pieDataFeedback}
        options={pieOptions}
      />
      <AllUsers users={users} />
    </Container>
  );
};

export default Userdetails;
