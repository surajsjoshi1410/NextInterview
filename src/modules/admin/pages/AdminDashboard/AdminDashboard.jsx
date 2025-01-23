import React from "react";
import GradientBar from "../../components/DashboardComponents/GradientBar";
import AdminMetrics from "../../components/DashboardComponents/AdminMetrix";
import {DashboardContainer,
    Title,
} from "../../pages/AdminDashboard/AdminDashboard.styles";
import UserActivity from "../../components/DashboardComponents/UserActivity";
import LearningPattern from "../../components/DashboardComponents/LearningPattern";
import TopicPerformance from "../../components/DashboardComponents/TopicPerformance";
import FeedbackAnalytics from "../../components/FeedbackAnalytics/FeedbackAnalytics";
import theme from "../../../../theme/Theme";
const AdminDashboard = () => {
    return <div>
        <DashboardContainer>
        <GradientBar />
        <AdminMetrics />
        <div
        style={{
            // height: "350px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "150px",
        }}>
            <UserActivity />
        <LearningPattern />
        </div>
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: "40px",
            padding:"20px"
        }}
        >
        <TopicPerformance />
      <div>
        <div style={{ height:"200px",
        width:"100%"
         }}>
      <Title
      style={{
        
        fontFamily:`${theme.fonts.body}`,
        color:`${theme.colors.text}`,
        fontSize:`${theme.spacing(3)}`,
        fontWeight:600
      }}
      >Feedback Analytics</Title>
      <FeedbackAnalytics />
        </div>
      </div>
        </div>
    
        </DashboardContainer>
        
    </div>;
};
export default AdminDashboard;