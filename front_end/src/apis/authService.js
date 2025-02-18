import axiosClient from "./axiosClient";

export const signUp = async (data) => {
    return axiosClient.post('/auth/register', data);
}

export const signIn = async (data) => {
    return axiosClient.post('/auth/login', data);
}
export const getUserInfor = async () => {
    return axiosClient.get('/auth/me');
}