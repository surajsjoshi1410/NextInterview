import api from "../config/axiosconfig";
export const createSupportQuery = async (data) => {
    try {
        const response = await api.post("/supportQuery/", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSupportQueryById = async (id) => {
    try {
        const response = await api.get(`/supportQuery/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllSupportQuery = async () => {
    try {
        const response = await api.get("/supportQuery/getQuery/all");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateSupportQuery = async (id, data) => {
    try {
        const response = await api.put(`/supportQuery/updatequery/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSupportQueryStats = async () => {
    try {
        const response = await api.get("/supportQuery/getSupportStatistics/stats");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};