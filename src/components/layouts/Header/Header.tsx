"use client";
import Image from "next/image";
import React, {useState} from "react";
import logo from "@/assets/images/LUNA.png";
import Bell from "@/assets/svgs/Bell.svg";
import OrderNotice from "@/components/atoms/OrderNotice/OrderNotice";
import DropDown from "@/assets/svgs/Arrow_drop_down.svg";
import User from "@/assets/svgs/User_alt_light.svg";
import {dataOrderNotice} from "@/faker/OrderNotice";
import DropsDown from "@/components/atoms/DropsDown/DropsDown";
import Link from "next/link";

export default function Header() {
    const [language, setLanguage] = useState<string>("ENG");
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isNotice, setIsNotice] = useState<boolean>(false);

    const handleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "ENG" ? "VI" : "ENG"));
    };
    const handleNotice = () => {
        setIsNotice(!isNotice);
    };
    const handleClickDropDown = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className="">
                <div className="h-14 w-full bg-white flex justify-between item-center px-6 border-b border-stroke">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <Image src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="flex gap-[16px] justify-center items-center">
                        <div className="relative">
                            <span
                                onClick={handleNotice}
                                className=" absolute cursor-pointer rounded-full ml-3 z-10  px-[4px] text-[8px] text-white bg-warning">
                                {dataOrderNotice.length > 10
                                    ? "9+"
                                    : dataOrderNotice.length}
                            </span>
                            <span onClick={handleNotice}>
                                <Bell className="w-6 h-6 cursor-pointer" />
                            </span>
                            {isNotice && (
                                <OrderNotice dataNotice={dataOrderNotice} />
                            )}
                        </div>

                        <div className="w-6 text-center">
                            <p
                                className={`cursor-pointer transition text-[13px] font-normal leading-[15.51px] text-text duration-300 ease-in-out transform`}
                                onClick={handleLanguage}>
                                {language}
                            </p>
                        </div>

                        <div className="h-[32px] w-[1px] bg-stroke"></div>
                        <div className="flex gap-[9px] items-center">
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
