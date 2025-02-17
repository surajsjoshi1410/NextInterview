import api from "../config/axiosconfig";



export const summariseTopic = async (data) => {
    try {
        const response = await api.post(`/smart-response`,data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error
    }
}