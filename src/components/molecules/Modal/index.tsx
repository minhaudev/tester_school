import React, {useState, useEffect, useRef} from "react";
import {PopupEnum} from "@/enums/PopupEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_primary.svg";
import Close from "@/assets/svgs/Close_round.svg";
import Button from "@/components/atoms/Button";

interface ModalProps {
    isVisible: boolean;
    title?: string;
    onClose: () => void;
    onCancel?: () => void;
    onSave?: () => void;
    onConfirm?: () => void;
    children?: React.ReactNode;
    extraButton?: React.ReactNode;
    footer?: React.ReactNode;
    isConfirm?: boolean;
}

const Modal = ({
    isVisible,
    title,
    onClose,
    onCancel,
    onSave,
    children,
    footer,
    extraButton,
    isConfirm,
    onConfirm
}: ModalProps) => {
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
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-input transition-opacity opacity-50 duration-300 ${
                    isVisible ? "animate-fadeIn" : "animate-fadeOut"
                }`}></div>

            <div
                id="default-modal"
                aria-hidden="true"
                className={` fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
                    isVisible ? "animate-fadeIn" : "animate-fadeOut"
                }`}>
                <div
                    ref={popupRef}
                    className="w-[668px] relative  max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4  rounded-t dark:border-gray-600">
                            <h3 className="text-base !text-text font-medium ">
                                {title}
                            </h3>
                            <Button
                                isIcon
                                variant="dashed"
                                size="medium"
                                onClick={onClose}
                                typeFile={""}>
                                <Close className="w-5 h-5 text-gray-10" />
                            </Button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">{children}</div>

                        <div
                            className={`flex items-center justify-end gap-x-2 p-4 md:p-5 rounded-b dark:border-gray-600`}>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
