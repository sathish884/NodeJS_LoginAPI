import axios from 'axios';

const API_URL = 'https://node-js-password-reset-backend.vercel.app/api'; // Replace with your server URL

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


// ---------------------- User Authentication ------------------------

// User Registeration
export const registerUser = async (body) => {
    try {
        const response = await apiClient.post('/register', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// User Login
export const loginUser = async (body) => {
    try {
        const response = await apiClient.post('/login', body);
        return response;
    } catch (error) {
        throw error;
    }
}


// Forget password
export const forgetPassword = async (body) => {
    try {
        const response = await apiClient.post('/forgot-password', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Token verify
export const tokenVerify = async (body) => {
    try {
        const response = await apiClient.post('/token-verify', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Reset password
export const resetPassword = async ({ email, password }) => {
    try {
        const response = await apiClient.post('/reset-password', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }

};

