import axios from 'axios';
import Cookies from 'js-cookie';
const handleRequestSuccess = async (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};
const handleRequestErr = (err) => {
    console.log("Request Error:", err);
    return Promise.reject(err);
};
const handleResponseSuccess = (res) => {
    return res;
};
const handleResponseErr = async (err) => {
    if (!err.response) {
        console.error("Network error or CORS issue", err);
        return Promise.reject(err);
    }
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = Cookies.get('refreshToken'); // lay refresh token tu cookie de gui vao request tiep theo
        if (!refreshToken) return Promise.reject(err);
        try {
            const res = await axiosClient.post('/auth/refresh-token', {
                refreshToken: refreshToken
            });
            const newAccessToken = res.data.accessToken;
            Cookies.set('accessToken', newAccessToken); // lu access token moi vao trong cookie
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosClient(originalRequest);
        } catch (error) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            return Promise.reject(error);
        }
    } else {
        return Promise.reject(err);
    }
};
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
axiosClient.interceptors.request.use(
    (config) => handleRequestSuccess(config),
    (err) => handleRequestErr(err)
);
axiosClient.interceptors.response.use(
    (config) => handleResponseSuccess(config),
    (err) => handleResponseErr(err)
);
export default axiosClient;
