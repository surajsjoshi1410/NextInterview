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
} from "../Question1/Question1.styles";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";

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
   
      </Section>

       </Container>
     </div>
  );
};

export default QuestionPage1;
