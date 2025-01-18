import api from "../config/axiosconfig";

export const getCompanies = async () => {
    try {
        const response = await api.get("/companyData");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getCompanyById = async (id) => {
    try {
        const response = await api.get(`/companyData/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createCompany = async (data) => {
    try {
        const response = await api.post("/companyData", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateCompany = async (id, data) => {
    try {
        const response = await api.put(`/companyData/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};