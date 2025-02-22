import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PageContainer,
  Sidebar,
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
} from "./QuestionCollapsible.styles";
import MainWindow from "../CodeEditorWindow/MainWindow"; // Importing the code editor component
import { FcOk } from "react-icons/fc";
import { GoThumbsup, GoThumbsdown, GoX } from "react-icons/go";

import { getQuestionBank, getQuestionBankById } from "../../../../api/questionBankApi";

const QuestionCollapsible = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [allQuestions, setAllQuestions] = useState([]); // Store all questions for the sidebar
  const [selectedQuestion, setSelectedQuestion] = useState(null); // For storing the selected question
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");  // To store answer for single-line, multi-line, approach questions
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    // Fetch all questions to display in the sidebar
    const fetchAllQuestions = async () => {
      try {
        const response = await getQuestionBank();  // API call to get all questions
        if (response && response.data) {
          setAllQuestions(response.data);  // Set the all questions data for sidebar
          if (!selectedQuestion  && response.data.length > 0) {
            setSelectedQuestion(response.data[0]);  // Set the first question as the default selected question
            navigate(`/user/questionBank/${response.data[0]._id}`);  // Redirect to the first question
          }
        } else {
          console.error("No questions found");
        }
      } catch (error) {
        console.error("Error fetching all questions:", error);
      }
    };

    fetchAllQuestions();
  }, []);

  useEffect(() => {
    // Fetch the question by ID when it changes
    const fetchQuestion = async () => {
      try {
        const response = await getQuestionBankById(id);  // API call to get question by ID
        if (response && response.data) {
          setSelectedQuestion(response.data);  // Set the selected question data
        } else {
          console.error("No data found for this question");
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
    setSelectedAnswer(null);  // Reset answer
    setUserAnswer("");  // Reset user input
    setShowSolution(false);  // Reset solution visibility
  }, [id]);

  const handleNextQuestion = () => {
    const currentIndex = allQuestions.findIndex(
      (q) => q._id === selectedQuestion._id
    );
  
    const nextIndex = currentIndex + 1;
    if (nextIndex < allQuestions.length) {
      const nextQuestion = allQuestions[nextIndex];
      navigate(`/user/questionBank/${nextQuestion._id}`);
    } else {
      console.log("No more questions available.");
    }
  };

  return (
    <PageContainer>
      <Sidebar>
        <h3 style={{ paddingLeft: "10px" }}>Questions</h3>
        {/* Render the questions list */}
        {allQuestions.map((question, index) => (
          <Link
            key={index}
            to={`/user/questionBank/${question._id}`} // Navigate to child page with the selected question ID
            style={{ textDecoration: "none", color: "black" }}
          >
            <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
              {index + 1}. {question.question}
            </div>
          </Link>
        ))}
      </Sidebar>

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
                          <GoX style={{ color: "red", fontSize: "24px", marginTop: "5px" }} />
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
                        <p>{selectedQuestion.answer}</p>
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
                          <GoX style={{ color: "red", fontSize: "24px", marginTop: "5px" }} />
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
                        <p>{selectedQuestion.answer}</p>
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
                        width: "100%",
                        // padding: "10px",
                        borderRadius: "5px",
                        // border: "1px solid #ddd",
                        backgroundColor: "white",
                        border:"none",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        fontFamily: "Arial, sans-serif",
                        resize: "vertical",
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
                          <GoX style={{ color: "red", fontSize: "24px", marginTop: "5px" }} />
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
                        <p>{selectedQuestion.answer}</p>
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
                        // marginTop: "10px",
                        // padding: "10px",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "white",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        resize: "vertical",
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
                          <GoX style={{ color: "red", fontSize: "24px", marginTop: "5px" }} />
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
                        <p>{selectedQuestion.answer}</p>
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
    </PageContainer>
  );
};

export default QuestionCollapsible;
