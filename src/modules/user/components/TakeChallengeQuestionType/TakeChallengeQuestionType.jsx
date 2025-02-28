import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../../theme/Theme";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.light};
  margin-left: 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  margin-right: ${theme.spacing(4)};
  @media (max-width: ${theme.breakpoints.tablet}) {
    // margin-right: 0;

  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  font-size: 32px;
  margin-bottom: ${theme.spacing(2)};
`;

const Description = styled.p`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.black};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: ${theme.spacing(4)};
  background-color: ${theme.colors.backgroundtake};
  padding: ${theme.spacing(2)};
  width: 96%;
`;

const LanguageSelectWrapper = styled.div`
  margin-bottom: ${theme.spacing(3)};
  display: flex;
  gap: 10px;
`;

const LanguageSelect = styled.select`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: 16px;
  border-radius: 8px;
  height: 40px;
  margin-top: 6px;
  margin-right: 15px;
  background-color: ${theme.colors.backgroundtake};
  border: 1px solid ${theme.colors.borderblue};
  font-family: ${theme.fonts.body};
`;

const CodeEditor = styled.textarea`
  width: 96%;
  height: 250px;
  font-family: ${theme.fonts.monospace};
  font-size: 14px;
  padding: ${theme.spacing(2)};
  border-radius: 8px;
  border: 1px solid ${theme.colors.backgroundtake};
  background-color: ${theme.colors.light};
`;

const RunButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  border-radius: 8px;
  font-family: ${theme.fonts.body};
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  margin-top: ${theme.spacing(2)};
  margin-left: 1050px;

  &:hover {
    background-color: ${theme.colors. primary};
  }
`;

const OutputBox = styled.div`
  width: 96%;
  height: 100px;
  font-family: ${theme.fonts.monospace};
  font-size: 14px;
  padding: ${theme.spacing(2)};
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderblue};
  background-color: ${theme.colors.lightgreen};
  margin-top: ${theme.spacing(2)};
`;

const RightPanel = styled.div`
  width: 300px;
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.lightblue};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: 20px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    margin-top: ${theme.spacing(4)};
  }
`;

const HintWrapper = styled.div`
  margin-bottom: ${theme.spacing(3)};
`;

const HintDropdown = styled.select`
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  font-size: 14px;
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.borderblue};
  border-radius: 8px;
  width: 100%;
`;

const HintContent = styled.div`
  margin-top: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textgray};
  padding: ${theme.spacing(2)};
  background-color: ${theme.colors.backgray};
  border-radius: 8px;
`;

const ExploreButton = styled.button`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.secondary};
  color: ${theme.colors.secondary};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: 20px;
  font-family: ${theme.fonts.body};
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const TakeChallengeQuestionType = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(""); // Store code input
  const [output, setOutput] = useState(""); // Store execution output
  const [hintVisible, setHintVisible] = useState(true); // Hint is visible by default
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleHint = () => {
    setHintVisible(!hintVisible);
  };

  const handleRunCode = async () => {
    const clientId = "your_jdoodle_client_id"; // Replace with JDoodle Client ID
    const clientSecret = "your_jdoodle_client_secret"; // Replace with JDoodle Client Secret

    const langMapping = {
      python: "python3",
      java: "java",
      javascript: "nodejs",
    };

    try {
      const response = await axios.post("https://api.jdoodle.com/v1/execute", {
        clientId,
        clientSecret,
        script: code,
        language: langMapping[language],
        versionIndex: "3",
      });

      setOutput(response.data.output);
    } catch (error) {
      setOutput("Error executing code. Please check your input.");
      console.error("JDoodle API Error:", error);
    }
  };

  return (
    <Container>
      <LeftPanel>
        <div style={{ display: "flex", justifyContent: "space-between" , marginBottom: "-25px"}}>
          {/* <Title>Question Type - Coding</Title> */}
          <p>Question Type - Coding</p>
          {/* Language Selection */}
          <LanguageSelectWrapper>
          <p>Language</p>

            <LanguageSelect value={language} onChange={handleLanguageChange}>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
            </LanguageSelect>
          </LanguageSelectWrapper>
        </div>
                 <Description>
           In this challenge, the user enters a string and a substring. You have
           to print the number of times that the substring occurs in the given
           string. String traversal will take place from left to right, not from
           right to left. <br />
           NOTE: String letters are case-sensitive.
         </Description>

        {/* Code Editor */}
        <CodeEditor
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />

        <RunButton onClick={handleRunCode}>Submit Code</RunButton>

        {/* Output Box */}
        {/* <OutputBox>{output || "Output will be displayed here..."}</OutputBox> */}
      </LeftPanel>

      {/* Right Panel */}
      <RightPanel>
        {/* Hint Section */}
        <HintWrapper>
          <strong>Hint</strong>
          <HintDropdown onChange={toggleHint}>
            <option value="show">Show Hint</option>
            <option value="hide">Hide Hint</option>
          </HintDropdown>
          <p> Explore the Question Bank</p>

          {hintVisible && (
            <HintContent>
              You can iterate through the string and use the string count method
              to find the occurrences of the substring.
            </HintContent>
          )}
        </HintWrapper>

        {/* Explore the Question Bank */}
        <ExploreButton onClick={() => navigate("/question-bank")}>
          Question Bank
        </ExploreButton>
      </RightPanel>
    </Container>
  );
};

export default TakeChallengeQuestionType;
