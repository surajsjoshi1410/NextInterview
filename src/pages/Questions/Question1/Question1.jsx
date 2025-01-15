import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  Title,
  Option,
  OptionLabel,
  NextButton,
  CirclePointer,
  BackIcon,
} from "../Question1/Question1.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const QuestionPage1 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate("/personalinfo");
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
      </Header>

      <BackIcon onClick={handleGoBack}>
        <FaArrowLeft />
      </BackIcon>

      <Title>What brings you to Next <br/> Interview?</Title>

      <Option
        $isSelected={selectedOption === "interviews"}
        onClick={() => handleOptionChange("interviews")}
      >
        <CirclePointer $isSelected={selectedOption === "interviews"} />
        <OptionLabel $isSelected={selectedOption === "interviews"}>
          Prepare for interviews
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "skills"}
        onClick={() => handleOptionChange("skills")}
      >
        <CirclePointer $isSelected={selectedOption === "skills"} />
        <OptionLabel $isSelected={selectedOption === "skills"}>
          Level up my data / AI skills
        </OptionLabel>
      </Option>

      <NextButton disabled={!selectedOption}>Next</NextButton>
    </Container>
  );
};

export default QuestionPage1;
