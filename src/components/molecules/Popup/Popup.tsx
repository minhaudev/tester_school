import {WarningIcon} from "@/assets/svgs";
import {PopupEnum} from "@/enums/PopupEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_primary.svg";
import Time from "@/assets/svgs/Time.svg";
import Close from "@/assets/svgs/Close_round.svg";
import React from "react";
import Button from "@/components/atoms/Button/Button";

interface PopupValue {
    color: string;
    title: string;
    border: string;
    background: string;
    icon?: React.ReactNode;
}

interface PopupProps {
    type: PopupEnum;
    title: string;
    description: string;
    className?: string;
    button?: boolean;
}

export const PopupValue: Record<PopupEnum, PopupValue> = {
    [PopupEnum.Warning]: {
        color: "text-blue-bold",
        title: "Warning",
        border: "border-warning",
        background: "bg-red-bold",
        icon: <Warning className="w-20 h-20 mx-auto mb-2 mt-[53px]" />
    },
    [PopupEnum.Success]: {
        color: "text-blue-bold",
        title: "Successful",
        border: "border-success",
        background: "bg-blue-bold",
        icon: <Success className="w-20 h-20 mx-auto mb-2" />
    }
};

const Popup = ({type, description, className, button = false}: PopupProps) => {
    const {color, title, border, icon, background} = PopupValue[type];

    return (
        <div
            id="popup-modal"
            className={`z-50 relative justify-center items-center rounded-lg w-full max-w-[554px] min-h-[279px] h-[calc(100%-1rem)] max-h-full text-center bg-white ${className}`}>
            <button
                type="button"
                className="absolute top-6 right-6 w-5 h-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal">
                <Close />
            </button>
            <div className={button ? "" : "mt-[69px]"}>
                {icon}
                <h3
                    className={`mb-2 text-primary text-base font-medium ${color}`}>
                    {title}
                </h3>
                <h3 className="text-[13px] font-normal text-gray-500 dark:text-gray-400">
                    {description}
                </h3>
            </div>
            {button && (
                <div className="flex flex-row gap-x-2.5 justify-center mt-6">
                    <Button size="largexl" variant="secondary">
                        No
                    </Button>

                    <Button size="largexl" variant="primary-dark">
                        Yes
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Popup;
