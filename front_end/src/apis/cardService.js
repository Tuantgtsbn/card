import axiosClient from "./axiosClient"
export const getCards = async (params) => {
    return axiosClient.get('/api/card', { params });
}
export const likeCard = async (id) => {
    return axiosClient.get(`/api/card/${id}/like`);
}
export const getCardById = async (id) => {
    return axiosClient.get(`/api/card/${id}`);
}

export const findRelatedCards = async (id) => {
    return axiosClient.get(`/api/findRelatedCards?id=${id}`);
}