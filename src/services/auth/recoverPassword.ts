import axios from "axios";
import {request} from "../axios";

export const forgetpassword = async (email: string) => {
    try {
        const response = await request.post(`/pass/forgetpassword`, {
            email
        });

        return response;
    } catch (error) {
        console.error("Error during forgetpassword:", error);
        throw error;
    }
};

export const checkTimePassword = async (token: string) => {
    const data = await request.get(`/pass/checkpassword/${token}`);
    return data;
};
export const updatePassword = async (
    newPassword: string,
    conformPassword: string,
    token: string
) => {
    const data = await request.post(`/pass/updatepassword/${token}`, {
        newPassword: newPassword,
        conformPassword: conformPassword
    });
    return data;
};
