"use client";
import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";
import Modal from "@/components/molecules/Modal";
import {usePopup} from "@/context/PopupContext";
import React, {useState} from "react";
const ModalComp = () => {
    const {showPopup, setShowPopup} = usePopup();
    const handleCancel = () => {
        setShowPopup(false);
        console.log("cancel");
    };
    const handleSave = () => {
        console.log("save");
        setShowPopup(false);
    };
    const handleConfirm = () => {
        console.log("confirm");
    };

    return (
        <div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <Button
                                    variant="secondary"
                                    onClick={() => setShowPopup(true)}
                                    size={"small"}
                                    typeFile={""}>
                                    Show Modal
                                </Button>
                                {showPopup && (
                                    <Modal
                                        isVisible={true}
                                        onClose={() => setShowPopup(false)}
                                        onCancel={handleCancel}></Modal>
                                )}
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalComp;
