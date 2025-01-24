import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";
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
  FormGroup,
  ModalContainer,
  ModalContent,
  ModalButton,
} from "./AddNewModule.style";
import theme from "../../../../theme/Theme";
import DeleteModule from "../../../admin/components/DeleteModule/DeleteModule";
import {
  uploadFileToFirebase,
  uploadVideoToFirebase,
} from "../../../../utils/uploadFileToFirebase";
import { addNewModule } from "../../../../api/addNewModuleApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {ClassicEditor} from "ckeditor5";
import { editorConfig } from "../../../../config/ckEditorConfig";

// Styled icon/button if you want to show a delete icon
const DeleteIconWrapper = styled.span`
  margin-left: 8px;
  cursor: pointer;
  color: ${theme.colors.secondary};

  &:hover {
    color: red;
  }
`;

const AddNewModule = () => {
  // ----------------------------- STATES -----------------------------
  const [modalVisible, setModalVisible] = useState(false);

  // 'topic', 'subtopic', 'layman', or 'clarifier'
  const [deleteType, setDeleteType] = useState(null);
  const location = useLocation();
  const videoInputRef = useRef(null);

  // Store indices for whichever item we are deleting
  const [deleteIndices, setDeleteIndices] = useState({
    topicIndex: null,
    subIndex: null,
    laymanIndex: null,
    clarifierIndex: null,
  });

  // initial data structure to hold everything
  const [topics, setTopics] = useState([
    {
      topicName: "",
      skillAssessmentFile: null,
      skillAssessmentFileUrl: null,
      subtopics: [
        {
          subtopicName: "",
          subtopicContent: "",
          subtopicSummary: "",
          quickRevisePoints: "",
          cheatSheet: null,
          isInterviewFavorite: false,
          conceptClarifiers: [
            {
              clarifierWordOrPhrase: "",
              explanationOnHover: "",
              moreExplanation: "",
            },
          ],
          // -----------------------------------------------------------------
          // ADD the laymanScale field to our initial layman object (default scale=1)
          // -----------------------------------------------------------------
          laymanExplanations: [
            {
              laymanScale: 1,
              laymanTitle: "",
              laymanInfo: "",
            },
          ],
          questionBankFile: null,
          questionBankFileUrl: null,
          tryItYourselfFile: null,
          tryItYourselfFileUrl: null,
        },
      ],
    },
  ]);

  // ----------------------------- REF FOR FILE UPLOADS -----------------------------
  const skillAssessmentRefs = useRef([]);
  const questionBankRefs = useRef([]);
  const tryItYourselfRefs = useRef([]);

  // ----------------------------- TOPIC/SUBTOPIC ADD -----------------------------
  const handleAddTopic = () => {
    setTopics((prevTopics) => [
      ...prevTopics,
      {
        topicName: "",
        skillAssessmentFile: null,
        skillAssessmentFileUrl: null,
        subtopics: [
          {
            subtopicName: "",
            subtopicContent: "",
            subtopicSummary: "",
            quickRevisePoints: "",
            cheatSheet: null,
            isInterviewFavorite: false,
            conceptClarifiers: [
              {
                clarifierWordOrPhrase: "",
                explanationOnHover: "",
                moreExplanation: "",
              },
            ],
            laymanExplanations: [
              {
                laymanScale: 1,
                laymanTitle: "",
                laymanInfo: "",
              },
            ],
            questionBankFile: null,
            questionBankFileUrl: null,
            tryItYourselfFile: null,
            tryItYourselfFileUrl: null,
          },
        ],
      },
    ]);
  };

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
        conceptClarifiers: [
          {
            clarifierWordOrPhrase: "",
            explanationOnHover: "",
            moreExplanation: "",
          },
        ],
        laymanExplanations: [
          {
            laymanScale: 1,
            laymanTitle: "",
            laymanInfo: "",
          },
        ],
        questionBankFile: null,
        questionBankFileUrl: null,
        tryItYourselfFile: null,
        tryItYourselfFileUrl: null,
      });
      return updated;
    });
  };

  // ----------------------------- LAYMAN SECTION -----------------------------
  // 1. Add new Layman Explanation
  const handleAddLaymanExplanation = (topicIndex, subIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      const laymans = updated[topicIndex].subtopics[subIndex].laymanExplanations;

      // -----------------------------------------------------------------
      // Enforce a limit of 5 Layman items
      // -----------------------------------------------------------------
      if (laymans.length >= 5) {
        alert("You can only add up to 5 layman explanations (scales).");
        return updated;
      }

      // The new scale is the next number
      const newScale = laymans.length + 1;

      laymans.push({
        laymanScale: newScale,
        laymanTitle: "",
        laymanInfo: "",
      });

      return updated;
    });
  };

  // 2. Handle changes in Layman Explanation fields
  const handleLaymanExplanationChange = (
    e,
    event,
    topicIndex,
    subIndex,
    laymanIndex,
    field
  ) => {
    let value;
    if (e != null) {
      value = e.target.value;
    } else {
      value = event.getData();
    }

    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].laymanExplanations[laymanIndex][
        field
      ] = value;
      return updated;
    });
  };

  // ----------------------------- CONCEPT CLARIFIER -----------------------------
  const handleAddConceptClarifier = (topicIndex, subIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].conceptClarifiers.push({
        clarifierWordOrPhrase: "",
        explanationOnHover: "",
        moreExplanation: "",
      });
      return updated;
    });
  };

  const handleConceptClarifierChange = (
    e,
    editor,
    topicIndex,
    subIndex,
    clarifierIndex,
    clarifierField
  ) => {
    let value;
    if (e != null) {
      value = e.target.value;
    } else {
      value = editor.getData();
    }

    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].conceptClarifiers[clarifierIndex][
        clarifierField
      ] = value;
      return updated;
    });
  };

  // ----------------------------- INPUT CHANGE HANDLERS -----------------------------
  const handleTopicChange = (e, topicIndex, field) => {
    const { value } = e.target;
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex][field] = value;
      return updated;
    });
  };

  const handleSubtopicChange = (e, event, topicIndex, subIndex, field) => {
    let value;
    if (e != null) {
      value = e.target.value;
    } else {
      value = event.getData();
    }
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex][field] = value;
      return updated;
    });
  };

  const handleCheckChange = (e, topicIndex, subIndex) => {
    const { checked } = e.target;
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].isInterviewFavorite = checked;
      return updated;
    });
  };

  // ----------------------------- FILE UPLOAD HANDLERS -----------------------------
  const handleCheatSheetUpload = async (e, topicIndex, subIndex) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      const dataUrl = await uploadVideoToFirebase(file, "cheatSheet");
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics[subIndex].cheatSheet = {
          file,
          previewURL,
          dataUrl,
        };
        return updated;
      });
    }
  };

  const handleRemoveCheatSheet = (topicIndex, subIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].cheatSheet = null;
      return updated;
    });
  };

  const handleSkillAssessmentUpload = async (e, topicIndex) => {
    const file = e.target.files[0];
    if (file) {
      const dataUrl = await uploadFileToFirebase(file, "skillAssessment");
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].skillAssessmentFile = file;
        updated[topicIndex].skillAssessmentFileUrl = dataUrl;
        return updated;
      });
    }
  };

  const handleRemoveSkillAssessment = (topicIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].skillAssessmentFile = null;
      updated[topicIndex].skillAssessmentFileUrl = null;
      return updated;
    });
  };

  const handleQuestionBankUpload = async (e, topicIndex, subIndex) => {
    const file = e.target.files[0];
    if (file) {
      const dataUrl = await uploadFileToFirebase(file, "questionBank");
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics[subIndex].questionBankFile = file;
        updated[topicIndex].subtopics[subIndex].questionBankFileUrl = dataUrl;
        return updated;
      });
    }
  };

  const handleRemoveQuestionBank = (topicIndex, subIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].questionBankFile = null;
      updated[topicIndex].subtopics[subIndex].questionBankFileUrl = null;
      return updated;
    });
  };

  const handleTryItYourselfUpload = async (e, topicIndex, subIndex) => {
    const file = e.target.files[0];
    if (file) {
      const dataUrl = await uploadFileToFirebase(file, "tryItYourself");
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics[subIndex].tryItYourselfFile = file;
        updated[topicIndex].subtopics[subIndex].tryItYourselfFileUrl = dataUrl;
        return updated;
      });
    }
  };

  const handleRemoveTryItYourself = async (topicIndex, subIndex) => {
    setTopics((prevTopics) => {
      const updated = [...prevTopics];
      updated[topicIndex].subtopics[subIndex].tryItYourselfFile = null;
      updated[topicIndex].subtopics[subIndex].tryItYourselfFileUrl = null;
      return updated;
    });
  };

  // ----------------------------- DONE BUTTON -----------------------------
  const handleDone = async () => {
    // -----------------------------------------------------------------
    // Ensure each subtopic has 5 layman explanations
    // -----------------------------------------------------------------
    for (let tIndex = 0; tIndex < topics.length; tIndex++) {
      for (
        let sIndex = 0;
        sIndex < topics[tIndex].subtopics.length;
        sIndex++
      ) {
        const laymanCount =
          topics[tIndex].subtopics[sIndex].laymanExplanations.length;
        if (laymanCount < 5) {
          alert(
            `Subtopic ${
              sIndex + 1
            } of Topic ${tIndex + 1} must have 5 layman explanations. Currently: ${laymanCount}`
          );
          return;
        }
      }
    }

    console.log("All topics data:", topics);

    const topicData = topics.map((topic) => {
      return {
        topicName: topic.topicName,
        skillAssessmentQuestionsURL: topic.skillAssessmentFileUrl,
        subtopicData: topic.subtopics.map((sub) => {
          return {
            subtopicName: sub.subtopicName,
            subtopicContent: sub.subtopicContent,
            subtopicSummary: sub.subtopicSummary,
            revisionPoints: sub.quickRevisePoints,
            cheatSheetURL: sub.cheatSheet?.dataUrl,
            interviewFavorite: sub.isInterviewFavorite,
            conceptClarifier: sub.conceptClarifiers.map((concept) => {
              return {
                conceptClarifier: concept.clarifierWordOrPhrase,
                hoverExplanation: concept.explanationOnHover,
                popupExplanation: concept.moreExplanation,
              };
            }),
            laymanTerms: sub.laymanExplanations.map((laymn) => {
              return {
                // -----------------------------------------------------------------
                // Include the laymanScale in final submission
                // -----------------------------------------------------------------
                scale: laymn.laymanScale,
                topicTitle: laymn.laymanTitle,
                topicInfo: laymn.laymanInfo,
              };
            }),
            questionBankURL: sub.questionBankFileUrl,
            tiyQuestionsURL: sub.tryItYourselfFileUrl,
          };
        }),
      };
    });

    // Prepare final submission payload
    const submissionData = {
      imageURL: location.state.data.imageURL,
      moduleName: location.state.data.moduleName,
      description: location.state.data.description,
      approxTimeTaken: location.state.data.approxTimeTaken,
      interviewSampleURL: location.state.data.interviewSampleURL,
      courseOverview: location.state.data.courseOverview,
      userLearntData: location.state.data.userLearntData,
      topicData: topicData,
    };

    console.log("sub", submissionData);
    const response = await addNewModule(submissionData);

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
            conceptClarifiers: [
              {
                clarifierWordOrPhrase: "",
                explanationOnHover: "",
                moreExplanation: "",
              },
            ],
            // Start again with 1 layman explanation
            laymanExplanations: [
              {
                laymanScale: 1,
                laymanTitle: "",
                laymanInfo: "",
              },
            ],
            questionBankFile: null,
            tryItYourselfFile: null,
          },
        ],
      },
    ]);
    setModalVisible(true); // show success modal
  };

  // ----------------------------- DELETE HANDLING -----------------------------
  const openDeleteModal = (
    type,
    topicIndex,
    subIndex = null,
    laymanIndex = null,
    clarifierIndex = null
  ) => {
    /**
     * 1) Check if it's the ONLY item. If yes, do not allow delete.
     */
    if (type === "topic") {
      // If there's only 1 topic, do not allow delete.
      if (topics.length <= 1) {
        alert("Cannot delete the default topic!");
        return;
      }
    } else if (type === "subtopic") {
      // If there's only 1 subtopic in that topic, do not allow delete.
      if (topics[topicIndex].subtopics.length <= 1) {
        alert("Cannot delete the default subtopic!");
        return;
      }
    } else if (type === "layman") {
      // If there's only 1 layman explanation in that subtopic, do not allow delete.
      if (
        topics[topicIndex].subtopics[subIndex].laymanExplanations.length <= 1
      ) {
        alert("Cannot delete the default layman explanation!");
        return;
      }
    } else if (type === "clarifier") {
      // If there's only 1 clarifier in that subtopic, do not allow delete.
      if (
        topics[topicIndex].subtopics[subIndex].conceptClarifiers.length <= 1
      ) {
        alert("Cannot delete the default concept clarifier!");
        return;
      }
    }

    setDeleteType(type);
    setDeleteIndices({ topicIndex, subIndex, laymanIndex, clarifierIndex });
    setModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    const { topicIndex, subIndex, laymanIndex, clarifierIndex } = deleteIndices;

    if (deleteType === "topic") {
      // remove entire topic
      setTopics((prevTopics) =>
        prevTopics.filter((_, idx) => idx !== topicIndex)
      );
    } else if (deleteType === "subtopic") {
      // remove single subtopic
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics = updated[topicIndex].subtopics.filter(
          (_, idx) => idx !== subIndex
        );
        return updated;
      });
    } else if (deleteType === "layman") {
      // remove a single layman explanation
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics[subIndex].laymanExplanations =
          updated[topicIndex].subtopics[subIndex].laymanExplanations.filter(
            (_, idx) => idx !== laymanIndex
          );
        return updated;
      });
    } else if (deleteType === "clarifier") {
      // remove a single concept clarifier
      setTopics((prevTopics) => {
        const updated = [...prevTopics];
        updated[topicIndex].subtopics[subIndex].conceptClarifiers =
          updated[topicIndex].subtopics[subIndex].conceptClarifiers.filter(
            (_, idx) => idx !== clarifierIndex
          );
        return updated;
      });
    }

    closeModal();
  };

  const closeModal = () => {
    setModalVisible(false);
    setDeleteType(null);
    setDeleteIndices({
      topicIndex: null,
      subIndex: null,
      laymanIndex: null,
      clarifierIndex: null,
    });
  };

  // ----------------------------- RENDER -----------------------------
  return (
    <AddContainer>
      {topics.map((topic, topicIndex) => (
        <div key={topicIndex}>
          <Heading>Add Topic {topicIndex + 1} and Subtopics</Heading>

          {/* TOPIC NAME */}
          <FormGroup>
            <Label>Topic {topicIndex + 1} Name</Label>
            <TextInput
              value={topic.topicName}
              onChange={(e) => handleTopicChange(e, topicIndex, "topicName")}
            />
          </FormGroup>

          {/* SKILL ASSESSMENT SECTION */}
          <SectionHeader>
            <div>
              <SectionTitle style={{ textAlign: "left" }}>
                Skill Assessment Questions for the Entire Topic
              </SectionTitle>
              <SubText>
                By default, questions will be chosen from the question bank. If
                you wish to upload a file, upload here.
              </SubText>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
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
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <strong>Uploaded File:</strong>{" "}
                  {topic.skillAssessmentFile.name}
                  <ActionButton
                    variant="danger"
                    onClick={() => handleRemoveSkillAssessment(topicIndex)}
                    style={{
                      marginLeft: "10px",
                      color: theme.colors.secondary,
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    Remove file
                  </ActionButton>
                </div>
              )}
            </div>
          </SectionHeader>

          {/* SUBTOPICS */}
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

              {/* SUBTOPIC NAME */}
              <FormGroup>
                <Label>Subtopic {subIndex + 1} Name</Label>
                <TextInput
                  value={subtopic.subtopicName}
                  onChange={(e) =>
                    handleSubtopicChange(
                      e,
                      null,
                      topicIndex,
                      subIndex,
                      "subtopicName"
                    )
                  }
                />
              </FormGroup>

              {/* SUBTOPIC CONTENT */}
              <FormGroup>
                <Label>Subtopic {subIndex + 1} Content</Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={subtopic.subtopicContent}
                  config={editorConfig}
                  onChange={(event, editor) => {
                    handleSubtopicChange(
                      null,
                      editor,
                      topicIndex,
                      subIndex,
                      "subtopicContent"
                    );
                  }}
                />
              </FormGroup>

              {/* SUBTOPIC SUMMARY */}
              <FormGroup>
                <Label>Subtopic {subIndex + 1} Summary</Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={subtopic.subtopicSummary}
                  config={editorConfig}
                  onChange={(event, editor) => {
                    handleSubtopicChange(
                      null,
                      editor,
                      topicIndex,
                      subIndex,
                      "subtopicSummary"
                    );
                  }}
                />
              </FormGroup>

              {/* QUICK REVISE POINTS */}
              <FormGroup>
                <Label>Quickly Revise Points</Label>
                <CKEditor
                  editor={ClassicEditor}
                  data={subtopic.quickRevisePoints}
                  config={editorConfig}
                  onChange={(event, editor) => {
                    handleSubtopicChange(
                      null,
                      editor,
                      topicIndex,
                      subIndex,
                      "quickRevisePoints"
                    );
                  }}
                />
              </FormGroup>

              {/* CHEAT SHEET VIDEO */}
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
                          style={{ cursor: "pointer" }}
                          onClick={() => videoInputRef.current.click()}
                        >
                          Upload Video
                        </label>
                      </UploadButton>
                      <input
                        type="file"
                        accept="video/*"
                        ref={videoInputRef}
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

              {/* INTERVIEW FAVORITE CHECKBOX */}
              <CheckboxContainer>
                <input
                  type="checkbox"
                  checked={subtopic.isInterviewFavorite}
                  onChange={(e) => handleCheckChange(e, topicIndex, subIndex)}
                />
                <label>Mark this subtopic as Interview Favorite</label>
              </CheckboxContainer>

              {/* +ADD LAYMAN BUTTON */}
              <ButtonRow>
                {/* Limit to 5 layman. If already 5, we can hide or disable the button */}
                <ActionButton
                  style={{
                    border: "1px solid #2390ac",
                    color: "#2390ac",
                  }}
                  onClick={() => handleAddLaymanExplanation(topicIndex, subIndex)}
                  disabled={subtopic.laymanExplanations.length >= 5}
                >
                  + Add Layman
                </ActionButton>
              </ButtonRow>

              {/* LAYMAN EXPLANATIONS LOOP */}
              {subtopic.laymanExplanations.map((layman, laymanIndex) => (
                <div
                  key={laymanIndex}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "4px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {/* Display the layman scale */}
                  <FormGroup>
                    <Label>Layman Scale</Label>
                    <TextInput
                      type="number"
                      readOnly
                      value={layman.laymanScale}
                      style={{ backgroundColor: theme.colors.backgray }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Layman Title</Label>
                    <TextInput
                      value={layman.laymanTitle}
                      onChange={(e) =>
                        handleLaymanExplanationChange(
                          e,
                          null,
                          topicIndex,
                          subIndex,
                          laymanIndex,
                          "laymanTitle"
                        )
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Layman Info</Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={layman.laymanInfo}
                      config={editorConfig}
                      onChange={(event, editor) => {
                        handleLaymanExplanationChange(
                          null,
                          editor,
                          topicIndex,
                          subIndex,
                          laymanIndex,
                          "laymanInfo"
                        );
                      }}
                    />
                  </FormGroup>

                  {/* DELETE LAYMAN ICON/BUTTON */}
                  <ButtonRow>
                    <ActionButton
                      style={{
                        border: "1px solid #2390ac",
                        color: "#2390ac",
                      }}
                      variant="danger"
                      onClick={() =>
                        openDeleteModal("layman", topicIndex, subIndex, laymanIndex)
                      }
                    >
                      Delete Layman
                    </ActionButton>
                  </ButtonRow>
                </div>
              ))}

              {/* CONCEPT CLARIFIER SECTION */}
              <ConceptClarifierContainer>
                <ClarifierHeading>Concept Clarifier</ClarifierHeading>
                {subtopic.conceptClarifiers.map((clarifier, clarifierIndex) => (
                  <div key={clarifierIndex} style={{ marginBottom: "10px" }}>
                    <FormGroup>
                      <Label>Concept Clarifier (Enter a Word or Phrase)</Label>
                      <TextInput
                        value={clarifier.clarifierWordOrPhrase}
                        onChange={(e) =>
                          handleConceptClarifierChange(
                            e,
                            null,
                            topicIndex,
                            subIndex,
                            clarifierIndex,
                            "clarifierWordOrPhrase"
                          )
                        }
                        style={{ backgroundColor: theme.colors.backgray }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Explanation on Hover</Label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={clarifier.explanationOnHover}
                        config={editorConfig}
                        onChange={(event, editor) => {
                          handleConceptClarifierChange(
                            null,
                            editor,
                            topicIndex,
                            subIndex,
                            clarifierIndex,
                            "explanationOnHover"
                          );
                        }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>More Explanation on Popup</Label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={clarifier.moreExplanation}
                        config={editorConfig}
                        onChange={(event, editor) => {
                          handleConceptClarifierChange(
                            null,
                            editor,
                            topicIndex,
                            subIndex,
                            clarifierIndex,
                            "moreExplanation"
                          );
                        }}
                      />
                    </FormGroup>

                    {/* DELETE CLARIFIER BUTTON/ICON */}
                    <ButtonRow>
                      <ActionButton
                        variant="danger"
                        style={{
                          marginLeft: "0px",
                          border: "1px solid #2390ac",
                          color: "#2390ac",
                          backgroundColor: "transparent",
                        }}
                        onClick={() =>
                          openDeleteModal(
                            "clarifier",
                            topicIndex,
                            subIndex,
                            null,
                            clarifierIndex
                          )
                        }
                      >
                        Delete Clarifier
                      </ActionButton>
                    </ButtonRow>
                  </div>
                ))}

                <ButtonRow>
                  <ActionButton
                    style={{
                      border: "1px solid #2390ac",
                      color: "#2390ac",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => handleAddConceptClarifier(topicIndex, subIndex)}
                  >
                    + Add More
                  </ActionButton>
                </ButtonRow>
              </ConceptClarifierContainer>

              {/* QUESTION BANK */}
              <SectionHeader>
                <div>
                  <SectionTitle>Question Bank</SectionTitle>
                  {subtopic.questionBankFile && (
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <strong>Uploaded File:</strong>{" "}
                      {subtopic.questionBankFile.name}
                      <ActionButton
                        variant="danger"
                        onClick={() =>
                          handleRemoveQuestionBank(topicIndex, subIndex)
                        }
                        style={{
                          marginLeft: "10px",
                          color: theme.colors.secondary,
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        Remove file
                      </ActionButton>
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <UploadManually
                    style={{ marginTop: "0px", cursor: "pointer" }}
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

              {/* TRY IT YOURSELF */}
              <SectionHeader>
                <div>
                  <SectionTitle>Try It Yourself Questions</SectionTitle>
                  <SubText>
                    By default, questions will be chosen from the question bank.
                    If you wish to upload a file, upload here.
                  </SubText>
                  {subtopic.tryItYourselfFile && (
                    <div
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <strong>Uploaded File:</strong>{" "}
                      {subtopic.tryItYourselfFile.name}
                      <ActionButton
                        variant="danger"
                        onClick={() =>
                          handleRemoveTryItYourself(topicIndex, subIndex)
                        }
                        style={{
                          marginLeft: "10px",
                          color: theme.colors.secondary,
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        Remove file
                      </ActionButton>
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <UploadManually
                    style={{ marginTop: "0px", cursor: "pointer" }}
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

              {/* DELETE SUBTOPIC BUTTON */}
              <ButtonRow>
                <ActionButton
                  style={{
                    border: "1px solid #2390ac",
                    color: "#2390ac",
                    backgroundColor: "transparent",
                  }}
                  variant="danger"
                  onClick={() => openDeleteModal("subtopic", topicIndex, subIndex)}
                >
                  Delete Subtopic
                </ActionButton>
              </ButtonRow>
            </div>
          ))}

          {/* DELETE TOPIC BUTTON */}
          <ButtonRow>
            <ActionButton
              style={{
                border: "1px solid #2390ac",
                color: "#2390ac",
                backgroundColor: "transparent",
              }}
              variant="danger"
              onClick={() => openDeleteModal("topic", topicIndex)}
            >
              Delete Topic
            </ActionButton>
          </ButtonRow>

          {/* ADD SUBTOPIC BUTTON */}
          <ButtonRow>
            <ActionButton
              style={{
                border: "1px solid #2390ac",
                color: "#2390ac",
                backgroundColor: "transparent",
              }}
              onClick={() => handleAddSubtopic(topicIndex)}
            >
              + Add Subtopic
            </ActionButton>
          </ButtonRow>
        </div>
      ))}

      {/* ADD TOPIC & DONE BUTTONS */}
      <ButtonRow>
        <ActionButton
          style={{
            border: "1px solid #2390ac",
            color: "#2390ac",
            backgroundColor: "transparent",
          }}
          onClick={handleAddTopic}
        >
          + Add Topic
        </ActionButton>
        <ActionButton
          variant="primary"
          style={{ width: "100px" }}
          onClick={handleDone}
        >
          Done
        </ActionButton>
      </ButtonRow>

      {/* PAGINATION (OPTIONAL) */}
      <PaginationContainer>
        <Link to="/admin/uploadmodule">
          <ActionButton>Previous</ActionButton>
        </Link>
      </PaginationContainer>

      {/* DELETE CONFIRMATION MODAL */}
      {modalVisible && deleteType && (
        <DeleteModule
          onDelete={handleDeleteConfirm}
          onCancel={closeModal}
          message={
            deleteType === "topic"
              ? "Are you sure you want to delete this entire topic?"
              : deleteType === "subtopic"
              ? "Are you sure you want to delete this subtopic?"
              : deleteType === "layman"
              ? "Are you sure you want to delete this Layman explanation?"
              : "Are you sure you want to delete this Concept Clarifier?"
          }
        />
      )}

      {/* SUCCESS MODAL (WHEN deleteType===null) */}
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
