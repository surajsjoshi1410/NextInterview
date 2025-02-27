import api from "../config/axiosconfig";

export const getModuleProgress = async () => {
    try {
        const response = await api.get(`/moduleProgress/getmoduleProgressStats`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getModuleProgressFilter = async(moduleCode, topicCode, subtopicCode ) => {
    const params={};
    if(moduleCode){
        params.moduleCode = moduleCode;
    }
    if(topicCode){
        params.topicCode = topicCode;
    }
    if(subtopicCode){
        params.subtopicCode = subtopicCode;
    }
    
    try {
        const response = await api.post(`/moduleProgress/getmoduleProgressStats/filter`,{params});
        return response.data;
    } catch (error) {
        throw error;
    }   
}