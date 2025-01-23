import React from "react";
import GradientBar from "../../components/DashboardComponents/GradientBar";
import AdminMetrics from "../../components/DashboardComponents/AdminMetrix";
import {DashboardContainer,
    Title,
} from "../../pages/AdminDashboard/AdminDashboard.styles";
import UserActivity from "../../components/DashboardComponents/UserActivity";
import LearningPattern from "../../components/DashboardComponents/LearningPattern";
import TopicPerformance from "../../components/DashboardComponents/TopicPerformance";
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
        <TopicPerformance />
    
        </DashboardContainer>
        
    </div>;
};
export default AdminDashboard;