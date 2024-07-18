import React, {ReactNode} from "react";
import Delete from "@/assets/svgs/Close_round_light.svg";
import {twMerge} from "tailwind-merge";

interface Props {
    children?: ReactNode;
    isOpen?: boolean;
    name?: string;
    subName?: string;
    onClose?: () => void;
}

export default function Drawer({
    children,
    isOpen,
    name,
    subName,
    onClose
}: Props) {
    return (
        <div
            onClick={onClose}
            className={twMerge(
                "w-full bg-[rgba(0,0,0,0.3)] transition duration-400 fixed inset-0",
                isOpen ? "opacity-100 z-50" : "opacity-0 -z-50"
            )}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={twMerge(
                    "max-w-[448px] w-full transition duration-300 bg-white min-h-screen h-full absolute top-0 right-0 z-50",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}>
                <div className="py-5 px-4 flex justify-between items-center">
                    <div className="">
                        <p className="text-primary font-medium text-[16px] leading-[19.09px] mb-1">
                            {name}
                        </p>
                        <p className="font-normal text-[13px] leading-[15.51px] text-gray">
                            {subName}
                        </p>
                    </div>
                    <Delete
                        className="text-[#3A3B3C] cursor-pointer w-8 h-8 p-2 inline-block"
                        onClick={onClose}
                    />
                </div>
                {children}
            </div>
        </div>
    );
}
