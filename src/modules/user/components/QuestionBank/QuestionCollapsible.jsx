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
    Companies1,
    Difficulty1,
    Type1
} from "./QuestionCollapsible.styles";
import { Companies, Difficulty, MetaInfo, Topic, Type } from "../../pages/QuestionBank/QuestionBank.styles";
import theme from "../../../../theme/Theme";

const allQuestions = [
    { id: 1, question: "Procedural Knowledge in a rule-based system, is in the form of?", topic: "Machine Learning", level: "Easy", type: "MCQ", companies: ["Amazon", "Google", "Flipkart"], options: ["Yes", "No", "None of the above"], correctAnswer: "Yes", solution: "Rule-based systems use rules or conditions to make decisions based on input data." },
    { id: 2, question: "What is Deep Learning?", topic: "Deep Learning", level: "Medium", type: "MCQ", companies: ["Facebook", "Flipkart"], options: ["A", "B", "C"], correctAnswer: "A", solution: "Deep learning is a subset of machine learning involving neural networks with multiple layers." },
    { id: 3, question: "What is Python?", topic: "Python", level: "Hard", type: "MCQ", companies: ["Amazon"], options: ["Option 1", "Option 2", "Option 3"], correctAnswer: "Option 2", solution: "Python is a high-level programming language known for its simplicity and readability." },
    { id: 4, question: "What is SQL?", topic: "SQL", level: "Easy", type: "MCQ", companies: ["Google"], options: ["Choice 1", "Choice 2", "Choice 3"], correctAnswer: "Choice 3", solution: "SQL (Structured Query Language) is used to manage and manipulate databases." },
];



const QuestionCollapsible = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedQuestion = allQuestions.find(q => q.id === Number(id)) || allQuestions[0];
    // State to manage selected answer and solution visibility
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showSolution, setShowSolution] = useState(false);

    // Reset state when switching to a new question
    useEffect(() => {
        setSelectedAnswer(null);
        setShowSolution(false);
    }, [id]); // Runs whenever question ID changes

    // Function to navigate to the next question
    const handleNextQuestion = () => {
        const currentIndex = allQuestions.findIndex(q => q.id === Number(id));
        const nextIndex = (currentIndex + 1) % allQuestions.length; // Loop back to the first question
        navigate(`/user/questionBank/${allQuestions[nextIndex].id}`);
    };

    return (
        <PageContainer>
            {/* Left Sidebar */}
            <Sidebar>
                <h3 style={{ paddingLeft: "10px" }}>Questions</h3>
                {allQuestions.map((q) => (
                    <div key={q.id} style={{ padding: "10px", borderBottom: "1px solid #ccc", borderTop: "none" }}>
                        <Link 
                            to={`/user/questionBank/${q.id}`} 
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => {
                                navigate(`/user/questionBank/${q.id}`); // Navigate to new question
                            }}
                        >
                            {q.id}. {q.question}
                        </Link>
                    </div>
                ))}
            </Sidebar>

            {/* Right Side Content */}
            <Content>
                {selectedQuestion ? (
                    <>
                        <MetaInfo1 style={{ marginLeft: "5px" }}>
                            <Topic1>Topic: {selectedQuestion.topic}</Topic1>
                            <Difficulty1>Difficulty: {selectedQuestion.level}</Difficulty1>
                            <Type1>Type: {selectedQuestion.type}</Type1>
                            <Companies1>Companies: {selectedQuestion.companies.join(", ")}</Companies1>
                        </MetaInfo1>

                        <QuestionContainer>
                            <QuestionHeader>{selectedQuestion.question}</QuestionHeader>
                            <form>
                                {selectedQuestion.options.map((option, index) => (
                                    <Option key={index}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={option}
                                            checked={selectedAnswer === option}
                                            onChange={() => {
                                                setSelectedAnswer(option);
                                                setShowSolution(false); // Reset solution view when new answer is selected
                                            }}
                                        />
                                        {option}
                                    </Option>
                                ))}
                            </form>

                            {/* Show Solution Button - Disappears after Click */}
                            {selectedAnswer && !showSolution && (
                                <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                            )}

                            {/* Display Correct/Incorrect Answer (Only after clicking "Show Solution") */}
                            {showSolution && (
                                <FeedbackBox correct={selectedAnswer === selectedQuestion.correctAnswer}>
                                    <Icon>{selectedAnswer === selectedQuestion.correctAnswer ? "✅" : "❌"}</Icon>
                                    {selectedAnswer === selectedQuestion.correctAnswer
                                        ? "Your answer is correct"
                                        : "Your answer is incorrect"}
                                </FeedbackBox>
                            )}

                            {/* Display Solution Section */}
                            {showSolution && (
                                <SolutionBox>
                                    <p
                                        style={{
                                            fontSize:"16px",
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            color:`${theme.colors.secondary}`,
                                        }}
                                    >
                                        Solution
                                    </p>
                              
                                    <p style={{ 
                                            background:`${theme.colors.backgray}`,
                                            padding:"10px",
                                            borderRadius:"5px",
                                        }}
                                    >
                                        {selectedQuestion.solution}
                                    </p>
                                </SolutionBox>
                            )}

                            {/* Next Question Button (Now Outside the Solution Box) */}
                            {showSolution && (
                                <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
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
