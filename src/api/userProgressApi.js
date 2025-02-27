import api from "../config/axiosconfig";

export const startModule = async (userId, moduleCode, moduleID) => {
    const data = {
        userId: userId,
        moduleCode: moduleCode,
        moduleID: moduleID
    };
    try {
        const response = await api.get(`/userProgress/startModule`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const startTopic = async (userId, moduleCode, topicCode, topicID) => {
    const data = {
        userId: userId,
        moduleCode: moduleCode,
        topicCode: topicCode,
        topicID: topicID
    };
    try {
        const response = await api.get(`/userProgress/startTopic`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const startSubTopic = async (userId, moduleCode, topicCode, subtopicCode, subtopicId) => {
    const data = {
        userId: userId,
        moduleCode: moduleCode,
        topicCode: topicCode,
        subtopicCode: subtopicCode,
        subtopicId: subtopicId
    };
    try {
        const response = await api.get(`/userProgress/startSubTopic`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const completeModule = async (userId, moduleCode) => {
    const data = {
        userId,
        moduleCode
    };
    try {
        const response = await api.get(`/userProgress/completeModule`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const completeTopic = async (userId, moduleCode, topicCode) => {
    const data = {
        userId,
        moduleCode,
        topicCode
    };
    try {
        const response = await api.get(`/userProgress/completeTopic`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const completeSubTopic = async (userId, moduleCode, topicCode, subtopicCode) => {
    const data = {
        userId,
        moduleCode,
        topicCode,
        subtopicCode
    };
    try {
        const response = await api.get(`/userProgress/completeSubTopic`, data); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getUserProgress = async (userId) => {
    try {
        const response = await api.get(`/userProgress/getProgress/${userId}`); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getUserProgressStats = async (userId) => {
    try {
        const response = await api.get(`/userProgress/getProgressStat/${userId}`); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
