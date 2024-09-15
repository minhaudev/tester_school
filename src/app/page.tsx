"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import LayoutContainer from "./LayoutContainer";
import Modal from "@/components/molecules/Modal";
import Toast from "@/components/molecules/Toast";
import {ToastType} from "@/enums/ToastEnum";

export default function Home() {
    // const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                router.push("/login");
            }
        };
        checkToken();
        const intervalId = setInterval(() => {
            checkToken();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [router]);

    // useEffect(() => {
    //     const isFirstLogin = localStorage.getItem("isFirstLogin");

    //     if (isLogin && !isFirstLogin) {
    //         console.log("322");
    //         <Toast
    //             onClose={() => {}}
    //             type={ToastType.Success}
    //             time={3000}
    //             description="Đăng nhập thành công"
    //         />;
    //         localStorage.setItem("isFirstLogin", "true");
    //     }
    // }, [isLogin]);

    return <LayoutContainer>layout</LayoutContainer>;
}
