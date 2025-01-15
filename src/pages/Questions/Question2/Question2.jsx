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
} from "../../Questions/Question2/Question2.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const QuestionPage2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate("/question1");
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

      <Title>Are you currently in a data/ai job?</Title>

      <Option
        $isSelected={selectedOption === "interviews"}
        onClick={() => handleOptionChange("interviews")}
      >
        <CirclePointer $isSelected={selectedOption === "interviews"} />
        <OptionLabel $isSelected={selectedOption === "interviews"}>
          Yes
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "switch"}
        onClick={() => handleOptionChange("switch")}
      >
        <CirclePointer $isSelected={selectedOption === "switch"} />
        <OptionLabel $isSelected={selectedOption === "switch"}>
          No, planning to Switch to data/ai role
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "firstJob"}
        onClick={() => handleOptionChange("firstJob")}
      >
        <CirclePointer $isSelected={selectedOption === "firstJob"} />
        <OptionLabel $isSelected={selectedOption === "firstJob"}>
          No, looking for my 1st job
        </OptionLabel>
      </Option>

      <NextButton disabled={!selectedOption}>Next</NextButton>
    </Container>
  );
};

export default QuestionPage2;
