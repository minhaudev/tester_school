import {WarningIcon} from "@/assets/svgs";
import {PopupEnum} from "@/enums/PopupEnum";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_primary.svg";
import Time from "@/assets/svgs/Time.svg";
import Close from "@/assets/svgs/Close_round.svg";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import Attachment from "@/assets/svgs/Attachment.svg";
import Image from "next/image";
import ApproveOrderData from "@/faker/ApproveOrder";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import OfferData from "@/faker/Offer";
import Information from "@/assets/svgs/Infomation.svg";
import {Offer} from "@/interfaces/Offer";

interface PopupProps {
    attachmentButton?: boolean;
    title: string;
    description?: string;
    className?: string;
    button?: boolean;
    isLog?: boolean;
    logItems?: LogItem[];
    isConfirm?: boolean;
    isApproveOrder?: boolean;
    approveOrder?: ApproveOrder[];
    isOffer?: boolean;
    offer?: Offer[];
}

const PopupRequest = ({
    attachmentButton = false,
    title,
    description,
    className = "",
    button = false,
    isLog = false,
    logItems = [],
    isConfirm = false,
    isApproveOrder = false,
    approveOrder = [],
    isOffer = false,
    offer = []
}: PopupProps) => {
    return (
        <div
            id="popup-modal"
            className={`z-50 ${
                isLog ? "" : "px-6"
            } shadow-lg py-6 justify-center items-center rounded-lg w-full max-w-[668px] min-h-[279px] h-[calc(100%-1rem)] max-h-full text-center bg-white ${className}`}>
            <div
                className={`flex flex-row justify-between items-center ${
                    isLog ? "px-6" : ""
                }`}>
                <h3 className="mb-2 text-text text-base font-medium">
                    {title}
                </h3>
                <button
                    type="button"
                    className="w-5 h-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg inline-flex justify-center items-center"
                    data-modal-hide="popup-modal">
                    <Close />
                </button>
            </div>

            {description && !isOffer && (
                <h3 className="text-[13px] font-normal text-text-light dark:text-gray-400 mb-4 float-start">
                    {description}
                </h3>
            )}

            {offer && isOffer && (
                <div className="flex flex-col justify-start text-start gap-x-2.5">
                    <h3 className="text-[13px] font-medium text-text-light dark:text-gray-400 mt-3 mb-4 float-start">
                        {description}
                    </h3>
                    <div className="flex flex-col gap-y-2.5">
                        {OfferData.map((offer, offerIndex) => (
                            <div
                                key={offerIndex}
                                className="flex flex-col gap-y-2.5">
                                <p className="text-xs font-normal text-input">
                                    {offer.title}
                                </p>
                                {offer.detail.map((detail, detailIndex) => (
                                    <div className="flex flex-row items-center gap-x-0.5 ">
                                        <Information />
                                        <p
                                            className="text-xs font-normal text-secondary"
                                            key={detailIndex}>
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}{" "}
                    </div>
                </div>
            )}
            {logItems.length > 0 &&
                logItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-highlight flex flex-col px-6 py-4 items-start">
                        <div className="flex flex-row justify-between items-start w-full mb-2">
                            <div className="flex items-center space-x-2">
                                <Image
                                    width={31}
                                    height={32}
                                    src={item.avatar}
                                    alt={item.user}
                                    className="rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-medium text-[13px]">
                                        {item.user}
                                    </h3>
                                    <p className="text-unit text-[12px] font-normal">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-unit text-[12px] font-medium">
                                {item.time}
                            </p>
                        </div>
                        <p className="text-text-light text-[13px] font-normal mb-2">
                            {item.content}
                        </p>
                        {item.file && (
                            <div className="flex items-center text-blue-600">
                                <Attachment className="mr-1 w-4 h-4" />
                                <span className="text-[13px] font-normal text-primary">
                                    {item.file}
                                </span>
                            </div>
                        )}
                    </div>
                ))}

            <div
                className={`w-full max-w-full mb-4 mt-4 ${
                    isLog ? "px-6" : ""
                }`}>
                <textarea
                    className={`peer w-full resize-none rounded-[7px] border border-stroke border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 ${
                        isLog ? "min-h-20"
                        : isApproveOrder ? "min-h-[115px]"
                        : "min-h-[169px]"
                    }
                    `}
                    placeholder="Enter"
                />
            </div>
            {isOffer && (
                <div className="flex flex-col justify-start text-start">
                    <h3 className="float-left text-[13px] font-medium text-text-light mb-2">
                        Validate time
                    </h3>
                    <div className="flex flex-row gap-x-3 mb-4">
                        <input
                            placeholder="hh"
                            className="w-[54px] h-[32px] rounded-sm border text-center px-[15px] py-1 border-stroke"></input>
                        <h1>:</h1>
                        <input
                            placeholder="mm"
                            className="w-[54px] h-[32px] rounded-sm border border-stroke px-[15px] py-1"></input>
                    </div>
                    <Button
                        variant="secondary"
                        color="blue-dark"
                        className="max-w-[93px]"
                        prefixIcon={<Attachment />}>
                        file.docx
                    </Button>
                    <div className="flex flex-row gap-x-2.5 items-end justify-end mt-4">
                        <Button variant="secondary">Cancel</Button>
                        <Button variant={"primary-light"}>Offer</Button>
                    </div>
                </div>
            )}
            {isApproveOrder && !isOffer && (
                <div>
                    <Button
                        size="small"
                        variant="file"
                        color="blue-dark"
                        prefixIcon={<Attachment />}>
                        Insert attachment
                    </Button>
                    <div className="mt-4 flex flex-col gap-x-4">
                        {ApproveOrderData.map((item, index) => (
                            <Checkbox
                                key={index}
                                id={`approve-order-${index}`}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <div className="flex flex-row gap-x-2.5 float-end mt-[35px]">
                        <Button variant="secondary">Cancel</Button>
                        <Button size="small" variant="primary-dark">
                            {isConfirm ? "Confirm" : "Save"}
                        </Button>
                    </div>
                </div>
            )}

            {!isApproveOrder && !isOffer && (
                <div
                    className={`flex flex-row ${
                        attachmentButton ? "justify-between" : "justify-end"
                    } ${isLog ? "px-6" : ""}`}>
                    {attachmentButton && (
                        <Button
                            variant="file"
                            color="blue-dark"
                            prefixIcon={<Attachment />}>
                            Insert attachment
                        </Button>
                    )}
                    <div className="flex flex-row gap-x-2.5">
                        <Button variant="secondary">Cancel</Button>
                        <Button  variant="primary-dark">{isConfirm ? "Confirm" : "Save"}</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupRequest;
