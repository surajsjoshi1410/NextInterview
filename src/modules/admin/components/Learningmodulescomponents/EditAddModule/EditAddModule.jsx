import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import {useHistory} from "react-router-dom";
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
} from "./EditAddModule.style";
import theme from "../../../../../theme/Theme";
// import DeleteModule from "../../../admin/components/DeleteModule/DeleteModule";
// import {
//   uploadFileToFirebase,
//   uploadVideoToFirebase,
// } from "../../../../utils/uploadFileToFirebase";
import { getModuleById, updateModuleById } from "../../../../../api/addNewModuleApi"; // Import your API functions
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";
import { editorConfig } from "../../../../../config/ckEditorConfig";
import { use } from "react";

// Styled icon/button if you want to show a delete icon
const DeleteIconWrapper = styled.span`
  margin-left: 8px;
  cursor: pointer;
  color: ${theme.colors.secondary};

  &:hover {
    color: red;
  }
`;



const EditAddModule = () => {
  // ----------------------------- STATES -----------------------------
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteType, setDeleteType] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const videoInputRef = useRef(null);
  const [topics, setTopics] = useState([]);
  const locationData = useLocation();
  const { id } = useParams() || {};

  // Fetch the module data on component mount
  useEffect(() => {
    const fetchModule = async () => {
      try {
        console.log("ModuleId", id);
        const moduleData = await getModuleById(id); // Fetch the module by ID
        setTopics(moduleData.topicData); // Set the topics data from the fetched module
      } catch (error) {
        console.error("Error fetching module:", error);
      }
    };

    if (id) {
      fetchModule(); // Fetch module data if moduleId exists
    }
  }, [id]);

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
console.log("Hello",topics)
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

  // ----------------------------- DONE BUTTON -----------------------------
  const handleDone = async () => {
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
                topicLevel: laymn.laymanScale,
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

    try {
      const response = await updateModuleById(moduleId, submissionData); // Use the update API
      console.log("Module updated:", response);
      setModalVisible(true); // show success modal
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  // ----------------------------- RENDER -----------------------------
  return (
    <AddContainer>
      {topics?.map((topic, topicIndex) => (
        <div key={topicIndex}>
          <Heading>Edit Topic {topicIndex + 1} and Subtopics</Heading>

          {/* TOPIC NAME */}
          <FormGroup>
            <Label>Topic {topicIndex + 1} Name</Label>
            <TextInput
              value={topic.topicName}
              onChange={(e) => handleTopicChange(e, topicIndex, "topicName")}
            />
          </FormGroup>

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

              {/* Quick Revise Points */}
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

              {/* Add more subtopic and functionalities as needed... */}

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

      {/* SUCCESS MODAL (WHEN deleteType===null) */}
      {modalVisible && deleteType === null && (
        <ModalContainer>
          <ModalContent>
            <h2>Success</h2>
            <p>Module updated successfully!</p>
            <ModalButton
              onClick={() => history.push("/admin/uploadmodule")}
            >
              Close
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </AddContainer>
  );
};

export default EditAddModule;
