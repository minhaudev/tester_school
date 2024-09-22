"use client";
import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import "./style.css";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Arow from "@/assets/svgs/arrow_1.svg";
import CheckSuccess from "@/assets/svgs/check-success.svg";
import {jwtDecode} from "jwt-decode";
import {fieldInput} from "@/consts/validates";
import {
    checkTimePassword,
    updatePassword
} from "@/services/auth/recoverPassword";
import {AxiosError} from "axios";
import {assert} from "console";
import {validateField} from "@/utils/validateForm";
import {Spinner} from "@nextui-org/react";

function Recoverpassword() {
    const router = useRouter();
    const params = useParams();

    const [formData, setFormData] = useState({
        newPassword: "",
        conformPassword: ""
    });

    const [errForm, setErrForm] = useState<{
        newPassword: "";
        conformPassword: "";
    }>({newPassword: "", conformPassword: ""});

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMatch, setIsMatch] = useState(false);
    const [remainingTime, setRemainingTime] = useState<number | null>(null);
    const handleLogin = () => {
        router.push("/login");
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        }),
            setIsMatch(false);
        setErrForm((prevErrForm) => ({
            ...prevErrForm,
            [name]: validateField(fieldInput.PASSWORD, value)
        }));
    };
    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            if (formData.newPassword !== formData.conformPassword) {
                setIsMatch(true);
                return;
            } else {
                const res = await updatePassword(
                    formData.newPassword,
                    formData.conformPassword,
                    params?.token as string
                );
                console.log("resetpassword", res);
                setIsSuccess(true);
                setIsMatch(false);
            }
        } catch (error: any) {
            setIsSuccess(false);
            setIsLoading(false);
            setIsMatch(false);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        const fetchApi = async () => {
            try {
                await checkTimePassword(params?.token as string);
                const decodedToken: any = jwtDecode(params?.token as string);
                const currentTime = Math.floor(Date.now() / 1000);
                const timeLeft = decodedToken.exp - currentTime;
                setRemainingTime(timeLeft);
                console.log("time", timeLeft);
                if (timeLeft > 0) {
                    const interval = setInterval(() => {
                        setRemainingTime((prevTime) => {
                            const updatedTime = (prevTime as number) - 1;
                            if (updatedTime <= 0) {
                                clearInterval(interval);
                                router.push("/404");
                            }
                            return updatedTime;
                        });
                    }, 1000);

                    return () => clearInterval(interval);
                } else {
                    router.push("/404");
                }
            } catch (error: any) {
                router.push("/404");
            }
        };

        fetchApi();
    }, [params?.token]);

    return (
        <div
            className={`background bg-stroke w-[full] max-h-[100vh] flex justify-center items-center `}>
            <div className="font-wendy-one uppercase text-[128px] font-[400] leading-[135.04px] text-primary mr-[350px]">
                LUNA
            </div>
            <div className="w-[452px]  py-[64px] px-[24px] bg-white shadow-lg shadow-[rgba(0,0,0,0.1)]">
                <div className="text-[#4B5563] font-medium text-[32px] leading-[38.19px] mb-6">
                    Recover password
                </div>
                {!isSuccess && (
                    <>
                        <Input
                            type="password"
                            isError={!!errForm.newPassword}
                            helperText={errForm.newPassword}
                            size="large"
                            label="New password"
                            require
                            name="newPassword"
                            placeholder="Enter"
                            value={formData?.newPassword}
                            handleOnChange={handleOnChange}
                        />
                        <p className="mb-5"></p>
                        <Input
                            type="password"
                            isError={!!errForm.conformPassword}
                            helperText={errForm.conformPassword}
                            size="large"
                            label="Confirm password"
                            require
                            name="conformPassword"
                            placeholder="Enter"
                            value={formData?.conformPassword}
                            handleOnChange={handleOnChange}
                        />
                    </>
                )}
                <p className="mb-6"></p>
                {isSuccess && (
                    <>
                        <div className="bg-[#EFFFEA] text-[13px] p-[10px] flex justify-center gap-2 mb-8">
                            <CheckSuccess className="text-[16px]" />
                            <p>
                                Reset password successfully, you can now login
                                with your new password into{" "}
                            </p>
                        </div>
                    </>
                )}

                {!isSuccess ?
                    <>
                        <Button
                            isDisabled={
                                !!errForm.newPassword ||
                                !!errForm.conformPassword ||
                                !formData.newPassword ||
                                !formData.conformPassword ||
                                isLoading ||
                                isMatch
                            }
                            className="bg-custom-gradient relative"
                            onClick={handleSubmit}>
                            {isLoading ?
                                <p className="flex justify-center items-center">
                                    Loading...
                                    <Spinner size="sm" />
                                </p>
                            :   "Reset password"}
                        </Button>
                    </>
                :   <Button
                        className="bg-custom-gradient"
                        onClick={handleLogin}>
                        Back to login
                    </Button>
                }
                {isMatch && (
                    <p className="text-red text-[13px]">
                        Password is not match!
                    </p>
                )}
            </div>
        </div>
    );
}

export default Recoverpassword;
