import api from "../config/axiosconfig";    

export const getSkillAssessment = async (module_code, topic_code, subtopic_code, question_type, level) => {
  console.log("🛠️ Requested Parameters:", { module_code, topic_code, subtopic_code, question_type, level });

  try {
    const params = {};
    
    if (module_code) params.module_code = module_code;
    if (topic_code) params.topic_code = topic_code;
    if (subtopic_code) params.subtopic_code = subtopic_code;
    if (question_type) params.question_type = question_type;
    if (level) params.level = level;

    console.log("✅ Sending API Request with Params:", params);
    
    const response = await api.get('/skillAssessment/get', { params });

    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error Fetching Skill Assessment:", error.response?.data || error.message);
    throw error;
  }
};

  export const getSkillAssessmentById = async (id) => {
    try {
      const response = await api.get(`/qskillAssessment/get/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };