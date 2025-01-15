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
} from "../../Questions/Question4/Question4.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const QuestionPage4 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate("/question3");
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

      <Title>Do you have interview scheduled <br/> currently?</Title>

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
          No
        </OptionLabel>
      </Option>

      <NextButton disabled={!selectedOption}>Next</NextButton>
    </Container>
  );
};

export default QuestionPage4;
