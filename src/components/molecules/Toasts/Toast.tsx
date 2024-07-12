import {WarningIcon} from "@/assets/svgs";
import {ToastEnum} from "@/enums/ToastEnum";
import React from "react";

interface ToastValue {
    title: string;
    border: string;
}

interface ToastProps {
    type: ToastEnum;
    description: string;
    icon?: React.ReactNode;
    className?: string;
}

export const ToastValue: Record<ToastEnum, ToastValue> = {
    [ToastEnum.Success]: {
        title: "Successful",
        border: "border-success"
    },
    [ToastEnum.Warning]: {
        title: "Warning",
        border: "border-warning"
    }
};

const Toast = ({type, description, icon, className}: ToastProps) => {
    const {title, border} = ToastValue[type];

    return (
        <div
            id="toast-message-cta"
            className={`w-full p-4 text-gray-500 rounded-r-lg bg-white shadow dark:bg-gray-800 border-l-4 `}
            role="alert">
            <div className={`w-1 border-b-error`}></div>

            <div className="flex align-middle">
                {icon || <WarningIcon fill={border} />}
                {/* Use provided icon or default */}
                <div className="ms-3 text-sm font-normal flex  justify-start">
                    <div className="flex flex-col">
                        <span className="mb-1 text-sm font-semibold text-gray-900">
                            {title}
                        </span>

                        <div className="mb-2 font-normal text-xs">
                            {description}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-message-cta"
                        aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toast;
