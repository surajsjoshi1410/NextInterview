import api from "../config/axiosconfig";

export const getAllNotifications = async () => {
    try {
        const response = await api.get("/notification/get");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const sendNotification = async (data) => {
    try {
        const response = await api.post("/notification/send", data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateNotification = async (id, data) => {
    try {
        const response = await api.put(`/notification/updateNotification/${id}`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteNotification = async (id) => {
    try {
        console.log("Id",id);
        const response = await api.delete(`/notification/deleteNotification/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const markNotificationAsRead = async (id) => {
    try {
        const response = await api.put(`/notification/notificationRead/${userId}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }

};

export const getNotificationByUser = async (userId) => {
    try {
        console.log("Id",userId);
        const response = await api.get(`/notification/getNotificationByUser/${userId}`);
        console.log("Hello world",response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};