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
} from "../../Questions/Question3/Question3.style";

import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { getJobById, getJobs } from "../../../api/jobApi";
import { useUser } from '@clerk/clerk-react'
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";




const QuestionPage3 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser()

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate("/question2");
  };
  const handleClick = async () => {
    console.log("selectedOption", selectedOption);
    const data = await getUserByClerkId(user.id);
    console.log("data", data);
    const submissionData = {
      user_id: data.data.user._id,
      data_experience_response: selectedOption,
    }
    await createUserProfile(submissionData);
    navigate("/question4");
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

          <Title>How experienced are you?</Title>

          <Option
            $isSelected={selectedOption === "0 - 3 years"}
            onClick={() => handleOptionChange("0 - 3 years")}
          >
            <CirclePointer $isSelected={selectedOption === "0 - 3 years"} />
            <OptionLabel $isSelected={selectedOption === "0 - 3 years"}>
              0 - 3 years
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === "3 - 5 years"}
            onClick={() => handleOptionChange("3 - 5 years")}
          >
            <CirclePointer $isSelected={selectedOption === "3 - 5 years"} />
            <OptionLabel $isSelected={selectedOption === "3 - 5 years"}>
              3 - 5 years
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === "5 - 10 years"}
            onClick={() => handleOptionChange("5 - 10 years")}
          >
            <CirclePointer $isSelected={selectedOption === "5 - 10 years"} />
            <OptionLabel $isSelected={selectedOption === "5 - 10 years"}>
              5 - 10 years
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === "greeter than 10 years"}
            onClick={() => handleOptionChange("greeter than 10 years")}
          >
            <CirclePointer $isSelected={selectedOption === "greeter than 10 years"} />
            <OptionLabel $isSelected={selectedOption === "greeter than 10 years"}>
              greeter than 10 years
            </OptionLabel>
          </Option>

          <NextButton disabled={!selectedOption} onClick={handleClick}>Next</NextButton>
          <SkipButton onClick={() => navigate("/question4")}>Skip</SkipButton>

        </Section>
      </Container>
    </div>
  );
};

export default QuestionPage3;
