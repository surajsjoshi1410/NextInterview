import React, { useState, useEffect } from "react";
import {
  AssessmentContainer,
  QuestionWrapper,
  QuestionHeader,
  Option,
  ButtonWrapper,
  SubmitButton,
  CloseButton,
} from "./SkillAssessment.styles";

const SkillAssessment = ({ oncloseModal }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 3,
      text: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    },
    {
      id: 4,
      text: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
    },
    {
      id: 5,
      text: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Submitted Answers:", answers);
      alert("Assessment submitted successfully!");
      oncloseModal();
    }
  };

  const isOptionSelected = answers[currentQuestion?.id];

  return (
    <AssessmentContainer>
      <CloseButton onClick={oncloseModal}>X</CloseButton>
      <h1 className="">Skill Assessment</h1>
      {currentQuestion && (
        <QuestionWrapper>
          <QuestionHeader>
            <span>{currentQuestion.id}</span>
            {currentQuestion.text}
          </QuestionHeader>
          {currentQuestion.options.map((option) => (
            <Option key={option}>
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option}
                checked={answers[currentQuestion.id] === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </Option>
          ))}
        </QuestionWrapper>
      )}

      <ButtonWrapper>
        <SubmitButton disabled={!isOptionSelected} onClick={handleNext}>
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </SubmitButton>
      </ButtonWrapper>
    </AssessmentContainer>
  );
};

export default SkillAssessment;
