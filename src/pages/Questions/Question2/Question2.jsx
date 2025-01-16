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
} from "../../Questions/Question2/Question2.styles";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";

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
                </Section>
            </Container>
        </div>
    );
};

export default QuestionPage2;
