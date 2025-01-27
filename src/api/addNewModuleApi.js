import api from "../config/axiosconfig";



export const addNewModule = async (data) => {
    try {
        const response = await api.post("/addNewModule/", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getModule = async (data) => {
    try {
        const response = await api.get("/addNewModule/", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteModule = async (id) => {
    try {
        const response = await api.delete(`/addNewModule/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};