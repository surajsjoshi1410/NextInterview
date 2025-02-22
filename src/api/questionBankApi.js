import api from "../config/axiosconfig";    


export const getQuestionBank = async (module_code, topic_code, subtopic_code, question_type,level) => {
    try {
      const params = {};
  
      if (module_code) {
        params.module_code = module_code;
      }
      if (topic_code) {
        params.topic_code = topic_code;
      }
      if (subtopic_code) {
        params.subtopic_code = subtopic_code;
      }
      if (question_type) {
        params.question_type = question_type;
      }
      if (level) {
        params.level = level;
      }
  
      const response = await api.get('/questionBank/get', { params });
  
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getQuestionBankById = async (id) => {
    try {
      const response = await api.get(`/questionBank/get/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };