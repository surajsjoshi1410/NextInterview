import React, { useState } from "react";
import { Container, ContentWrapper } from "./Userdetails.styles";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import UserDetailStats from "../../components/UserDetailsComponents/UserDetailStats/Userdetailstats";
import UserDetailBarGraph from "../../components/UserDetailsComponents/UserDetailBarGraph/UserDetailBarGraph";
import UserDetailPieChart from "../../components/UserDetailsComponents/UserDetailPieChart/UserDetailPieChart";
import AllUsers from "../../components/UserDetailsComponents/AllUsers/AllUsers";
import AssesmentsPerformance from "../../components/UserDetailsComponents/AssesmentsPerformance/AssesmentsPerformance";
import MetricTable from "../../components/UserDetailsComponents/MetricTable/MetricTable";
import MetricCard from "../../components/MetricCard/MetricCard";

const Userdetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s", name: "Olivia Rhye", email: "olivia@gmail.com", score: "78%", feedback: "Positive" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjR7vj2h745769RuDk7L9xxsSZyBs7ZBXUg&s", name: "Phoenix Baker", email: "phoenix@gmail.com", score: "78%", feedback: "Positive" },
    { image: "https://static9.depositphotos.com/1499355/1200/i/450/depositphotos_12002062-Happy-Indian-business-woman..jpg", name: "Lana Steiner", email: "lana@gmail.com", score: "78%", feedback: "Positive" },
    { image: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg", name: "Demi Wilkinson", email: "dem@gmail.com", score: "38%", feedback: "Negative" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfmxwFxAtJORIF7Wzj5M-9BCu0hB9uWBXAg&s", name: "Candice Wu", email: "candice@gmail.com", score: "30%", feedback: "Negative" },
    { image: "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg", name: "Natal Craig", email: "natal@gmail.com", score: "28%", feedback: "Negative" },
  ];

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ContentWrapper isExpanded={isExpanded}>
        <Container>
          <UserDetailStats />
          <MetricTable/>
          {/* <MetricCard/> */}
          <UserDetailBarGraph data={barData} options={barOptions} />
          <UserDetailPieChart
            performanceData={pieDataPerformance}
            feedbackData={pieDataFeedback}
            options={pieOptions}
          />
          <AssesmentsPerformance/>
          <AllUsers users={users} />
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Userdetails;
