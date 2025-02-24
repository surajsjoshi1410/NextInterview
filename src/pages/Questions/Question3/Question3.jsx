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
  SkipButton,
} from "../../Questions/Question3/Question3.style";

import { useNavigate } from "react-router";
import { RxArrowLeft } from "react-icons/rx";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { getJobById, getJobs } from "../../../api/jobApi";
import { useUser } from "@clerk/clerk-react";
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";

const QuestionPage3 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

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
    };
    await createUserProfile(submissionData);
    navigate("/question4");
  };

  return (
    <div>
      <HeaderWithLogo />

      <Container>
        <Section>
          <BackIcon
            onClick={handleGoBack}
            style={{
              borderRadius: "10%",
              border: "1px solid grey",
              padding: "8px",
            }}
          >
            <RxArrowLeft />
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
            $isSelected={selectedOption === "3 - 6 years"}
            onClick={() => handleOptionChange("3 - 6 years")}
          >
            <CirclePointer $isSelected={selectedOption === "3 - 6 years"} />
            <OptionLabel $isSelected={selectedOption === "3 - 6 years"}>
              3 - 6 years
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === "6 - 10 years"}
            onClick={() => handleOptionChange("6 - 10 years")}
          >
            <CirclePointer $isSelected={selectedOption === "6 - 10 years"} />
            <OptionLabel $isSelected={selectedOption === "6 - 10 years"}>
              6 - 10 years
            </OptionLabel>
          </Option>

          <Option
            $isSelected={selectedOption === ">10 years"}
            onClick={() => handleOptionChange(">10 years")}
          >
            <CirclePointer $isSelected={selectedOption === ">10 years"} />
            <OptionLabel $isSelected={selectedOption === ">10 years"}>
              &gt;10 years
            </OptionLabel>
          </Option>

          <NextButton disabled={!selectedOption} onClick={handleClick}>
            Next
          </NextButton>
        </Section>
      </Container>
    </div>
  );
};

export default QuestionPage3;
