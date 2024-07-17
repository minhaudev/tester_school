"use client";
import Button from "@/components/atoms/Button/Button";
import Toast from "@/components/molecules/Toasts/Toast";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import React, {useState} from "react";

const ToastComponent = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const handleShowToast = () => {
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    };
    const handleHideToast = () => {
        setToastVisible(false);
    };
    return (
        <div>
            <Button variant="secondary" onClick={handleShowToast}>
                Show Toast
            </Button>
            {toastVisible && (
                <Toast
                    visible={toastVisible}
                    position={ToastPosition.Top_Right}
                    type={ToastType.Warning}
                    onClose={handleHideToast}
                    description="Recommened products cannot exceed the selected number of rolls"
                />
            )}
        </div>
    );
};

export default ToastComponent;
