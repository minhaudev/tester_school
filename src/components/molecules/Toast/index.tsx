import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_toast.svg";
import Close from "@/assets/svgs/Close_round.svg";
import React, {useEffect, useState} from "react";
import Button from "@/components/atoms/Button/Button";

interface ToastValue {
    color: string;
    title: string;
    border: string;
    background: string;
    icon?: React.ReactNode;
}

interface ToastProps {
    time: number;
    type: ToastType;
    description: string;
    className?: string;
    visible: boolean;
    onClose: () => void;
    position?: ToastPosition;
}

export const ToastValue: Record<ToastType, ToastValue> = {
    [ToastType.Warning]: {
        color: "text-red",
        title: "Warning",
        border: "border-warning",
        background: "bg-red-bold",
        icon: <Warning className="w-10 h-10 " />
    },
    [ToastType.Success]: {
        color: "text-blue-bold",
        title: "Successful",
        border: "border-success",
        background: "bg-blue-bold",
        icon: <Success className="w-10 h-10" />
    }
};

const positionClasses: Record<ToastPosition, string> = {
    [ToastPosition.Top_Left]: "top-4 left-4",
    [ToastPosition.Top_Right]: "top-4 right-4",
    [ToastPosition.Bottom_Left]: "bottom-4 left-4",
    [ToastPosition.Bottom_Right]: "bottom-4 right-4"
};

const Toast = ({
    time = 3000,
    type,
    description,
    visible,
    onClose,
    position = ToastPosition.Top_Right
}: ToastProps) => {
    const {color, title, background, icon} = ToastValue[type];
    const [showToast, setShowToast] = useState(visible);
    useEffect(() => {
        let hideTimer: NodeJS.Timeout;
        if (visible) {
            setShowToast(true);
            hideTimer = setTimeout(() => {
                setShowToast(false);
                onClose();
            }, time); // Hide toast after 3000 milliseconds
        } else {
            const fadeOutTimer = setTimeout(() => setShowToast(false), 300); // Match the animation duration
            return () => clearTimeout(fadeOutTimer);
        }
        return () => clearTimeout(hideTimer);
    }, [visible, onClose]);
    const positionClass = positionClasses[position] || ""; // Default to empty string if position is invalid
    const className =  showToast ? "animate-fadeIn" : "animate-fadeOut";
    return (
        <div
            id="toast-default"
            className={`fixed z-50 ${positionClass} flex items-stretch max-w-md w-full text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 ${className}`}
            role="alert">
            <div
                className={`flex-shrink-0 w-1 rounded-r-lg ${background}`}></div>
            <div className="w-full flex flex-row items-start my-5 mx-[15px]">
                <div className="inline-flex items-center justify-center flex-shrink-0 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    {icon}
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col ml-3.5 w-full gap-[6px]">
                        <div className="flex justify-around">
                            <div className={`text-sm font-normal ${color}`}>
                                {title}
                            </div>
                            <Button
                                isIcon
                                variant="dashed"
                                size="medium"
                                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                onClick={onClose}>
                                <Close className="w-5 h-5 text-gray-10" />
                            </Button>
                        </div>
                        <div className="text-xs font-normal w-[95%] text-justify">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toast;
