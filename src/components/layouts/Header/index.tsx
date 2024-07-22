"use client";
import DropDown from "@/assets/svgs/Arrow_drop_down.svg";
import Bell from "@/assets/svgs/Bell.svg";
import User from "@/assets/svgs/User_alt_light.svg";
import DropsDown from "@/components/atoms/Dropdown";
import OrderNotice from "@/components/atoms/OrderNotice/OrderNotice";
import {dataOrderNotice} from "@/faker/OrderNotice";
import {Notice} from "@/interfaces/notice";
import {formatNotice} from "@/utils/formatNotice";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import "../../../app/globals.css";

interface NoticeResponse {
    total?: number;
    data?: Notice[];
}

export default function Header() {
    const [language, setLanguage] = useState<string>("ENG");
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isNotice, setIsNotice] = useState<boolean>(false);
    const noticeRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [notices, setNotices] = useState<NoticeResponse>();

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

    useEffect(() => {
        setNotices(dataOrderNotice);
    }, []);

    return (
        <>
            <div className="w-full sticky top-0 z-50">
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
                            {notices?.data?.length !== 0 ?
                                <span
                                    onClick={handleNotice}
                                    className="absolute cursor-pointer rounded-full ml-3 z-10 px-[4px] text-[8px] text-white bg-red">
                                    {formatNotice(notices?.total ?? 0)}
                                </span>
                            :   ""}

                            <span onClick={handleNotice}>
                                <Bell className="w-6 h-6 cursor-pointer" />
                            </span>
                            {isNotice && (
                                <OrderNotice
                                    total={notices?.total}
                                    dataNotice={notices?.data}
                                />
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
