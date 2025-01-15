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
} from "../../Questions/Question3/Question3.style";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const QuestionPage3 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    navigate("/question2");
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

      <Title>How experienced are you?</Title>

      <Option
        $isSelected={selectedOption === "0-3"}
        onClick={() => handleOptionChange("0-3")}
      >
        <CirclePointer $isSelected={selectedOption === "0-3"} />
        <OptionLabel $isSelected={selectedOption === "0-3"}>
          0 - 3 years
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "3-5"}
        onClick={() => handleOptionChange("3-5")}
      >
        <CirclePointer $isSelected={selectedOption === "3-5"} />
        <OptionLabel $isSelected={selectedOption === "3-5"}>
          3 - 5 years
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "5-10"}
        onClick={() => handleOptionChange("5-10")}
      >
        <CirclePointer $isSelected={selectedOption === "5-10"} />
        <OptionLabel $isSelected={selectedOption === "5-10"}>
          5 - 10 years
        </OptionLabel>
      </Option>

      <Option
        $isSelected={selectedOption === "10+"}
        onClick={() => handleOptionChange("10+")}
      >
        <CirclePointer $isSelected={selectedOption === "10+"} />
        <OptionLabel $isSelected={selectedOption === "10+"}>
          greeter than 10 years
        </OptionLabel>
      </Option>

      <NextButton disabled={!selectedOption}>Next</NextButton>
    </Container>
  );
};

export default QuestionPage3;
