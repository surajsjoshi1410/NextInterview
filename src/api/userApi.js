import api from "../config/axiosconfig";

export const createUserProfile = async (data) => {
    console.log("data", data);

    const submissionData = {
        user_id: data.user_id || undefined, // MongoDB _id of the user
        user_name: data.user_name || undefined,
        profile_pic: data.profile_pic || undefined,
        user_linkedin_profile_link: data.user_linkedin_profile_link || undefined,
        data_job_response: data.data_job_response || undefined,
        data_ai_job_response: data.data_ai_job_response || undefined,
        data_experience_response: data.data_experience_response || undefined,
        data_scheduled_interview_response: data.data_scheduled_interview_response || undefined,
        data_interview_schedule_response: data.data_interview_schedule_response || undefined,
        data_interview_scheduled_response: data.data_interview_scheduled_response || undefined,
        data_past_interview_response: data.data_past_interview_response || undefined,
        data_motive_response: data.data_motive_response || undefined,
        profile_status: data.profile_status || undefined,
        data_planned_interview_response: data.data_planned_interview_response || undefined,
    }
    try {
        const response = await api.post("/users/updateProfile", submissionData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getUserByClerkId = async (clerkId) => {
    try {
        const response = await api.get(`/users/getUserByClerk/${clerkId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getUsers = async () => {
    try {
        const response = await api.get("/users/getUsers");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const restrictUser = async (data) => {
    try {
        const response = await api.post("/users/restrictUser", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const unrestrictUser = async (data) => {
    try {
        const response = await api.post("/users/unrestrictUser", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const updatePassword = async (data) => {
    try {
        const response = await api.post("/users/resetPassword", data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateUser = async (data) => {
    try {
        const response = await api.post("/users/updateUser", data, {
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
};
export const getUserQuestionariesByUserId = async (id) => {
    try {
        const response = await api.get(`/users/userQuationaries/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const addPastInterview = async (user_id, data) => {
    try {
        const response = await api.post(`users/updateUser/addPastInterview/${user_id}`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getUserBySessionId = async (data) => {
    try {
        const response = await api.post(`/users/getUserBySessionId`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};