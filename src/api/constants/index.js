import axios from 'axios';

export const BASE_URL = `https://reqres.in/api`;

export const BASE_INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

BASE_INSTANCE.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error);
    },
);
