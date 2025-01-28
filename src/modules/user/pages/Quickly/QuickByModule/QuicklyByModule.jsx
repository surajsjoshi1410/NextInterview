import React, { useEffect, useState } from "react";
import { getModuleById } from "../../../../../api/addNewModuleApi";
import {
  Container,
  ModuleCard,
  ModuleDetails,
  Title,
  Button,
  LinkStyled,
} from "../QuickByModule/QuicklyByModule.styles";
import { useParams } from "react-router-dom";

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
              <Button>View Sample Interview</Button>
            </LinkStyled>
          </div>

          <div>
            {moduleData.topicData.map((topic, topicIndex) => (
              <div key={topicIndex}>
                <h3>Topic {topicIndex + 1} - {topic.topicName}</h3>
                {topic.subtopicData.map((subtopic, subtopicIndex) => (
                  <div
                    key={subtopicIndex}
                    style={{
                      position: "relative",
                      marginBottom: "20px",
                      paddingBottom: "40px", // Add spacing for the button at the bottom
                      borderBottom: "3px solid #ccc", // Add a 5px line between subtopics
                    }}
                  >
                    <div>
                      <h4>{subtopic.subtopicName}</h4>
                      {/* Parse and render JSON content from subtopicSummary */}
                      <p
                        dangerouslySetInnerHTML={{
                          __html: parseJSONContent(subtopic.subtopicSummary),
                        }}
                      ></p>
                    </div>
                    <Button
                      style={{
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                        width: "auto", // Keep the button width fixed
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
