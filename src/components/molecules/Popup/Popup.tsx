import React, {useState, useEffect, useRef} from "react";
import {PopupEnum} from "@/enums/PopupEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_primary.svg";
import Close from "@/assets/svgs/Close_round.svg";
import Button from "@/components/atoms/Button/Button";

interface PopupValue {
    color: string;
    title: string;
    border: string;
    background: string;
    icon?: React.ReactNode;
}

const PopupValue: Record<PopupEnum, PopupValue> = {
    [PopupEnum.Warning]: {
        color: "text-blue-bold",
        title: "Warning",
        border: "border-warning",
        background: "bg-red-bold",
        icon: <Warning className="w-20 h-20 mx-auto mb-2 mt-[23px]" />
    },
    [PopupEnum.Success]: {
        color: "text-blue-bold",
        title: "Successful",
        border: "border-success",
        background: "bg-blue-bold",
        icon: <Success className="w-20 h-20 mx-auto mb-2" />
    }
};

interface PopupProps {
    isVisible: boolean;
    type: PopupEnum;
    title: string;
    description: string;
    button?: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}

const Popup = ({
    isVisible,
    type,
    title,
    description,
    button,
    onClose,
    onCancel,
    onConfirm
}: PopupProps) => {
    const {color, icon} = PopupValue[type];
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible) {
            setShowPopup(true);
        } else {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onClose]);

    if (!showPopup && !isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-input transition-opacity opacity-50 duration-300 ${
                    isVisible ? "animate-fadeIn" : "animate-fadeOut"
                }`}></div>

            {/* Popup Content */}
            <div
                className={` fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
                    isVisible ? "animate-fadeIn" : "animate-fadeOut"
                }`}>
                <div
                    ref={popupRef}
                    className={`relative bg-white rounded-lg shadow-lg h-[279px] w-[554px]  p-6 z-50 flex flex-col justify-center`}>
                    <button
                        type="button"
                        className="absolute top-4 right-4 w-6 h-6 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-full "
                        onClick={onClose}>
                        <Close className="w-4 h-4" />
                    </button>
                    <div className="text-center">
                        {icon}
                        <h3 className={`mb-2 text-base font-medium ${color}`}>
                            {title}
                        </h3>
                        <p className="text-sm font-normal text-gray-500">
                            {description}
                        </p>
                    </div>
                    {button && (
                        <div className="flex justify-center gap-x-4 mt-6">
                            <Button
                                className="w-[147px]"
                                size="semi"
                                variant="secondary"
                                onClick={onCancel}>
                                No
                            </Button>
                            <Button
                                className="w-[147px]"
                                size="semi"
                                variant="primary-dark"
                                onClick={onConfirm}>
                                Yes
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Popup;
