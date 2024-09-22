import axios from "axios";

const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Thêm interceptor để tự động thêm x-api-key vào tất cả các yêu cầu
request.interceptors.request.use(
    (config) => {
        const apiKey = process.env.NEXT_PUBLIC_X_API_KEY;
        if (apiKey) {
            config.headers["x-api-key"] = apiKey;
        }

        if (config.headers.Authorization) {
            const token = config.headers.Authorization;
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {request};
