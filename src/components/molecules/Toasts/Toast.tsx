import {WarningIcon} from "@/assets/svgs";
import {ToastEnum} from "@/enums/ToastEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_toast.svg";
import Time from "@/assets/svgs/Time.svg";
import Close from "@/assets/svgs/Close_round.svg";
import React from "react";
import Button from "@/components/atoms/Button/Button";

interface ToastValue {
    color: string;
    title: string;
    border: string;
    background: string;
    icon?: React.ReactNode;
}

interface ToastProps {
    type: ToastEnum;
    description: string;
    className?: string;
}

export const ToastValue: Record<ToastEnum, ToastValue> = {
    [ToastEnum.Warning]: {
        color: "text-red",
        title: "Warning",
        border: "border-warning",
        background: "bg-red-bold",
        icon: <Warning className="w-10 h-10" />
    },
    [ToastEnum.Success]: {
        color: "text-blue-bold",
        title: "Successful",
        border: "border-success",
        background: "bg-blue-bold",
        icon: <Success className="w-10 h-10" />
    }
};

const Toast = ({type, description, className}: ToastProps) => {
    const {color, title, border, icon, background} = ToastValue[type];

    return (
        <div
            id="toast-default"
            className="flex items-stretch max-w-md w-full text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div
                className={`flex-shrink-0 w-1  rounded-r-lg ${background}`}></div>
            <div className="w-full flex flex-row items-start my-5 mx-[15px] ">
                <div className="inline-flex items-center justify-center flex-shrink-0  text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    {icon}
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col ml-3.5 w-full gap-[6px]">
                        <div className="flex justify-around">
                            <div className={`text-sm font-normal ${color}`}>
                                {title}
                            </div>
                            <button
                                type="button"
                                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                data-dismiss-target="#toast-default"
                                aria-label="Close">
                                <span className="sr-only">Close</span>
                                <Close />
                            </button>
                        </div>

                        <div className=" text-xs font-normal">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;
