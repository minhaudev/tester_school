import {request} from "../axios";

export const signInUser = async (email: string, password: string) => {
    try {
        const response = await request.post(`/login/basic`, {email, password});
        return response.data; // Trả về dữ liệu JSON
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
