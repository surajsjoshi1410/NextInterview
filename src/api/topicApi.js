import api from "../config/axiosconfig";

export const getTopics = async () => {
    try {
        const response = await api.get("/topic");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getTopicById = async (id) => {
    try {
        const response = await api.get(`/topic/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const createTopic = async (data) => {
    try {
        const response = await api.post("/topic", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateTopic = async (id, data) => {
    try {
        const response = await api.put(`/topic/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const deleteTopic = async (id) => {
    try {
        const response = await api.delete(`/topic/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const generateSummary = async ({ text, maxLength }) => {
    try {
        const response = await api.post("/chatgpt/summarize", {
            text,
            maxLength,
        });
        return response.data.summary;
    } catch (error) {
        console.log(error);
        throw error;
    }
};




























