import api from "../config/axiosconfig";


export const createInterviewRound = async (data) => {
    try {
        const response = await api.post("/interviewRound", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInterviewRounds=  async () => {
    try {
        const response = await api.get("/interviewRound");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInterviewRoundById = async (id) => {
    try {
        const response = await api.get(`/interviewRound/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};  

export const updateInterviewRound = async (id, data) => {
    try {
        const response = await api.put(`/interviewRound/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteInterviewRound = async (id) => {
    try {
        const response = await api.delete(`/interviewRound/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}