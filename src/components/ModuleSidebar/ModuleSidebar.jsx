import React, { useEffect, useState } from 'react';
import { Link, Navigate, NavLink, useLocation, useParams } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsFileEarmarkLock } from "react-icons/bs";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { IoIosRepeat } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineLockClock } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { ModuleSidebarContainer } from './ModuleSidebar.styles';
import Logo from "../../assets/Logo.png";
import { MdExpandCircleDown } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { getModuleById } from '../../api/addNewModuleApi';
const courseData1 = {
    title: "Diagnosing and Investigating the userMetrics",
    topicsList: [
        {
            title: "Topic 1 - Introduction to Data Analytics",
            subtopics: [
                { title: "Overview of Data Analytics", time: "5 mins read", completed: true },
                { title: "How Does Data Analytics Get Tested in the Interview?", time: "5 mins read", completed: false },
                { title: "Types of Data Analytics Interview Questions", time: "5 mins read", completed: false },
            ]
        },
        {
            title: "Topic 2 - Data Analytics Fundamentals: Causal Inference",
            subtopics: []
        },
        {
            title: "Topic 3 - Diagnosing and Investigating Metrics",
            subtopics: []
        },
        {
            title: "Topic 4 - A/B Testing & Experiment Design",
            subtopics: []
        },
        {
            title: "Topic 5 - Business Health Metrics",
            subtopics: []
        },
    ]
};

export default function ModuleSidebar({ isExpanded, setIsExpanded, setTitle, courseProgress }) {
    const location = useLocation();
    const [expandedTopic, setExpandedTopic] = useState(null);
    
  
    const [courseData, setCourseData] = useState(courseData1);
    const moduleId = useParams().id;

    useEffect(() => {
        setIsExpanded(true);
        console.log("location Data=>", location.state);
        const apiCaller = async () => {
            try {
                const response = await getModuleById(moduleId);
                console.log(response.data);
                const data = {
                    title: response.data.moduleName,
                    topicsList: response.data.topicData.map((item) => {
                        return ({
                            title: item.topicName,
                            subtopics: item.subtopicData.map((subitem) => {
                               return (
                              {  
                                title: subitem.subtopicName,
                                completed: subitem.completed
                              }
                            )
                               
                            })
                        })
                    })

                   
                };
                setCourseData(data);
            } catch (error) {
                console.log(error);
            }
        };
        apiCaller();
    }, []);




    const toggleExpand = (index) => {
        setExpandedTopic(expandedTopic === index ? null : index);
    };

    return (
        <ModuleSidebarContainer
            // onMouseEnter={() => setIsExpanded(true)}
            // onMouseLeave={() => setIsExpanded(false)}
            isExpanded={isExpanded}
        >
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>

            {/* Progress Bar Section */}
            <div className="progress-section">
                <h1 className="module-sidebar-topic-title">{courseData.title}</h1>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${courseProgress}%` }}
                    ></div>
                </div>
                <div className="progress-details">
                    <div className="progress-details-count">
                        <span>1 /{courseData.topicsList.length} Topics</span>
                        <span>completed</span>
                    </div>
                    <div className="progress-details-percentage">
                        <span>10%</span>
                    </div>

                </div>
                <button className="start-button">View sample interview</button>

            </div>

            <div className="course-topics">
                <h3 className='course-topics-title'>Topics</h3>
                {courseData.topicsList?.map((topic, index) => (
                    <div key={index} className="topic">
                        <div className="topic-title" onClick={() => toggleExpand(index)}>
                            <span>{topic.title}</span>
                            <span>{expandedTopic === index ? <MdExpandLess /> : <MdExpandMore />}</span> {/* Toggle indicator */}
                        </div>
                        {expandedTopic === index && (
                            <div className="subtopics">
                                {topic.subtopics.length === 0 ? (
                                    <p>No subtopics available</p>
                                ) : (
                                    topic.subtopics?.map((subtopic, subIndex) => (
                                        <div key={subIndex} className="subtopic">
                                            <div className="subtopic-info">
                                                <span className={subtopic.completed ? "completed" : "pending"}>
                                                 <Link className='subtopic-link'  to={`/user/learning/${moduleId}`} state={{ topicIndex: index, subtopicIndex: subIndex, }}>   <span>{subtopic.completed ? <FaCheckCircle /> : <MdExpandCircleDown />}</span> <span className="subtopic-title"> {subtopic.title}</span></Link>

                                                </span>
                                                {/* <span className="time">{subtopic.time}</span> */}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </ModuleSidebarContainer>
    );
}
