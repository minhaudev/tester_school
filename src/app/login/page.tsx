"use client";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./style.css";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import {signInUser} from "@/services/auth/login";
import {fieldInput} from "@/consts/validates";
import {validateField} from "@/utils/validateForm";
import {statusColors} from "@/components/molecules/StatusNote";
import Modal from "@/components/molecules/Modal";
import {Spinner} from "@nextui-org/react";
function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({
        email: "",
        password: ""
    });
    const [isRemember, setIsRemember] = useState(false);
    const router = useRouter();
    useEffect(() => {
        // Tự động điền email và password nếu có trong localStorage
        const savedEmail = localStorage.getItem("rememberedEmail");
        const savedPassword = localStorage.getItem("rememberedPassword");
        if (savedEmail && savedPassword) {
            setFormData({email: savedEmail, password: savedPassword});
            setIsRemember(true);
        }
    }, []);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setIsSuccess(true);
        setErrors({
            ...errors,
            [name]: validateField(name, value)
        });
    };
    const onChangeRemember = (id: string) => {
        setIsRemember(!isRemember);
    };

    const handleForgotPassword = () => {
        router.push("/recoverpassword");
    };
    const handleLogin = async () => {
        setIsLoading(true);
        const emailError = validateField(fieldInput.EMAIL, formData.email);
        const passwordError = validateField(
            fieldInput.PASSWORD,
            formData.password
        );

        if (emailError || passwordError) {
            setErrors({
                email: emailError,
                password: passwordError
            });
            return;
        }

        try {
            const response = await signInUser(
                formData.email,
                formData.password
            );

            if (response && response.data.tokens) {
                setIsSuccess(true);
                if (isRemember) {
                    localStorage.setItem("rememberedEmail", formData.email);
                    localStorage.setItem(
                        "rememberedPassword",
                        formData.password
                    );
                } else {
                    localStorage.removeItem("rememberedEmail");
                    localStorage.removeItem("rememberedPassword");
                }
                localStorage.setItem(
                    "authToken",
                    response.data.tokens.accessToken
                );

                router.push("/");
            } else {
                setIsSuccess(false);
                setIsLoading(false);
            }
        } catch (error) {
            setIsSuccess(false);
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            <div
                className={`background bg-stroke w-[full] max-h-[100vh] flex justify-center items-center `}>
                <div className="font-wendy-one uppercase text-[128px] font-[400] leading-[135.04px] text-primary mr-[350px]">
                    LUNA
                </div>
                <div className="w-[452px] py-[64px] px-[24px] bg-white shadow-lg shadow-[rgba(0,0,0,0.1)]">
                    <Input
                        isError={!!errors.email}
                        helperText={errors.email}
                        size="large"
                        label="Email"
                        require
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        handleOnChange={handleInputChange}
                    />
                    <p className="mb-6"></p>
                    <Input
                        isError={!!errors.password}
                        helperText={errors.password}
                        size="large"
                        type="password"
                        label="Password"
                        require
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        handleOnChange={handleInputChange}
                    />
                    <p className="mb-6"></p>

                    <Button
                        isDisabled={
                            !!errors.email ||
                            !!errors.password ||
                            formData.email === "" ||
                            formData.password === "" ||
                            !isSuccess ||
                            isLoading
                        }
                        className="bg-custom-gradient "
                        onClick={handleLogin}>
                        {isLoading ?
                            <p className="flex justify-center items-center">
                                Loading...
                                <Spinner size="sm" color="default" />
                            </p>
                        :   "Login"}
                    </Button>
                    {!isSuccess && (
                        <p className="text-red text-[13px] absolute mt-[4px]">
                            Authentication failed!
                        </p>
                    )}
                    <p className="mb-6"></p>

                    <div className="flex justify-between ">
                        <div className="text-[#4B5563] text-[13px] font-normal leading-[15.51px]">
                            <Checkbox
                                id="remember"
                                checked={isRemember}
                                onChange={onChangeRemember}
                                description="Remember me"
                            />
                        </div>
                        <p
                            className="text-[13px] cursor-pointer text-[#01559B] font-medium leading-[15.51px]"
                            onClick={handleForgotPassword}>
                            Forgot password?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
