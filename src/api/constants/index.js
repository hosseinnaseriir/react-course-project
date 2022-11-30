import axios from 'axios';

export const BASE_URL = `https://api.test.com`;

export const BASE_INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

BASE_INSTANCE.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log('i send');
        return config;
    },
    function (error) {
        console.log('error');
        return Promise.reject(error);
    },
);
