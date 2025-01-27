import React from 'react'
import { UserDashboardWrapper } from './UserDashboard.styles'
import img from "../../assets/lucide_home.svg"
import { FaArrowTrendUp } from "react-icons/fa6";
import UserStatsOne from '../../components/UserStatsOne/UserStatsOne';
import MockTestsStats from '../../components/MockTestsStats/MockTestsStats';

export default function UserDashboard() {
    return (
        <UserDashboardWrapper>
            <div className="UserDashboard-statsContainer">
                <div className="UserDashboard-statsContainer-row-one">

                    <div className="UserDashboard-statsContainer-img">
                        <img src={img} alt="background" />
                    </div>
                    <div className="UserDashboard-stats">
                        <div className="UserDashboard-statsbox">
                            <div className="UserDashboard-statsbox-title">
                                <p>Modules completed</p>
                            </div>
                            <div className="UserDashboard-statsbox-value">
                                0
                            </div>
                        </div>
                        <div className="UserDashboard-statsbox">
                            <div className="UserDashboard-statsbox-title">
                                <p>Modules ongoing</p>
                            </div>
                            <div className="UserDashboard-statsbox-value">
                                1
                            </div>
                        </div>
                        <div className="UserDashboard-statsbox">
                            <div className="UserDashboard-statsbox-title">
                                <p>Remaining Modules</p>
                            </div>
                            <div className="UserDashboard-statsbox-value">
                                8
                            </div>
                        </div>
                        <div className="UserDashboard-statsbox">
                            <div className="UserDashboard-statsbox-title">
                                <p>Progress rate</p>
                            </div>
                            <div className="UserDashboard-statsbox-value">
                                10%
                            </div>
                        </div>
                        <div className="UserDashboard-statsbox">
                            <div className="UserDashboard-statsbox-title">
                                <p>Challenges completed</p>
                            </div>
                            <div className="UserDashboard-statsbox-value">
                                10<span>/10</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="UserDashboard-statsContainer-row-two">
                    <div className="UserDashboard-Charts-container">
                        <div className="UserDashboard-charts-title">
                            Your Growth Trend <FaArrowTrendUp />
                        </div>
                        <div className="UserDashboard-charts">
                            <UserStatsOne />
                            <MockTestsStats />

                        </div>
                    </div>
                </div>

            </div>
        </UserDashboardWrapper>

    )
}
