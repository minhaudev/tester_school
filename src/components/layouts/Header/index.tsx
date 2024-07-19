"use client";
import Image from "next/image";
import React, {useState, useEffect, useRef} from "react";
import logo from "@/assets/images/LUNA.png";
import Bell from "@/assets/svgs/Bell.svg";
import OrderNotice from "@/components/atoms/OrderNotice/OrderNotice";
import DropDown from "@/assets/svgs/Arrow_drop_down.svg";
import User from "@/assets/svgs/User_alt_light.svg";
import {dataOrderNotice} from "@/faker/OrderNotice";
import DropsDown from "@/components/atoms/Dropdown";
import Link from "next/link";
import "../../../app/globals.css";
export default function Header() {
    const [language, setLanguage] = useState<string>("ENG");
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isNotice, setIsNotice] = useState<boolean>(false);
    const noticeRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {total, notifications} = dataOrderNotice;

    const handleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "ENG" ? "VI" : "ENG"));
    };

    const handleNotice = () => {
        setIsNotice(!isNotice);
    };

    const handleClickDropDown = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                noticeRef.current &&
                !noticeRef.current.contains(event.target as Node)
            ) {
                setIsNotice(false);
            }
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsClicked(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="w-full">
                <div className="h-14 w-full bg-white flex justify-between items-center px-6 border-b border-stroke">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <p className="uppercase text-[32px] font-[400] leading-[33.76px] text-primary  font-wendy-one">
                                Luna
                            </p>
                        </Link>
                    </div>
                    <div className="flex gap-[16px] justify-center items-center">
                        <div className="relative" ref={noticeRef}>
                            {notifications.length !== 0 ?
                                <span
                                    onClick={handleNotice}
                                    className="absolute cursor-pointer rounded-full ml-3 z-10 px-[4px] text-[8px] text-white bg-red">
                                    {notifications.length > 10 ?
                                        "9+"
                                    :   notifications.length}
                                </span>
                            :   ""}

                            <span onClick={handleNotice}>
                                <Bell className="w-6 h-6 cursor-pointer" />
                            </span>
                            {isNotice && (
                                <OrderNotice dataNotice={notifications} />
                            )}
                        </div>

                        <div className="w-6 text-center">
                            <p
                                className="cursor-pointer transition text-[13px] font-normal leading-[15.51px] text-text duration-300 ease-in-out transform"
                                onClick={handleLanguage}>
                                {language}
                            </p>
                        </div>

                        <div className="h-[32px] w-[1px] bg-stroke"></div>
                        <div
                            className="flex gap-[9px] items-center"
                            ref={dropdownRef}>
                            <User className="w-8 h-8" />
                            <div>
                                <p className="text-text text-[13px] leading-4">
                                    Nguyễn Văn A
                                </p>
                                <p className="text-unit text-[12px]">
                                    Chuyên viên kinh doanh
                                </p>
                            </div>
                            <div
                                className="relative"
                                onClick={handleClickDropDown}>
                                <DropDown className="w-6 h-5 cursor-pointer relative" />
                                {isClicked && <DropsDown />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
