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
} from "../../Questions/Question4/Question4.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";

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
  
</Section>

  </Container>
  </div>
  );
};

export default QuestionPage4;
