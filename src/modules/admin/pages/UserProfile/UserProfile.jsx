import React,{useState} from 'react'
import { UserProfileContainer } from './UserProfile.styles'
import { FaUndo } from "react-icons/fa";
import AssesmentPerformanceProfile from '../../components/AssesmentPerformance/AssesmentPerformanceProfile';
import TopicCompletion from '../../components/TopicCompletion/TopicCompletion';
import EngagementPerformance from '../../components/EngagementPerformance/EngagementPerformance';
import FeedbackAnalytics from '../../components/FeedbackAnalytics/FeedbackAnalytics';
import QuizPerformance from '../../components/QuizPerformance/QuizPerformance';
import UserDropOffs from '../../components/UserDropOffs/UserDropOffs';
import TopicsPerformance from '../../components/TopicsPerformance/TopicsPerformance';
import theme from '../../../../theme/Theme';


export default function UserProfile() {
    const [showModal, setShowModal] = useState(false);
    // ^ NEW: local state to track modal visibility

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const userData = {
        name: "Olivia Rhye",
        email: "olivia@gmail.com",
        role: "User",
        lastActive: "12/12/24 12:01:01 pm",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
        stats: {
            timeSpent: "2.5h daily",
            weeklyTotal: "12.5h",
            quizzes: "8 (Avg. 80%)",
            bestScore: "95%",
            topics: "12/15 (80%)"
        }
    };

    return (
        <UserProfileContainer>
            {/* user profile restriction conditionally */}
            <div className="restriction-banner">
                <p className="restriction-banner-text">
                    This user is no longer permitted to access this platform.
                </p>
                <button className="remove-restriction-btn"
                onClick={handleOpenModal} 
                >
                    <FaUndo /> Remove restriction
                </button>
            </div>
            {/* The confirmation MODAL (only shows if showModal === true) */}
            {showModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h2 style={styles.modalTitle}>
                            Are you sure you want to remove restriction?
                        </h2>
                        <div style={styles.modalButtons}>
                            <button
                                style={styles.cancelBtn}
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                style={styles.yesBtn}
                                onClick={() => {
                                    // Your "Yes" logic here:
                                    // e.g. call an API or update state
                                    alert("Restriction removed!");
                                    setShowModal(false);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* profile  Section */}
            <div className="profile-card">
                {/* Left side: avatar + user info  */}
                <div className="profile-left">
                    <div className="avatar-wrapper">
                        <img src={userData.avatarUrl} alt="User Avatar" />
                    </div>
                    <div className="info-text">
                        <h2 className="user-name" >{userData.name}</h2>
                        <p className='user-email'>{userData.email}</p>
                        <span className="role-badge">{userData.role}</span>
                        <p className="last-active" >
                            Last Active: {userData.lastActive}
                        </p>
                    </div>
                </div>

                {/* Right side: stats */}
                <div className="profile-stats">
                    <div className="stat-group">
                        <p className="stat-label">Time Spent</p>
                        <p className="stat-value">{userData.stats.timeSpent}</p>
                    </div>
                    <div className="stat-group">
                        <p className="stat-label">Weekly Total Time</p>
                        <p className="stat-value">{userData.stats.weeklyTotal}</p>
                    </div>
                    <div className="stat-group">
                        <p className="stat-label">Total Quizzes Taken</p>
                        <p className="stat-value">{userData.stats.quizzes}</p>
                    </div>
                    <div className="stat-group">
                        <p className="stat-label">Best Quiz Score</p>
                        <p className="stat-value">{userData.stats.bestScore}</p>
                    </div>
                    <div className="stat-group">
                        <p className="stat-label">Topics Completed</p>
                        <p className="stat-value">{userData.stats.topics}</p>
                    </div>
                </div>
            </div>
            {/* Perfoemance Section */}
            <div className="performanceSection">
                <div className="performance-left">
                    <div className="performance-left-row-one">
                        <h2 className='chartHeading'>Topic Completion</h2>
                        <TopicCompletion />
                    </div>
                    <div className="performance-left-row-two">
                        <h2 className='chartHeading'>Overall Feedback Analytics</h2>
                        <FeedbackAnalytics />
                    </div>
                    <div className="performance-left-row-three">
                        <h2 className='chartHeading'>Quiz Performance</h2>
                        <QuizPerformance />
                    </div>

                </div>
                <div className="performance-right">
                    <div className="performance-right-row-one">
                        <h2 className='chartHeading'>Assesment Performance</h2>
                        <AssesmentPerformanceProfile />
                    </div>
                    <div className="performance-right-row-two">
                        <h2 className='chartHeading'>Engagement Performance</h2>
                        <EngagementPerformance />
                    </div>

                </div>
            </div>
            {/* dropoff section */}
            <div className="dropoffssection">
                <h2 className='chartHeading'>Drop off Points</h2>
                <UserDropOffs />
            </div>
            <div className="topicPerformanceSection">
                <h2 className='chartHeading'>Topics Performance (18)</h2>
                <TopicsPerformance />
            </div>
        </UserProfileContainer>
    )
}
// Minimal inline styles for the modal (adjust as needed)
const styles = {
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "2rem",
        maxWidth: "400px",
        width: "90%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
    },
    modalTitle: {
        fontSize: "1.1rem",
        marginBottom: "1.5rem",
        color: theme.colors.black,
    },
    modalButtons: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1rem",
    },
    cancelBtn: {
        backgroundColor: "#fff",
        color: theme.colors.info,
        border: `1px solid ${theme.colors.info}`,   
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        cursor: "pointer",
    },
    yesBtn: {
        backgroundColor:theme.colors.info,
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
