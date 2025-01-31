import React, { useEffect, useState } from 'react';
import { UserSampleInterviewWrapper } from './userSampleInterview.styles';
import { useParams } from 'react-router-dom';
import { getModuleById } from '../../../../../api/addNewModuleApi';
import { IoMdArrowRoundBack } from "react-icons/io";

const UserSampleInterview = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null)
    const moduleId = useParams().id;
    const [helpful, setHelpful] = useState(""); // Track if the interview was helpful
    const [response, setResponse] = useState(""); // Track feedback response

    const handleSubmit = () => {
        // Handle form submission logic here, like sending feedback to the server
        console.log("Feedback submitted:", { helpful, response });
        setModalOpen(false); // Close modal after submitting
    };
    useEffect(() => {
        const apiCaller = async () => {
            const response = await getModuleById(moduleId);
            console.log(response.data);
            setVideoUrl(response.data.interviewSampleURL);
        }
        apiCaller();
    }, [])

    // Handle video completion
    const handleVideoEnd = () => {
        setModalOpen(true);  // Open the modal when the video is finished
    };

    return (
        <UserSampleInterviewWrapper>
            {videoUrl &&
                <>
                    <div className="backbtn">
                        <button onClick={() => window.history.back()}><IoMdArrowRoundBack /> </button>
                    </div>
                    <div className="video-page">

                        <div className="video-container">
                            <video
                                width="100%"
                                height="auto"
                                controls
                                onEnded={handleVideoEnd}
                                className="video-player"
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Modal */}
                        {modalOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                                    <div className="model-title-container">
                                        <h2 className='modal-title'>Sample interview feedback</h2>
                                    </div>
                                    <div className="model-form">


                                        <div className="form-group">
                                            <label className='modal-form-group-label'>Was the sample interview helpful?</label>
                                            <div>
                                                <div className="modal-form-radio-btns">
                                                    <input
                                                        type="radio"
                                                        id="yes"
                                                        name="helpful"
                                                        value="Yes"
                                                        checked={helpful === "Yes"}
                                                        onChange={(e) => setHelpful(e.target.value)}
                                                    />
                                                    <label className='modal-form-group-value' htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="modal-form-radio-btns">
                                                    <input
                                                        type="radio"
                                                        id="no"
                                                        name="helpful"
                                                        value="No"
                                                        checked={helpful === "No"}
                                                        onChange={(e) => setHelpful(e.target.value)}
                                                    />
                                                    <label className='modal-form-group-value' htmlFor="no">No</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group2">
                                            <label className='modal-form-group-label'>Would you have taken a different approach to solve the problem?</label>
                                            <textarea
                                                className='modal-form-group-value'
                                                value={response}
                                                onChange={(e) => setResponse(e.target.value)}
                                                placeholder="Enter your response"
                                            />
                                        </div>

                                        <div className="modal-actions">
                                            <button className='modal-skip-btn' onClick={() => setModalOpen(false)}>Skip</button>
                                            <button className='modal-submit-btn' onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            }
        </UserSampleInterviewWrapper>
    );
};

export default UserSampleInterview;
