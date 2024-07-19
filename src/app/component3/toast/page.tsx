"use client";
import Button from "@/components/atoms/Button";
import Toast from "@/components/molecules/Toast";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import React, {useState} from "react";

const ToastComponent = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const handleShowToast = () => {
        setToastVisible(true);
    };
    const handleHideToast = () => {
        setToastVisible(false);
    };
    return (
        <div>
            <Button
                variant="secondary"
                onClick={handleShowToast}
                typeFile={""}
                size={"small"}></Button>
            {toastVisible && (
                <Toast
                    time={1000}
                    visible={toastVisible}
                    position={ToastPosition.Bottom_Left}
                    type={ToastType.Warning}
                    onClose={handleHideToast}
                    description="Recommened products cannot exceed the selected number of rollsRecommened products cannot exceed the selected number of rolls"
                />
            )}
        </div>
    );
};

export default ToastComponent;
