import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const authService = {
    register: async (userData: any) => {
        const response = await api.post('/register', userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    login: async (userData: any) => {
        const response = await api.post('/login', userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },

    logout: async () => {
        await api.get('/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    forgotPassword: async (email: string) => {
        const response = await api.post('/forgotpassword', { email });
        return response.data;
    },

    resetPassword: async (token: string, password: string) => {
        const response = await api.put(`/resetpassword/${token}`, { password });
        return response.data;
    },

    getMe: async () => {
        const response = await api.get('/me');
        return response.data;
    },
};

export default api;
