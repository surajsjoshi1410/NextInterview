import api from "../config/axiosconfig";

export const getFaq = async () => {
    try {
        const response = await api.get("/faq/getFaq");
        console.log("respobnse Faq", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createFaq = async (data) => {
    try {
        const response = await api.post("/faq/createFaq", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateFaq = async (id, data) => {
    try {
        console.log("id", id);
        const response = await api.put(`/faq/updateFaq/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteFaq = async (id) => {
    try {
        const response = await api.delete(`/faq/deleteFaq/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};