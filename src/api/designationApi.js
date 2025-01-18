import api from "../config/axiosconfig";

export const createDesignation = async (data) => {
    try {
        const response = await api.post("/designation", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDesignations = async () => {
    try {
        const response = await api.get("/designation");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDesignationById = async (id) => {
    try {
        const response = await api.get(`/designation/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateDesignation = async (id, data) => {
    try {
        const response = await api.put(`/designation/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteDesignation = async (id) => {    
    try {
        const response = await api.delete(`/designation/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};