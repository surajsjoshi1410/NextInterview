import api from "../config/axiosconfig";


export const uploadSkillAssessmentFile = async (data) => {
    try {
        const response = await api.post("/upload/upload-csv-skillassessment", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const uploadQuestionBankFile = async (data) => {
    try {
        const response = await api.post("/upload/upload-csv-questionbank", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const uploadchallengesFile = async (data) => {
    try {
        const response = await api.post("/uploadchallengesFile/", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const uploadTryItYourselfFile = async (data) => {
    try {
        const response = await api.post("/upload/upload-csv-tiy", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
} 