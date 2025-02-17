import React, { useState, useEffect } from 'react';
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
} from "./UserModuleTopic.style";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { getModuleById } from '../../../../../api/addNewModuleApi';
import { useLocation, useParams } from 'react-router-dom';
import { summariseTopic } from '../../../../../api/gptApi';

// Sample Data for Dynamic Rendering
const topics = [
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    }
];

const summaryText = [
    "",
    "",
    "",
];
const courseData1 = {
    title: "",
    topicsList: [
        {
            title: "",
            subtopics: [
                {
                    title: "", time: "", completed: true, subtopicContent: "",
                    subtopicSummary: "",
                    gptSummary: "",
                    cheatSheetURL: ""

                },
                { title: "", time: "", completed: false },
                { title: "", time: "", completed: false },
            ]
        },
        {
            title: "",
            subtopics: []
        },
        {
            title: "",
            subtopics: []
        },
        {
            title: "",
            subtopics: []
        },
        {
            title: "",
            subtopics: []
        },
    ]
};

const UserModuleTopic = () => {
    const [showSummary, setShowSummary] = useState(false);
    const [showMarkAsRead, setShowMarkAsRead] = useState(false);
    const [showDownloadButton, setShowDownloadButton] = useState(true); // State to control "Download Cheat Sheet" button visibility
    const moduleId = useParams().id;
    const location = useLocation();
    const [courseData, setCourseData] = useState(courseData1);
    const [topicData, setTopicData] = useState(null);
    const [gptSummaryText, setGptSummaryText] = useState([]);
    const [delayedText, setDelayedText] = useState([]);
    const [selectedCheetSheetURL, setSelectedCheetSheetURL] = useState("");
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setDelayedText((prevText) => [...prevText, nextWord]);
        }, 35 * index)
    }
    const delayText = () => {
        for (let i = 0; i < gptSummaryText.length; i++) {
            delayPara(i, gptSummaryText[i]);
        }
    }
    useEffect(() => {

        console.log("location Data=>", location.state);
        const apiCaller = async () => {
            try {
                const response = await getModuleById(moduleId);
                console.log("RR", response.data);
                const data = {
                    title: response.data.moduleName,
                    topicsList: await Promise.all(response.data.topicData.map(async (item) => {

                        return ({
                            title: item.topicName,
                            subtopics: await Promise.all(item.subtopicData.map(async (subitem) => {
                                const gptSumm = await summariseTopic({ message: subitem.subtopicContent })
                                console.log(gptSumm.data);
                                console.log("gpt ", subitem.subtopicName)
                                return (
                                    {
                                        title: subitem.subtopicName,
                                        completed: subitem.completed,
                                        subtopicContent: subitem.subtopicContent,
                                        subtopicSummary: subitem.subtopicSummary,
                                        gptSummary: gptSumm.data,
                                        cheatSheetURL: subitem.cheatSheetURL || "#"

                                    }
                                )

                            }))
                        })
                    }))


                };
                setCourseData(data);
            } catch (error) {
                console.log(error);
            }
        };
        apiCaller();
    }, []);
    // useEffect(() => {
    //     console.log("location Data=> 111", location.state);
    //     console.log("courseData", courseData);
    //     setDelayedText([]);
    //     setShowSummary(false);
    //     courseData.topicsList?.map((item, index) => {
    //         item.subtopics?.map((topic, subindex) => {
    //             if (index === location.state.topicIndex && subindex === location.state.subtopicIndex) {
    //                 console.log("dfghj",)
    //                 console.log(location.state.topicIndex, "   ", location.state.subtopicIndex);
    //                 setTopicData([{
    //                     title: topic.title,
    //                     description: topic.subtopicContent,
    //                     summary: topic.subtopicSummary,
    //                     gptSummary: topic.gptSummary,
    //                     cheatSheetURL: topic.cheatSheetURL || ""
    //                 }])
    //                 setSelectedCheetSheetURL(topic.cheatSheetURL || "");
    //                 setGptSummaryText(topic.gptSummary);
    //                 console.log("dfghj", {
    //                     title: topic.title,
    //                     description: topic.subtopicContent,
    //                     summary: topic.subtopicSummary,
    //                     gptSummary: topic.gptSummary,
    //                     cheatSheetURL: topic.cheatSheetURL || ""
    //                 })
    //             }
    //         })
    //     })

    // }, [location.state]);
    useEffect(() => {
            setDelayedText([]);
        setShowSummary(false);
        console.log("location Data=>", location.state);
        if (!location.state) return; // Ensure location.state is defined

        const apiCaller = async () => {
            try {
                // Make sure you're calling the API correctly and checking the response
                const response = await getModuleById(moduleId);
                console.log("", response.data);

                // Ensure the response is valid before setting the state
                const data = {
                    title: response.data.moduleName,
                    topicsList: await Promise.all(response.data.topicData.map(async (item) => {
                        return {
                            title: item.topicName,
                            subtopics: await Promise.all(item.subtopicData.map(async (subitem) => {
                                const gptSumm = await summariseTopic({ message: subitem.subtopicContent });
                                console.log(subitem.subtopicName, " ", gptSumm.data, " ",);
                                return {
                                    title: subitem.subtopicName,
                                    // completed: subitem.completed,
                                    subtopicContent: subitem.subtopicContent,
                                    subtopicSummary: subitem.subtopicSummary,
                                    gptSummary: gptSumm.data,
                                    cheatSheetURL: subitem.cheatSheetURL || "#"
                                };
                            }))
                        };
                    }))
                };

                // Now, after setting courseData, use location.state to update topicData
                const topic = data.topicsList?.[location.state.topicIndex]?.subtopics?.[location.state.subtopicIndex];
                console.log("subtoipi ", topic);
                if (topic) {
                    setSelectedCheetSheetURL(topic.cheatSheetURL || "#");
                    console.log("title", topic.title);

                    console.log("dfghj sjhbsjbh",{
                        title: topic.title,
                        description: topic.subtopicContent,
                        summary: topic.subtopicSummary,
                        gptSummary: topic.gptSummary,
                        cheatSheetURL: topic.cheatSheetURL || "#"
                    })
                    setTopicData([{
                        title: topic.title,
                        description: topic.subtopicContent,
                        summary: topic.subtopicSummary,
                        gptSummary: topic.gptSummary,
                        cheatSheetURL: topic.cheatSheetURL || "#" 
                    }]);
                    setSelectedCheetSheetURL(topic.cheatSheetURL || "#");
                    setGptSummaryText(topic.gptSummary);
                }
            } catch (error) {
                console.error("Error fetching module data", error);
            }
        };

        apiCaller();
    }, [location.state]);  // Add location.state as a dependency to ensure it runs when state changes


    const handleSummarizeClick = () => {
        setShowSummary(true); // Show summary section
        delayText();
        setShowMarkAsRead(true); // Show "Mark as Read" button after summary section
        setShowDownloadButton(false); // Hide the "Download Cheat Sheet" button after clicking "Summarize for me"
    };

    return (
        <Container>
            {/* Render topics and buttons */}
            <div>
                {console.log("topicData inner", topicData)}
                {topicData &&
                    <>
                        {topicData?.map((topic, index) => (
                            <div key={index}>
                                <Title>{topic.title}</Title>

                                <Text
                                    dangerouslySetInnerHTML={{
                                        __html: parseJSONContent(topic.description),
                                    }}
                                >
                                </Text>
                            </div>
                        ))}
                    </>
                }


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
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <a
                                    style={{
                                        backgroundColor: "transparent",
                                        fontWeight: "bold",
                                        color: "#2390ac",
                                        textDecoration: "none"
                                    }}
                                    target='_blank'
                                    download={"cheatSheet.pdf"}
                                    href={selectedCheetSheetURL}
                                >
                                    Download Cheat Sheet (pdf)
                                </a>
                            </div>
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

                    <SummaryText>

                        {
                            delayedText
                        }

                    </SummaryText>

                    {/* {summaryText.map((text, index) => (
                        <SummaryText key={index}
                            dangerouslySetInnerHTML={{
                                __html: parseJSONContent(topicData[0].summary),
                            }}
                        ></SummaryText>
                    ))} */}

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
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


                            <a
                                style={{ backgroundColor: "transparent", color: "#2390ac", fontWeight: "bold", textDecoration: "none", }}
                                href={selectedCheetSheetURL}
                                target='_blank'
                                download={"cheatSheet.pdf"}
                                
                            >

                                Download Cheat Sheet (pdf)
                            </a>
                        </div>
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
                                }} />Not helpful</p>
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
                        margin: "auto",
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

const parseJSONContent = (content) => {
    try {
        const parsedContent = JSON.parse(content);
        return parsedContent; // Return parsed content if it's valid JSON
    } catch (error) {
        console.error("Error parsing JSON content:", error);
        return content; // Return original content if parsing fails
    }
};
export default UserModuleTopic;
