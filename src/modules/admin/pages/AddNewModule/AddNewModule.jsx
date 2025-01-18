import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import {
    AddContainer,
    Heading,
    SectionHeader,
    SectionTitle,
    SubText,
    UploadManually,
    Label,
    TextInput,
    TextArea,
    UploadButton,
    CheckboxContainer,
    ConceptClarifierContainer,
    ClarifierHeading,
    ButtonRow,
    ActionButton,
    PaginationContainer,
    PaginationItem,
    FormGroup,
    ModalContainer,
    ModalContent,
    ModalButton,
} from "./AddNewModule.style"; // Adjust path to your style file
import theme from "../../../../theme/Theme";
import DeleteModule from "../../../admin/components/DeleteModule/DeleteModule"; // Import the DeleteModule component

const AddNewModule = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteType, setDeleteType] = useState(null); // 'topic' or 'subtopic'
    const [deleteIndices, setDeleteIndices] = useState({ topicIndex: null, subIndex: null });
    const [topics, setTopics] = useState([
        {
            topicName: "",
            skillAssessmentFile: null,
            subtopics: [
                {
                    subtopicName: "",
                    subtopicContent: "",
                    subtopicSummary: "",
                    quickRevisePoints: "",
                    cheatSheet: null,
                    isInterviewFavorite: false,
                    conceptClarifier: {
                        clarifierWordOrPhrase: "",
                        explanationOnHover: "",
                        moreExplanation: "",
                    },
                    questionBankFile: null,
                    tryItYourselfFile: null,
                },
            ],
        },
    ]);

    // Refs for Skill Assessment Upload Inputs
    const skillAssessmentRefs = useRef([]);

    // Refs for Question Bank Upload Inputs
    const questionBankRefs = useRef([]);

    // Refs for Try It Yourself Upload Inputs
    const tryItYourselfRefs = useRef([]);

    // Add new Topic
    const handleAddTopic = () => {
        setTopics((prevTopics) => [
            ...prevTopics,
            {
                topicName: "",
                skillAssessmentFile: null,
                subtopics: [
                    {
                        subtopicName: "",
                        subtopicContent: "",
                        subtopicSummary: "",
                        quickRevisePoints: "",
                        cheatSheet: null,
                        isInterviewFavorite: false,
                        conceptClarifier: {
                            clarifierWordOrPhrase: "",
                            explanationOnHover: "",
                            moreExplanation: "",
                        },
                        questionBankFile: null,
                        tryItYourselfFile: null,
                    },
                ],
            },
        ]);
    };

    // Add new Subtopic to a particular Topic
    const handleAddSubtopic = (topicIndex) => {
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics.push({
                subtopicName: "",
                subtopicContent: "",
                subtopicSummary: "",
                quickRevisePoints: "",
                cheatSheet: null,
                isInterviewFavorite: false,
                conceptClarifier: {
                    clarifierWordOrPhrase: "",
                    explanationOnHover: "",
                    moreExplanation: "",
                },
                questionBankFile: null,
                tryItYourselfFile: null,
            });
            return updated;
        });
    };

    // Handle changes for Topic (topicName, etc.)
    const handleTopicChange = (e, topicIndex, field) => {
        const { value } = e.target;
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex][field] = value;
            return updated;
        });
    };

    // Handle Subtopic input changes
    const handleSubtopicChange = (e, topicIndex, subIndex, field) => {
        const { value } = e.target;
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex][field] = value;
            return updated;
        });
    };

    // Handle checkbox for "Interview favorite"
    const handleCheckChange = (e, topicIndex, subIndex) => {
        const { checked } = e.target;
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex].isInterviewFavorite = checked;
            return updated;
        });
    };

    // Handle concept clarifier changes
    const handleConceptClarifierChange = (
        e,
        topicIndex,
        subIndex,
        clarifierField
    ) => {
        const { value } = e.target;
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex].conceptClarifier[clarifierField] =
                value;
            return updated;
        });
    };

    // Handle Cheat Sheet upload
    const handleCheatSheetUpload = (e, topicIndex, subIndex) => {
        const file = e.target.files[0]; // Get the uploaded file
        if (file) {
            const previewURL = URL.createObjectURL(file); // Generate preview URL for the video
            setTopics((prevTopics) => {
                const updated = [...prevTopics];
                updated[topicIndex].subtopics[subIndex].cheatSheet = {
                    file, // Save the file
                    previewURL, // Save the preview URL
                };
                return updated;
            });
        }
    };

    // Remove Cheat Sheet
    const handleRemoveCheatSheet = (topicIndex, subIndex) => {
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex].cheatSheet = null; // Remove the video
            return updated;
        });
    };

    // Handle Skill Assessment File Upload
    const handleSkillAssessmentUpload = (e, topicIndex) => {
        const file = e.target.files[0];
        if (file) {
            setTopics((prevTopics) => {
                const updated = [...prevTopics];
                updated[topicIndex].skillAssessmentFile = file;
                return updated;
            });
        }
    };

    // Handle Question Bank File Upload
    const handleQuestionBankUpload = (e, topicIndex, subIndex) => {
        const file = e.target.files[0];
        if (file) {
            setTopics((prevTopics) => {
                const updated = [...prevTopics];
                updated[topicIndex].subtopics[subIndex].questionBankFile = file;
                return updated;
            });
        }
    };

    // Handle Try It Yourself File Upload
    const handleTryItYourselfUpload = (e, topicIndex, subIndex) => {
        const file = e.target.files[0];
        if (file) {
            setTopics((prevTopics) => {
                const updated = [...prevTopics];
                updated[topicIndex].subtopics[subIndex].tryItYourselfFile = file;
                return updated;
            });
        }
    };

    // Handle removal of Skill Assessment File
    const handleRemoveSkillAssessment = (topicIndex) => {
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].skillAssessmentFile = null;
            return updated;
        });
    };

    // Handle removal of Question Bank File
    const handleRemoveQuestionBank = (topicIndex, subIndex) => {
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex].questionBankFile = null;
            return updated;
        });
    };

    // Handle removal of Try It Yourself File
    const handleRemoveTryItYourself = (topicIndex, subIndex) => {
        setTopics((prevTopics) => {
            const updated = [...prevTopics];
            updated[topicIndex].subtopics[subIndex].tryItYourselfFile = null;
            return updated;
        });
    };

    // Placeholder for a final "Done" action
    const handleDone = () => {
        console.log("All topics data:", topics);
        // Reset form
        setTopics([
            {
                topicName: "",
                skillAssessmentFile: null,
                subtopics: [
                    {
                        subtopicName: "",
                        subtopicContent: "",
                        subtopicSummary: "",
                        quickRevisePoints: "",
                        cheatSheet: null,
                        isInterviewFavorite: false,
                        conceptClarifier: {
                            clarifierWordOrPhrase: "",
                            explanationOnHover: "",
                            moreExplanation: "",
                        },
                        questionBankFile: null,
                        tryItYourselfFile: null,
                    },
                ],
            },
        ]);
        setModalVisible(true); // Show modal when Done is clicked
    };

    // Open Delete Modal
    const openDeleteModal = (type, topicIndex, subIndex = null) => {
        setDeleteType(type);
        setDeleteIndices({ topicIndex, subIndex });
        setModalVisible(true);
    };

    // Handle Delete Confirmation
    const handleDeleteConfirm = () => {
        const { topicIndex, subIndex } = deleteIndices;
        if (deleteType === "topic") {
            setTopics((prevTopics) => prevTopics.filter((_, idx) => idx !== topicIndex));
        } else if (deleteType === "subtopic") {
            setTopics((prevTopics) => {
                const updated = [...prevTopics];
                updated[topicIndex].subtopics = updated[topicIndex].subtopics.filter(
                    (_, idx) => idx !== subIndex
                );
                return updated;
            });
        }
        closeModal();
    };

    // Close Modal
    const closeModal = () => {
        setModalVisible(false);
        setDeleteType(null);
        setDeleteIndices({ topicIndex: null, subIndex: null });
    };

    return (
        <AddContainer>
            {topics.map((topic, topicIndex) => (
                <div key={topicIndex}>
                    <Heading>Add Topic {topicIndex + 1} and Subtopics</Heading>

                    <FormGroup>
                        <Label htmlFor={`topicName-${topicIndex}`}>
                            Topic {topicIndex + 1} Name
                        </Label>
                        <TextInput
                            id={`topicName-${topicIndex}`}
                            value={topic.topicName}
                            onChange={(e) => handleTopicChange(e, topicIndex, "topicName")}
                        />
                    </FormGroup>

                    {/* Skill Assessment Section */}
                    <SectionHeader>
                        <div>
                            <SectionTitle style={{ textAlign: "left" }}>
                                Skill Assessment Questions for the Entire Topic
                            </SectionTitle>
                            <SubText>
                                By default, questions will be chosen from the question bank. If you wish to upload a file, upload here.
                            </SubText>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <UploadManually
                                style={{ marginRight: "0px", cursor: "pointer" }}
                                onClick={() => {
                                    if (skillAssessmentRefs.current[topicIndex]) {
                                        skillAssessmentRefs.current[topicIndex].click();
                                    }
                                }}
                            >
                                <FiUpload style={{ paddingRight: "5px" }} />
                                Upload manually
                            </UploadManually>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                style={{ display: "none" }}
                                ref={(el) => (skillAssessmentRefs.current[topicIndex] = el)}
                                onChange={(e) => handleSkillAssessmentUpload(e, topicIndex)}
                            />
                            {topic.skillAssessmentFile && (
                                <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                                    <strong>Uploaded File:</strong> {topic.skillAssessmentFile.name}
                                    <ActionButton
                                        variant="danger"
                                        onClick={() => handleRemoveSkillAssessment(topicIndex)}
                                        style={{ marginLeft: "10px",

                                        color: theme.colors.secondary,
                                        border:"none",
                                        backgroundColor:"transparent",
                                        }}
                                    >
                                        Remove file
                                    </ActionButton>
                                </div>
                            )}
                        </div>
                    </SectionHeader>

                    {topic.subtopics.map((subtopic, subIndex) => (
                        <div
                            key={subIndex}
                            style={{
                                border: `1px solid ${theme.colors.textgray}`,
                                padding: theme.spacing(1),
                                borderRadius: theme.spacing(1),
                                marginBottom: theme.spacing(3),
                            }}
                        >
                            <SectionTitle>Subtopic {subIndex + 1}</SectionTitle>

                            <FormGroup>
                                <Label htmlFor={`subtopicName-${topicIndex}-${subIndex}`}>
                                    Subtopic {subIndex + 1} Name
                                </Label>
                                <TextInput
                                    id={`subtopicName-${topicIndex}-${subIndex}`}
                                    value={subtopic.subtopicName}
                                    onChange={(e) =>
                                        handleSubtopicChange(e, topicIndex, subIndex, "subtopicName")
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor={`subtopicContent-${topicIndex}-${subIndex}`}>
                                    Subtopic {subIndex + 1} Content
                                </Label>
                                <TextArea
                                    id={`subtopicContent-${topicIndex}-${subIndex}`}
                                    rows="6"
                                    value={subtopic.subtopicContent}
                                    onChange={(e) =>
                                        handleSubtopicChange(
                                            e,
                                            topicIndex,
                                            subIndex,
                                            "subtopicContent"
                                        )
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor={`subtopicSummary-${topicIndex}-${subIndex}`}>
                                    Subtopic {subIndex + 1} Summary
                                </Label>
                                <TextArea
                                    id={`subtopicSummary-${topicIndex}-${subIndex}`}
                                    rows="4"
                                    value={subtopic.subtopicSummary}
                                    onChange={(e) =>
                                        handleSubtopicChange(
                                            e,
                                            topicIndex,
                                            subIndex,
                                            "subtopicSummary"
                                        )
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor={`quickRevisePoints-${topicIndex}-${subIndex}`}>
                                    Quickly Revise Points
                                </Label>
                                <TextArea
                                    id={`quickRevisePoints-${topicIndex}-${subIndex}`}
                                    rows="4"
                                    value={subtopic.quickRevisePoints}
                                    onChange={(e) =>
                                        handleSubtopicChange(
                                            e,
                                            topicIndex,
                                            subIndex,
                                            "quickRevisePoints"
                                        )
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Cheat Sheet (Video)</Label>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    {!subtopic.cheatSheet?.previewURL ? (
                                        <>
                                            <UploadButton>
                                                <FiUpload />
                                                <label
                                                    htmlFor={`cheatSheet-${topicIndex}-${subIndex}`}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Upload Video
                                                </label>
                                            </UploadButton>
                                            <input
                                                type="file"
                                                id={`cheatSheet-${topicIndex}-${subIndex}`}
                                                accept="video/*"
                                                style={{ display: "none" }}
                                                onChange={(e) =>
                                                    handleCheatSheetUpload(e, topicIndex, subIndex)
                                                }
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <video
                                                width="200px"
                                                height="150px"
                                                controls
                                                style={{
                                                    marginTop: "10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                }}
                                            >
                                                <source
                                                    src={subtopic.cheatSheet.previewURL}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                            <ButtonRow>
                                                <ActionButton
                                                    variant="danger"
                                                    onClick={() =>
                                                        handleRemoveCheatSheet(topicIndex, subIndex)
                                                    }
                                                    style={{
                                                        border: "none",
                                                        color: `${theme.colors.secondary}`,
                                                    }}
                                                >
                                                    Remove Video
                                                </ActionButton>
                                            </ButtonRow>
                                        </>
                                    )}
                                </div>
                            </FormGroup>

                            <CheckboxContainer>
                                <input
                                    type="checkbox"
                                    id={`favoriteSubtopic-${topicIndex}-${subIndex}`}
                                    checked={subtopic.isInterviewFavorite}
                                    onChange={(e) => handleCheckChange(e, topicIndex, subIndex)}
                                />
                                <label htmlFor={`favoriteSubtopic-${topicIndex}-${subIndex}`}>
                                    Mark this subtopic as Interview Favorite
                                </label>
                            </CheckboxContainer>

                            <ConceptClarifierContainer>
                                <ClarifierHeading>Concept Clarifier</ClarifierHeading>

                                <FormGroup>
                                    <Label
                                        htmlFor={`clarifierWordOrPhrase-${topicIndex}-${subIndex}`}
                                    >
                                        Concept Clarifier (Enter a Word or Phrase)
                                    </Label>
                                    <TextInput
                                        id={`clarifierWordOrPhrase-${topicIndex}-${subIndex}`}
                                        value={subtopic.conceptClarifier.clarifierWordOrPhrase}
                                        onChange={(e) =>
                                            handleConceptClarifierChange(
                                                e,
                                                topicIndex,
                                                subIndex,
                                                "clarifierWordOrPhrase"
                                            )
                                        }
                                        style={{ backgroundColor: theme.colors.backgray }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label
                                        htmlFor={`explanationOnHover-${topicIndex}-${subIndex}`}
                                    >
                                        Explanation on Hover
                                    </Label>
                                    <TextInput
                                        id={`explanationOnHover-${topicIndex}-${subIndex}`}
                                        value={subtopic.conceptClarifier.explanationOnHover}
                                        onChange={(e) =>
                                            handleConceptClarifierChange(
                                                e,
                                                topicIndex,
                                                subIndex,
                                                "explanationOnHover"
                                            )
                                        }
                                        style={{ backgroundColor: theme.colors.backgray }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor={`moreExplanation-${topicIndex}-${subIndex}`}>
                                        More Explanation on Popup
                                    </Label>
                                    <TextArea
                                        id={`moreExplanation-${topicIndex}-${subIndex}`}
                                        rows="3"
                                        value={subtopic.conceptClarifier.moreExplanation}
                                        onChange={(e) =>
                                            handleConceptClarifierChange(
                                                e,
                                                topicIndex,
                                                subIndex,
                                                "moreExplanation"
                                            )
                                        }
                                        style={{ backgroundColor: theme.colors.backgray }}
                                    />
                                </FormGroup>
                            </ConceptClarifierContainer>

                            {/* Question Bank Upload Section */}
                            <SectionHeader>
                                <div>
                                    <SectionTitle>Question Bank</SectionTitle>
                                    {subtopic.questionBankFile && (
                                        <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                                            <strong>Uploaded File:</strong> {subtopic.questionBankFile.name}
                                            <ActionButton
                                                variant="danger"
                                                onClick={() => handleRemoveQuestionBank(topicIndex, subIndex)}
                                                style={{ marginLeft: "10px",
                                                    color: theme.colors.secondary,
                                                    border:"none",
                                                    backgroundColor:"transparent",
                                                 }}
                                            >
                                                Remove file
                                            </ActionButton>
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <UploadManually
                                        style={{
                                            marginTop: "0px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            if (
                                                questionBankRefs.current[topicIndex] &&
                                                questionBankRefs.current[topicIndex][subIndex]
                                            ) {
                                                questionBankRefs.current[topicIndex][subIndex].click();
                                            }
                                        }}
                                    >
                                        <FiUpload style={{ paddingRight: "5px" }} />
                                        Upload manually
                                    </UploadManually>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        style={{ display: "none" }}
                                        ref={(el) => {
                                            if (!questionBankRefs.current[topicIndex]) {
                                                questionBankRefs.current[topicIndex] = [];
                                            }
                                            questionBankRefs.current[topicIndex][subIndex] = el;
                                        }}
                                        onChange={(e) =>
                                            handleQuestionBankUpload(e, topicIndex, subIndex)
                                        }
                                    />
                                </div>
                            </SectionHeader>

                            {/* Try It Yourself Upload Section */}
                            <SectionHeader>
                                <div>
                                    <SectionTitle>Try It Yourself Questions</SectionTitle>
                                    <SubText>
                                        By default, questions will be chosen from the question bank. If you wish to upload a file, upload here.
                                    </SubText>
                                    {subtopic.tryItYourselfFile && (
                                        <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                                            <strong>Uploaded File:</strong> {subtopic.tryItYourselfFile.name}
                                            <ActionButton
                                                variant="danger"
                                                onClick={() => handleRemoveTryItYourself(topicIndex, subIndex)}
                                                style={{ marginLeft: "10px",
                                                    color: theme.colors.secondary,
                                                    border:"none",
                                                    backgroundColor:"transparent",
                                                 }}
                                            >
                                                Remove file
                                            </ActionButton>
                                        </div>
                                    )}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <UploadManually
                                        style={{
                                            marginTop: "0px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            if (
                                                tryItYourselfRefs.current[topicIndex] &&
                                                tryItYourselfRefs.current[topicIndex][subIndex]
                                            ) {
                                                tryItYourselfRefs.current[topicIndex][subIndex].click();
                                            }
                                        }}
                                    >
                                        <FiUpload style={{ paddingRight: "5px" }} />
                                        Upload manually
                                    </UploadManually>
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        style={{ display: "none" }}
                                        ref={(el) => {
                                            if (!tryItYourselfRefs.current[topicIndex]) {
                                                tryItYourselfRefs.current[topicIndex] = [];
                                            }
                                            tryItYourselfRefs.current[topicIndex][subIndex] = el;
                                        }}
                                        onChange={(e) =>
                                            handleTryItYourselfUpload(e, topicIndex, subIndex)
                                        }
                                    />
                                </div>
                            </SectionHeader>

                            <ButtonRow>
                                <ActionButton
                                    variant="danger"
                                    onClick={() => openDeleteModal("subtopic", topicIndex, subIndex)}
                                >
                                    Delete Subtopic
                                </ActionButton>
                            </ButtonRow>
                        </div>
                    ))}

                    <ButtonRow>
                        <ActionButton
                            variant="danger"
                            onClick={() => openDeleteModal("topic", topicIndex)}
                        >
                            Delete Topic
                        </ActionButton>
                    </ButtonRow>

                    <ButtonRow>
                        <ActionButton
                            style={{ border: "none" }}
                            onClick={() => handleAddSubtopic(topicIndex)}
                        >
                            + Add Subtopic
                        </ActionButton>
                    </ButtonRow>
                </div>
            ))}

            <ButtonRow>
                <ActionButton onClick={handleAddTopic}>+ Add Topic</ActionButton>
                <ActionButton
                    variant="primary"
                    style={{ width: "100px" }}
                    onClick={handleDone}
                >
                    Done
                </ActionButton>
            </ButtonRow>

            <PaginationContainer>
                <Link to="/admin/uploadmodule">
                    <ActionButton>Previous</ActionButton>
                </Link>
                <PaginationItem>1</PaginationItem>
                <PaginationItem>2</PaginationItem>
                <ActionButton>Next</ActionButton>
            </PaginationContainer>

            {/* Delete Confirmation Modal */}
            {modalVisible && deleteType && (
                <DeleteModule
                    onDelete={handleDeleteConfirm}
                    onCancel={closeModal}
                    message={
                        deleteType === "topic"
                            ? "Are you sure you want to delete this entire topic?"
                            : "Are you sure you want to delete this subtopic?"
                    }
                />
            )}

            {/* Success Modal */}
            {modalVisible && deleteType === null && (
                <ModalContainer>
                    <ModalContent>
                        <h2>Success</h2>
                        <p>Topics and subtopics added successfully!</p>
                        <ModalButton onClick={closeModal}>Close</ModalButton>
                    </ModalContent>
                </ModalContainer>
            )}
        </AddContainer>
    );
};

export default AddNewModule;
