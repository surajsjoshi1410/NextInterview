// UserPastInterviews.js
import React, { useState } from 'react';
import { UserPastInterviewsWrapper } from './UserPastInterviews.styles';

const UserPastInterviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [interviewData, setInterviewData] = useState({
        companyName: "",
        jobRole: "",
        attendedDate: "",
        whatWentWell: "",
        whatDidntGoWell: "",
        questionsAsked: "",
    });
    const pastInterviews = [
        {
            company: "ABCD Private LTD",
            role: "Data Analyst",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        },
        {
            company: "ABCD Private LTD",
            role: "Data Analyst",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Flipkart_logo.png"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInterviewData({ ...interviewData, [name]: value });
    };

    const handleAddInterview = () => {
        console.log("New Interview Data: ", interviewData);
        setIsModalOpen(false);
    };

    return (
        <UserPastInterviewsWrapper>
            <div className="past-interviews-container">
                <h2 className="interview-title">Past actual interviews</h2>
                <div className="interview-list">
                    {pastInterviews.map((interview, index) => (
                        <div key={index} className="interview-card">
                            <div className="interview-company-logo">
                                <img src={interview.logo} alt={interview.company} className="company-logo" />
                            </div>
                            <div className="interview-info">
                                <h3 className="company-name">{interview.company}</h3>
                                <p className="role">{interview.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="add-interview-button" onClick={() => setIsModalOpen(true)}><span className='add-interview-button-text'>Add a past Interview</span></button>
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2 className='modal-content-title'>Add Interview</h2>
                            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
                            <div className="modal-content-formgroup">
                                <label>Company Name</label>
                                <select name="companyName" value={interviewData.companyName} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    <option value="XYZ Private LTD">XYZ Private LTD</option>
                                    <option value="ABC Solutions">ABC Solutions</option>
                                </select>
                            </div>

                            <div className="modal-content-formgroup">
                                <label>Job Role</label>
                                <input type="text" name="jobRole" value={interviewData.jobRole} onChange={handleInputChange} />
                            </div>
                            <div className="modal-content-formgroup">
                                <label>Attended Date</label>
                                <input type="date" name="attendedDate" value={interviewData.attendedDate} onChange={handleInputChange} />
                            </div>
                            <div className="modal-content-formgroup">
                                <label>What Went Well</label>
                                <textarea name="whatWentWell" value={interviewData.whatWentWell} onChange={handleInputChange}></textarea>
                            </div>
                            <div className="modal-content-formgroup">
                                <label>What Didn't Go Well</label>
                                <textarea name="whatDidntGoWell" value={interviewData.whatDidntGoWell} onChange={handleInputChange}></textarea>
                            </div>
                            <div className="modal-content-formgroup">
                                <label>Questions Asked in the Interview</label>
                                <textarea name="questionsAsked" value={interviewData.questionsAsked} onChange={handleInputChange}></textarea>
                            </div>
                            <div className="model-btn-container">
                                <button className="add-btn" onClick={handleAddInterview}>Add</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </UserPastInterviewsWrapper>
    );
};

export default UserPastInterviews;