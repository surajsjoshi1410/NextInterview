import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Content,
  QuestionHeader,
  Option,
  QuestionContainer,
  FeedbackBox,
  SolutionBox,
  Icon,
  Button,
  NextButton,
  MetaInfo1,
  Topic1,
  Difficulty1,
  Type1,
  ExploreButton,
  ExploreSubtitle,
  ExploreTitle,
  ExploreQuestionsContainer
} from "./TryItYourself.styles";
import MainWindow from "../CodeEditorWindow/MainWindow"; // Importing the code editor component
import { FcOk } from "react-icons/fc";
import { GoThumbsup, GoThumbsdown, GoX } from "react-icons/go";
 
// import { getQuestionBank, getQuestionBankById } from "../../../../api/questionBankApi";
import { gettiy } from "../../../../api/tiyApi"; 
import { getModuleCode } from "../../../../api/addNewModuleApi";
const TryItYourself = () => {
 
    const { module_name } = useParams();
  const navigate = useNavigate();
 
  const [allQuestions, setAllQuestions] = useState([]); // Store all questions for the sidebar
  const [selectedQuestion, setSelectedQuestion] = useState(null); // For storing the selected question
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");  // To store answer for single-line, multi-line, approach questions
  const [showSolution, setShowSolution] = useState(false);
  const [moduleCodes, setModuleCodes] = useState([]);
//   import { useParams } from "react-router-dom";

useEffect(() => {
    const fetchAllQuestions = async () => {
        try {
            const response = await gettiy();  // Fetch all questions
            console.log("Question data:", response.data);
            if (response && response.success && response.data) {
                setAllQuestions(response.data);
            } else {
                console.error("No questions found");
            }
        } catch (error) {
            console.error("Error fetching all questions:", error);
        }
    };

    const fetchModuleCodes = async () => {
        try {
            const response = await getModuleCode(); // Fetch module codes
            console.log("Module Codes:", response.data);
            if (response && response.success && response.data) {
                setModuleCodes(response.data);
            } else {
                console.error("No module codes found");
            }
        } catch (error) {
            console.error("Error fetching module codes:", error);
        }
    };

    fetchAllQuestions();
    fetchModuleCodes();
}, []);
 
useEffect(() => {
    if (allQuestions.length > 0 && moduleCodes.length > 0) {
        // Find the module code for the selected module
        const currentModuleCode = moduleCodes.find(m => m.module_name === module_name)?.module_code;

        if (!currentModuleCode) {
            console.warn("No module code found for this module ID");
            return;
        }

        // Filter questions based on the module code
        const filteredQuestions = allQuestions.filter(q => q.module_code === currentModuleCode);
        console.log("Filtered Questions:", filteredQuestions);

        // Set the first question as the selected question
        if (filteredQuestions.length > 0) {
            setSelectedQuestion(filteredQuestions[0]);
        } else {
            setSelectedQuestion(null);
        }
    }
}, [allQuestions, moduleCodes, module_name]); // Keep the dependencies minimal to avoid infinite loop




  
  const handleNextQuestion = () => {
    const currentIndex = allQuestions.findIndex(
      (q) => q._id === selectedQuestion._id
    );
 
    const nextIndex = currentIndex + 1;
    if (nextIndex < allQuestions.length) {
      const nextQuestion = allQuestions[nextIndex];
      navigate(`/user/learning/${nextQuestion._id}/topic/tryityourself`);
    } else {
      console.log("No more questions available.");
    }
  };

  const handleExploreButtonClick = () => {
    navigate(`/user/questionBank`)
  }
 
  return (
    <div style={{display: "flex",}}>
     
      <Content>
        {selectedQuestion ? (
          <>
            <MetaInfo1>
              <Topic1>Module: {selectedQuestion.topic}</Topic1>
              <Difficulty1>Difficulty: {selectedQuestion.level}</Difficulty1>
              <Type1>Type: {selectedQuestion.question_type}</Type1>
            </MetaInfo1>
 
            <QuestionContainer>
              <QuestionHeader>{selectedQuestion.question}</QuestionHeader>
 
              {selectedQuestion.question_type === "mcq" ? (
                <>
                  <form>
                    {selectedQuestion.option_a && (
                      <Option>
                        <input
                          type="radio"
                          name="answer"
                          value="option_a"
                          checked={selectedAnswer === "option_a"}
                          onChange={() => {
                            setSelectedAnswer("option_a");
                            setShowSolution(false);
                          }}
                        />
                        {selectedQuestion.option_a}
                      </Option>
                    )}
                    {selectedQuestion.option_b && (
                      <Option>
                        <input
                          type="radio"
                          name="answer"
                          value="option_b"
                          checked={selectedAnswer === "option_b"}
                          onChange={() => {
                            setSelectedAnswer("option_b");
                            setShowSolution(false);
                          }}
                        />
                        {selectedQuestion.option_b}
                      </Option>
                    )}
                    {selectedQuestion.option_c && (
                      <Option>
                        <input
                          type="radio"
                          name="answer"
                          value="option_c"
                          checked={selectedAnswer === "option_c"}
                          onChange={() => {
                            setSelectedAnswer("option_c");
                            setShowSolution(false);
                          }}
                        />
                        {selectedQuestion.option_c}
                      </Option>
                    )}
                    {selectedQuestion.option_d && (
                      <Option>
                        <input
                          type="radio"
                          name="answer"
                          value="option_d"
                          checked={selectedAnswer === "option_d"}
                          onChange={() => {
                            setSelectedAnswer("option_d");
                            setShowSolution(false);
                          }}
                        />
                        {selectedQuestion.option_d}
                      </Option>
                    )}
                  </form>
                  {selectedAnswer && !showSolution && (
                    <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                  )}
                  {showSolution && (
                    <FeedbackBox correct={selectedAnswer === selectedQuestion.correct_option}>
                      <Icon>
                        {selectedAnswer === selectedQuestion.correct_option ? (
                          <FcOk />
                        ) : (
                          <GoX style={{ color: "red", fontSize: "24px" }} />
                        )}
                      </Icon>
                      {selectedAnswer === selectedQuestion.correct_option
                        ? "Your answer is correct"
                        : "Your answer is incorrect"}
                    </FeedbackBox>
                  )}
                  {showSolution && (
                    <SolutionBox>
                      <p style={{ fontWeight: "700", color: "#4CAF50" }}>Solution</p>
                      <div className="correction">
                        <p style={{margin: "2px"}}>{selectedQuestion.answer}</p>
                        <div className="thumbsup">
                          <span>
                            <GoThumbsup />
                            Helpful
                          </span>
                          <span>
                            <GoThumbsdown />
                            Not Helpful
                          </span>
                        </div>
                      </div>
                    </SolutionBox>
                  )}
                </>
              ) : selectedQuestion.question_type === "single-line" ? (
                <>
                  <SolutionBox>
                    <input
                      type="text"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Your answer"
                      style={{
                        width: "100%",
                        // padding: "10px",
                        // border: "1px solid #ccc",
                        border: "none",
                        borderRadius: "5px",
                        lineHeight: "2",
                        padding: "5px",
                      }}
                    />
                  </SolutionBox>
                  {userAnswer && !showSolution && (
                    <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                  )}
                  {showSolution && (
                    <FeedbackBox correct={userAnswer.trim() === selectedQuestion.answer.trim()}>
                      <Icon>
                        {userAnswer.trim() === selectedQuestion.answer.trim() ? (
                          <FcOk />
                        ) : (
                          <GoX style={{ color: "red", fontSize: "24px",  }} />
                        )}
                      </Icon>
                      {userAnswer.trim() === selectedQuestion.answer.trim()
                        ? "Your answer is correct"
                        : "Your answer is incorrect"}
                    </FeedbackBox>
                  )}
                  {showSolution && (
                    <SolutionBox>
                      <p style={{ fontWeight: "700", color: "#4CAF50" }}>Solution</p>
                      <div className="correction">
                        <p style={{margin: "2px"}}>{selectedQuestion.answer}</p>
                        <div className="thumbsup">
                          <span>
                            <GoThumbsup />
                            Helpful
                          </span>
                          <span>
                            <GoThumbsdown />
                            Not Helpful
                          </span>
                        </div>
                      </div>
                    </SolutionBox>
                  )}
                </>
              ) : selectedQuestion.question_type === "multi-line" ? (
                <>
                  <SolutionBox>
                    <textarea
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Your answer"
                      rows="5"
                      style={{
                        width: "98%",
                        padding: "10px",
                        borderRadius: "5px",
                        // border: "1px solid #ddd",
                        backgroundColor: "white",
                        border:"none",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        fontFamily: "Arial, sans-serif",
                        resize: "vertical",
                        outline: "none",
                      }}
                    />
                  </SolutionBox>
                  {userAnswer && !showSolution && (
                    <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                  )}
                  {showSolution && (
                    <FeedbackBox correct={userAnswer.trim() === selectedQuestion.answer.trim()}>
                      <Icon>
                        {userAnswer.trim() === selectedQuestion.answer.trim() ? (
                          <FcOk />
                        ) : (
                          <GoX style={{ color: "red", fontSize: "24px" }} />
                        )}
                      </Icon>
                      {userAnswer.trim() === selectedQuestion.answer.trim()
                        ? "Your answer is correct"
                        : "Your answer is incorrect"}
                    </FeedbackBox>
                  )}
                  {showSolution && (
                    <SolutionBox>
                      <p style={{ fontWeight: "700", color: "#4CAF50" }}>Solution</p>
                      <div className="correction">
                        <p style={{margin: "2px"}}>{selectedQuestion.answer}</p>
                        <div className="thumbsup">
                          <span>
                            <GoThumbsup />
                            Helpful
                          </span>
                          <span>
                            <GoThumbsdown />
                            Not Helpful
                          </span>
                        </div>
                      </div>
                    </SolutionBox>
                  )}
                </>
              ) : selectedQuestion.question_type === "approach" ? (
                <>
                  <SolutionBox
                  style={{
                    marginTop: "10px",
                  }}
                  >
                    <textarea
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Your approach"
                      rows="5"
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "white",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        resize: "vertical",
                        outline: "none",
                      }}
                    />
                  </SolutionBox>
                  {userAnswer && !showSolution && (
                    <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                  )}
                  {showSolution && (
                    <FeedbackBox correct={userAnswer.trim() === selectedQuestion.answer.trim()}>
                      <Icon>
                        {userAnswer.trim() === selectedQuestion.answer.trim() ? (
                          <FcOk />
                        ) : (
                          <GoX style={{ color: "red", fontSize: "24px" }} />
                        )}
                      </Icon>
                      {userAnswer.trim() === selectedQuestion.answer.trim()
                        ? "Your answer is correct"
                        : "Your answer is incorrect"}
                    </FeedbackBox>
                  )}
                  {showSolution && (
                    <SolutionBox>
                      <p style={{ fontWeight: "700", color: "#4CAF50" }}>Solution</p>
                      <div className="correction">
                        <p style={{margin: "2px"}}>{selectedQuestion.answer}</p>
                        <div className="thumbsup">
                          <span>
                            <GoThumbsup />
                            Helpful
                          </span>
                          <span>
                            <GoThumbsdown />
                            Not Helpful
                          </span>
                        </div>
                      </div>
                    </SolutionBox>
                  )}
                </>
              ) : (
                <MainWindow />
              )}
 
             {showSolution && (
                <NextButton onClick={handleNextQuestion}>
                  Next Question
                </NextButton>
              )}
            </QuestionContainer>
          </>
        ) : (
          <p>Question not found</p>
        )}
      </Content>
        <div style={{width: "25%"}}>
      <ExploreQuestionsContainer>
        <ExploreTitle>Explore Questions</ExploreTitle>
        <ExploreSubtitle>Dive into the question bank to find and solve more exercises like this, expanding your skills even further.</ExploreSubtitle>
        <ExploreButton onClick={handleExploreButtonClick}>Question Back</ExploreButton>
      </ExploreQuestionsContainer>
      </div>
    </div>
  )
}
 
export default TryItYourself