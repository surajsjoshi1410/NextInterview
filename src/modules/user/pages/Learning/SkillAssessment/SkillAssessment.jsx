import React, { useEffect, useState } from "react";
import {
  AssessmentContainer,
  QuestionWrapper,
  QuestionHeader,
  Option,
  ButtonWrapper,
  SkipButton,
  SubmitButton,
  AnswerFeedback,
  TextArea,
  CloseButton
} from "../SkillAssessment/SkillAssessment.styles";
import { getSkillAssessment } from "../../../../../api/skillAssessmentApi";

const SkillAssessment = ({
  module_code,
  topic_code,
  subtopic_code,
  question_type,
  level,
  onCloseModal,
}) => {
  const [answers, setAnswers] = useState({}); // User answers
  const [filteredQuestions, setFilteredQuestions] = useState([]); // List of questions
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [submitted, setSubmitted] = useState(false); // Flag to track if the form has been submitted
  const [feedback, setFeedback] = useState({}); // Store feedback for each question

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getSkillAssessment(
          module_code,
          topic_code,
          subtopic_code,
          question_type,
          level
        );

        console.log("Fetched Questions:", response);

        if (response && response.success && Array.isArray(response.data)) {
          setFilteredQuestions(response.data);
        } else {
          console.error("Unexpected API response format:", response);
          setFilteredQuestions([]);
          setError("Invalid response from server.");
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
        setError("Failed to load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [module_code, topic_code, subtopic_code, question_type, level]);

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleTextAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };
  const checkAnswer = (question) => {
    const userAnswer = answers[question._id]; // User's input
    let UserOption;
    switch (userAnswer) {
      case "1":
        UserOption = "option_a";
        break;
      case "1":
        UserOption = "option_b";
        break;
      case "3":
        UserOption ="option_c";
        break;
      case "4":
        UserOption = "option_d";
        break;
      default:
        UserOption = "";
    }
    if (question.question_type === "mcq") {
      return UserOption === question.correct_option;
    } else if (question.question_type === "single-line" || question.question_type === "multi-line" || question.question_type === "approach") {
      // For single-line, multi-line, and approach questions, compare user input (trimmed and lowercased)
      if (question.answer.trim() !== "") {
        return userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase();
      } else {
        // If there's no answer in the database, handle accordingly (e.g., no correct answer to check)
        return userAnswer.trim() === "";
      }
    }
  
    return false;
  };
  

  const handleSubmit = () => {
    const newFeedback = {};
    filteredQuestions.forEach((question) => {
      const isCorrect = checkAnswer(question);
      console.log("Is Correct:", isCorrect);
      newFeedback[question._id] = isCorrect ? "Correct" : "Incorrect";
    });
    setFeedback(newFeedback);
    setSubmitted(true); // Mark the form as submitted
  };

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>{error}</div>;
  if (!filteredQuestions.length) return <div>No questions available.</div>;

  return (
    <AssessmentContainer>
      <CloseButton onClick={onCloseModal}>X</CloseButton>
      <h1>Skill Assessment</h1>
      {filteredQuestions.map((q, index) => (
        <QuestionWrapper key={q._id || index}>
          <QuestionHeader>{index + 1}. {q.question}</QuestionHeader>

          {q.question_type === "mcq" && !submitted && (
            <>
              {[q.option_a, q.option_b, q.option_c, q.option_d].filter(Boolean).map((option, idx) => (
                <Option key={idx}>
                  <input 
                    type="radio" 
                    name={`question-${q._id}`} 
                    value={option} 
                    onChange={() => handleOptionChange(q._id, option)} 
                  />
                  {option}
                </Option>
              ))}
            </>
          )}

          {(q.question_type === "single-line" || q.question_type === "multi-line" || q.question_type === "approach") && !submitted && (
            <TextArea
              placeholder="Type your answer..."
              value={answers[q._id] || ""}
              onChange={(e) => handleTextAnswer(q._id, e.target.value)}
            />
          )}

          {submitted && feedback[q._id] && (
            <AnswerFeedback>{feedback[q._id]}</AnswerFeedback>
          )}
        </QuestionWrapper>
      ))}

      {!submitted && (
        <ButtonWrapper>
          <SkipButton onClick={onCloseModal}>Skip</SkipButton>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonWrapper>
      )}
    </AssessmentContainer>
  );
};

export default SkillAssessment;
