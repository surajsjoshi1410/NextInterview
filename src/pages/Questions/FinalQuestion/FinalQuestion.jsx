import React, { useState } from "react";
import { FinalQuestionWrapper } from "./FinalQuestion.styles";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useUser } from '@clerk/clerk-react'
import { getJobById, getJobs } from "../../../api/jobApi";
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";
import { useNavigate } from "react-router-dom";

function FinalQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/question2"); // to:do
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleNext = async () => {
    const data = await getUserByClerkId(user.id);
    const submissionData = {
      user_id: data.data._id,
      data_motive_response: selectedOption,
      profile_status:true
    }
    const responseData = await createUserProfile(submissionData);
    console.log("data", responseData);
    navigate("/profileComplete");
  }
  const handleSkip= async () => {
    const data = await getUserByClerkId(user.id);
    const submissionData = {
      user_id: data.data._id,
      profile_status:true
    }
    const responseData = await createUserProfile(submissionData);
    console.log("data", responseData);
    navigate("/profileComplete");
  }
  return (
    <FinalQuestionWrapper>
      <HeaderWithLogo />
      <div className="Container">
        <div className="BackIcon" onClick={handleGoBack}>
          <IoIosArrowRoundBack />
        </div>
        <div className="Title">What brings you to Next Interview?</div>
        <div className="Options">
          {[
            "To prepare for Interview",
            "Practice coding",
            "Learn new topics",
          ].map((option) => (
            <label
              key={option}
              className={`Option ${
                selectedOption === option ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="purpose"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button className="NextButton" onClick={handleNext} >Next</button>
        <button className="SkipButton" onClick={handleSkip}>Skip</button>
      </div>
    </FinalQuestionWrapper>
  );
}

export default FinalQuestion;
