import React, { useState } from "react";
import { FinalQuestionWrapper } from "./FinalQuestion.styles";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { IoIosArrowRoundBack } from "react-icons/io";

function FinalQuestion() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleGoBack = () => {
    navigate("/question2"); // to:do
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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
        <button className="NextButton">Next</button>
        <button className="SkipButton">Skip</button>
      </div>
    </FinalQuestionWrapper>
  );
}

export default FinalQuestion;
