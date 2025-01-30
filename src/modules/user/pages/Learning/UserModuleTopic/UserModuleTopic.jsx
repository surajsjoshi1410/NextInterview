import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Container,
    Title,
    Text,
    Button,
    SummaryContainer,
    SummaryTitle,
    SummaryText,
    ButtonGroup
} from "../../Learning/UserModuleTopic/UserModuleTopic.style";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

// Sample Data for Dynamic Rendering
const topics = [
    {
        title: "How Does Data Analytics Get Tested in the Interview?",
        description: "Data analytics, in generais is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tol, is a subjective concept. More of a buzzword than an actual real question topic...",
    },
    {
        title: "Analyzing Data for a Take–Home Assignment",
        description: "This is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question topic...",
    },
    {
        title: "Data Analytics Case Study",
        description: "Case study on Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question topic...",
    }
];

const summaryText = [
    "Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question topic...",
    "Data analytics is a hard cois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question tois is Data analytics, in general, is a subjective concept. More of a buzzword than an actual real question toncept to test in interviews. The consequences of the difficulty of testing data analytics have resulted in a consistent non-standardization...",
    "Maybe a theme for all of data science and AI, where the only consistency has been the inconsistency in the interview processes so far...",
];


const UserModuleTopic = () => {
    const [showSummary, setShowSummary] = useState(false);
    const [showMarkAsRead, setShowMarkAsRead] = useState(false);
    const [showDownloadButton, setShowDownloadButton] = useState(true); // State to control "Download Cheat Sheet" button visibility

    const handleSummarizeClick = () => {
        setShowSummary(true); // Show summary section
        setShowMarkAsRead(true); // Show "Mark as Read" button after summary section
        setShowDownloadButton(false); // Hide the "Download Cheat Sheet" button after clicking "Summarize for me"
    };

    return (
        <Container>
            {/* Render topics and buttons */}
            <div>
                {topics.map((topic, index) => (
                    <div key={index}>
                        <Title>{topic.title}</Title>
                        <Text>{topic.description}</Text>
                    </div>
                ))}

                {/* Buttons */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    <div>
                        {showDownloadButton && (
                            <Button
                                style={{
                                    backgroundColor: "transparent",
                                    fontWeight: "bold", 
                                    color: "#2390ac"
                                }}
                            >
                                Download Cheat Sheet (pdf)
                            </Button>
                        )}
                        
                        {/* Show "Summarize for me" button only if summary isn't visible */}
                        {!showSummary && (
                            <Button
                                style={{
                                    border: "2px solid #2390ac",
                                    fontWeight: "bold",
                                    color: "#2390ac",
                                    backgroundColor: "transparent"
                                }}
                                onClick={handleSummarizeClick}
                            >
                                Summarize for me
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Conditionally render the summary section only after clicking the button */}
            {showSummary && (
                <SummaryContainer>
                    <SummaryTitle>
                        Summary
                    </SummaryTitle>
                    {summaryText.map((text, index) => (
                        <SummaryText key={index}>{text}</SummaryText>
                    ))}

                    <ButtonGroup
                     style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        width: "100%",
                        alignContent: "flex-end",

                        gap: "20px"
                     }}
                    >
                      
                       <Button
                            style={{  backgroundColor: "transparent", color:"#2390ac",fontWeight: "bold"   }} >
                            Download Cheat Sheet (pdf)
                        </Button>
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            gap: "20px", marginRight: "20px"
                        }}>
                            <p> <SlLike 
                            style={{
                              paddingRight: "5px"
                            }}
                            />Helpfull</p>
                            <p><SlDislike 
                                style={{
                                   paddingRight: "5px",
                                   paddingTop: "5px"
                                }}/>Not helpful</p>
                        </div>
                       
                    </ButtonGroup>
                </SummaryContainer>
            )}

            {/* Show the "Mark as Read" button only after summary is displayed */}
            {showMarkAsRead && (
                <Button
                    style={{
                        backgroundColor: "#2390ac",
                        color: "white",
                        fontWeight: "bold",
                        // marginTop: "20px"
                        margin:"auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px"
                    }}
                >
                    Mark as completed
                </Button>
            )}
        </Container>
    );
};

export default UserModuleTopic;
