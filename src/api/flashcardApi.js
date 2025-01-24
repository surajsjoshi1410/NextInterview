import api from "../config/axiosconfig";


export const addFlashcard = async (data) => {
    try {
        const response = await api.post("/flashCards", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getFlashcards = async () => {
    try {
        const response = await api.get("/flashCards");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateFlashcard = async (id, data) => {
    try {
        const response = await api.put(`/flashCards/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteFlashcard = async (id) => {
    try {
        const response = await api.delete(`/flashCards/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};   