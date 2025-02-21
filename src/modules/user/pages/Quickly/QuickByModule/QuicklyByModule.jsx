import React, { useEffect, useState } from "react";
import { getModuleById } from "../../../../../api/addNewModuleApi";
import {
  Container,
  ModuleCard,
  ModuleDetails,
  Title,
  Button,
  LinkStyled,
} from "./QuicklyByModule.styles";
import { useParams } from "react-router-dom";
import spark from "../../../../../assets/fluentsparkle.svg";

const QuicklyByModule = () => {
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const moduleId = useParams().id;

  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        console.log("ModuleId", moduleId);
        const response = await getModuleById(moduleId);
        setModuleData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching module data:", err);
        setError("Failed to load module data.");
        setLoading(false);
      }
    };

    fetchModuleData();
  }, [moduleId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <ModuleCard>
        <ModuleDetails>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Title>{moduleData.moduleName}</Title>
            <LinkStyled href={moduleData.interviewSampleURL} target="_blank">
              <Button>
                <img src={spark} alt="start" /> View Sample Interview
              </Button>
            </LinkStyled>
          </div>

          <div>
            {moduleData.topicData.map((topic, topicIndex) => (
              <div key={topicIndex}>
                <h3 style={{ margin: "0" }}>
                  Topic {topicIndex + 1} - {topic.topicName}
                </h3>
                {topic.subtopicData.map((subtopic, subtopicIndex) => (
                  <div
                    key={subtopicIndex}
                    style={{
                      position: "relative",
                      paddingBottom: "40px",
                    }}
                  >
                    <div>
                      <h4 style={{ margin: "0", marginTop: "30px" }}>
                        {subtopic.subtopicName}
                      </h4>
                      {/* Parse and render JSON content from subtopicSummary */}
                      <p
                        dangerouslySetInnerHTML={{
                          __html: parseJSONContent(subtopic.subtopicSummary),
                        }}
                        style={{ margin: "0" }}
                      ></p>
                    </div>
                    <Button
                      style={{
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                        width: "auto", // Keep the button width fixed
                        border: "none",
                      }}
                    >
                      Revisit Subtopic
                    </Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ModuleDetails>
      </ModuleCard>
    </Container>
  );
};

// Helper function to parse JSON content safely
const parseJSONContent = (content) => {
  try {
    const parsedContent = JSON.parse(content);
    return parsedContent; // Return parsed content if it's valid JSON
  } catch (error) {
    console.error("Error parsing JSON content:", error);
    return content; // Return original content if parsing fails
  }
};

export default QuicklyByModule;
