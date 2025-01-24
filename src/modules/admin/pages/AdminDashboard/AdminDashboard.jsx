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
       
          className="user-activity">
            <UserActivity />
        <LearningPattern />
        </div>
        <div className="topic-performance"
        style={{
          padding: theme.spacing(2),
        }} >
        <TopicPerformance />

          <FeedbackAnalytics />
        {/* </div> */}

        </div>
    
        </DashboardContainer>
        
    </div>;
};
export default AdminDashboard;