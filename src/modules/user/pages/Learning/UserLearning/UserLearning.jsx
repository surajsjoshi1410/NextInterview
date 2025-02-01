import React, { useEffect, useState } from 'react'
import { UserLearningWrapper } from './UserLearning.styles'
import { CiBoxList } from "react-icons/ci";
import { LuLayoutGrid } from "react-icons/lu";
import { CiGrid41 } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getModule } from '../../../../../api/addNewModuleApi';
import api from '../../../../../config/axiosconfig';
// const courses = [
//     {
//         title: "Machine Learning",
//         description: "This learning path will teach you how to analyze data to gain insights, make smarter decisions.",
//         topics: 5,
//         duration: "Less than 2 hrs",
//         image: "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
//     },
//     {
//         title: "Diagnosing and Investigating Metrics",
//         description: "This learning path will teach you how to analyze data to gain insights, make smarter decisions.",
//         topics: 5,
//         duration: "Less than 2 hrs",
//         image: "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
//     },
//     {
//         title: "Diagnosing and Investigating Metrics",
//         description: `This learning path will teach you how to analyze data to gain insights, make smarter decisions.
//         This learning path will teach you how to analyze data to gain insights, make smarter decisions.
//         This learning path will teach you how to analyze data to gain insights, make smarter decisions.
//         This learning path will teach you how to analyze data to gain insights, make smarter decisions.`,
//         topics: 5,
//         duration: "Less than 2 hrs",
//         image: "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
//     },
//     {
//         title: "Diagnosing and Investigating the user Metrics",
//         description: "This learning path will teach you how to analyze data to gain insights, make smarter decisions.",
//         topics: 5,
//         duration: "Less than 2 hrs",
//         image: "https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain"
//     },
// ];

export default function UserLearning() {
    const [isGridView, setIsGridView] = useState(true); // Toggle between grid and list view
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const[courses, setCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const apiCaller = async () => {
            try {
                const response = await getModule();
                
                console.log(response);
                const data= response.data.map((item) => {
                    return(
                        {
                            _id: item._id,
                            title: item.moduleName,
                            description: item.description,
                            topics: item.topicData.length,
                            duration: item.approxTimeTaken,
                            image: item.imageURL
                        }
                    )
                })
                setCourses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        apiCaller();
    }, [])

    // Filter courses based on search query
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <UserLearningWrapper>
            <div className="courses-container">
                <div className="header">
                    <h1 className='header-title'>Data Science Lite Modules</h1>
                    <div className="header-actions">
                        {/* <div className="searchContainer"> */}
                        <input
                            type="text"
                            placeholder={` Search`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        {/* {
                                !(!!!searchQuery) && (  <IoSearchOutline className='search-icon' />)
                            } */}

                        {/* </div> */}

                        <button onClick={() => setIsGridView(!isGridView)} className="toggle-btn">
                            {isGridView ? <CiBoxList /> : <CiGrid41 />}
                        </button>
                    </div>
                </div>

                {/* Course Cards Layout */}
                <div className={isGridView ? "course-cards grid-view" : "course-cards list-view"}>
                    {/* <div className="course-card-main"> */}


                    {filteredCourses.map((course, index) => (
                        <div key={index} className={isGridView ? "course-card" : "course-card-list"}>
                            <img src={course.image} alt={course.title} className={isGridView ? "course-image" : "course-image-list"} />
                            <div className={isGridView ? "course-details" : "course-details-list"}>
                                <h3 className='course-title'>{course.title}</h3>

                                <p className={isGridView?'course-description':'course-description-list'}>{course.description}</p>
                                <div className={isGridView?"course-info":"course-info-list"}>
                                    <span>{course.topics} topics</span>
                                    <span>Less than {course.duration} hrs</span>
                                </div>
                            </div>

                            <div className={isGridView?"coursecard-bt-container":"coursecard-bt-container-list"}>
                                <button className="start-btn" onClick={() => { navigate(`/user/learning/${course._id}`) }}>Start</button>

                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </div>
            </div>
        </UserLearningWrapper>
    )
}
