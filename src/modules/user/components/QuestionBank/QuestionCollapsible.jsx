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
import MainWindow from "../CodeEditorWindow/MainWindow"; // Importing the code editor component

const allQuestions = [
    { id: 1, question: "Procedural Knowledge in a rule-based system, is in the form of?", topic: "Machine Learning", level: "Easy", type: "MCQ", companies: ["Amazon", "Google", "Flipkart"], options: ["Yes", "No", "None of the above"], correctAnswer: "Yes", solution: "Rule-based systems use rules or conditions to make decisions based on input data." },
    { id: 2, question: "Write a Python function to calculate the Fibonacci sequence.", topic: "Python", level: "Medium", type: "Coding", companies: ["Google", "Amazon"], solution: "The Fibonacci sequence can be implemented using recursion or iteration." },
    { id: 3, question: "What is SQL?", topic: "SQL", level: "Easy", type: "MCQ", companies: ["Google"], options: ["Choice 1", "Choice 2", "Choice 3"], correctAnswer: "Choice 3", solution: "SQL (Structured Query Language) is used to manage and manipulate databases." },
];

const QuestionCollapsible = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedQuestion = allQuestions.find(q => q.id === Number(id)) || allQuestions[0];
    
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showSolution, setShowSolution] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setShowSolution(false);
    }, [id]);

    const handleNextQuestion = () => {
        const currentIndex = allQuestions.findIndex(q => q.id === Number(id));
        const nextIndex = (currentIndex + 1) % allQuestions.length;
        navigate(`/user/questionBank/${allQuestions[nextIndex].id}`);
    };

    return (
        <PageContainer>
            <Sidebar>
                <h3 style={{ paddingLeft: "10px" }}>Questions</h3>
                {allQuestions.map((q) => (
                    <div key={q.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                        <Link 
                            to={`/user/questionBank/${q.id}`} 
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => navigate(`/user/questionBank/${q.id}`)}
                        >
                            {q.id}. {q.question}
                        </Link>
                    </div>
                ))}
            </Sidebar>

            <Content>
                {selectedQuestion ? (
                    <>
                        <MetaInfo1>
                            <Topic1>Topic: {selectedQuestion.topic}</Topic1>
                            <Difficulty1>Difficulty: {selectedQuestion.level}</Difficulty1>
                            <Type1>Type: {selectedQuestion.type}</Type1>
                            <Companies1>Companies: {selectedQuestion.companies.join(", ")}</Companies1>
                        </MetaInfo1>

                        <QuestionContainer>
                            <QuestionHeader>{selectedQuestion.question}</QuestionHeader>
                            
                            {selectedQuestion.type === "MCQ" ? (
                                <>
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
                                                        setShowSolution(false);
                                                    }}
                                                />
                                                {option}
                                            </Option>
                                        ))}
                                    </form>
                                    {selectedAnswer && !showSolution && (
                                        <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                                    )}
                                    {showSolution && (
                                        <FeedbackBox correct={selectedAnswer === selectedQuestion.correctAnswer}>
                                            <Icon>{selectedAnswer === selectedQuestion.correctAnswer ? "✅" : "❌"}</Icon>
                                            {selectedAnswer === selectedQuestion.correctAnswer
                                                ? "Your answer is correct"
                                                : "Your answer is incorrect"}
                                        </FeedbackBox>
                                    )}
                                    {showSolution && (
                                        <SolutionBox>
                                            <p style={{ fontWeight: "700", color: "#4CAF50" }}>Solution</p>
                                            <p>{selectedQuestion.solution}</p>
                                        </SolutionBox>
                                    )}
                                </>
                            ) : (
                                <MainWindow />
                            )}

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
