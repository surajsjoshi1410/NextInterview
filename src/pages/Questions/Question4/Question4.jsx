import React, { useState } from "react";
import {
  Container,
  Title,
  Option,
  OptionLabel,
  NextButton,
  CirclePointer,
  BackIcon,
  Section,
  SkipButton
} from "../../Questions/Question4/Question4.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { useUser } from '@clerk/clerk-react'
import { getJobById, getJobs } from "../../../api/jobApi";
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";

const QuestionPage4 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const handleOnlClick = async () => {
    console.log("selectedOption", selectedOption);
    const data = await getUserByClerkId(user.id);
    console.log("data", data);
    const submissionData = {  
      user_id: data.data.user._id,
      data_scheduled_interview_response: selectedOption,
      // profile_status:true
    };
    await createUserProfile(submissionData);
    if(selectedOption === "true") {
      navigate("/question5");
    }else{
      navigate("/question6");
    }
  };
  const handleGoBack = () => {
    navigate("/question3");
  };

  return (
    <div>
      <HeaderWithLogo />

      <Container>
        <Section>

          <BackIcon onClick={handleGoBack}
            style={{
              borderRadius: '10%',
              border: '1px solid grey',
              padding: '8px',
            }}
          >
            <FaArrowLeft />
          </BackIcon>

          <Title>Do you have interview scheduled <br /> currently?</Title>

          <Option
            $isSelected={selectedOption === "true"}
            onClick={() => handleOptionChange("true")}
          >
            <CirclePointer $isSelected={selectedOption === "true"} />
            <OptionLabel $isSelected={selectedOption === "true"}>
              Yes
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === "false"}
            onClick={() => handleOptionChange("false")}
          >
            <CirclePointer $isSelected={selectedOption === "false"} />
            <OptionLabel $isSelected={selectedOption === "false"}>
              No
            </OptionLabel>
          </Option>

          <NextButton disabled={!selectedOption} onClick={handleOnlClick}>Next</NextButton>
           <SkipButton onClick={() => navigate("/question5")}>Skip</SkipButton>

        </Section>

      </Container>
    </div>
  );
};

export default QuestionPage4;
