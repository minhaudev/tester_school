"use client";
import Button from "@/components/atoms/Button";
import Popup from "@/components/molecules/Popup/Popup";
import Toast from "@/components/molecules/Toast";

import {usePopup} from "@/context/PopupContext";
import {PopupEnum} from "@/enums/PopupEnum";
import React, {useState} from "react";

const PopupComponent = () => {
    const {showPopup, setShowPopup} = usePopup();
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const handleCancel = () => {
        setShowPopup(false);
    };

    const handleConfirm = () => {
        setShowPopup(false);
        setShowConfirmPopup(true);
    };

    const handleCloseConfirmPopup = () => {
        setShowConfirmPopup(false);
    };

    return (
        <div>
            <Button variant="secondary" onClick={() => setShowPopup(true)}>
                Show popup
            </Button>
            {showPopup && (
                <Popup
                    isVisible={showPopup}
                    type={PopupEnum.Warning}
                    title="Are you sure?"
                    description="You won't be able to revert this!"
                    button={true}
                    onClose={() => setShowPopup(false)}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}
            {showConfirmPopup && (
                <Popup
                    isVisible={showConfirmPopup}
                    type={PopupEnum.Success}
                    title="Deleted!"
                    description="Your file has been deleted."
                    onClose={handleCloseConfirmPopup}
                />
            )}
        </div>
    );
};

export default PopupComponent;
