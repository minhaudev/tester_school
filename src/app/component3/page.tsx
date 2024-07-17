"use client";
import Propertie from "@/components/atoms/Properties/Propertie";
import Card from "@/components/molecules/Cards/Card";
import ServiceTime from "@/components/molecules/ServiceTimes/ServiceTime";
import Success from "@/assets/svgs/Success_toast.svg";
import Warning from "@/assets/svgs/Warning_toast.svg";
import Toast from "@/components/molecules/Toasts/Toast";
import {ServiceTimeEnum} from "@/enums/ServiceTimeEum";
import {StatusEnum} from "@/enums/StatusNum";
import React, {useState} from "react";
import Done from "@/assets/svgs/Done.svg";
import {ValidityTimeEnum} from "@/enums/ValidityTimeEnum";
import ValidityTime from "@/components/molecules/ValidityTimes/ValidityTime";
import Paginator from "@/components/molecules/Paginators/Paginator";
import RadioButton from "@/components/atoms/RadioButton/RadioButton";
import Checkbox from "@/components/atoms/Checkbox/Checkbox";
import Popup from "@/components/molecules/Popup/Popup";
import {PopupEnum} from "@/enums/PopupEnum";
import PopupRequest from "@/components/molecules/PopupRequest/PopupRequest";
import LogData from "@/faker/LogData";
import App from "next/app";
import ApproveOrderData from "@/faker/ApproveOrder";
import Pending from "@/components/atoms/Pending/pending";
import {PendingEnum} from "@/enums/PendingEnum";
import PendingStatus from "@/components/PendingStatus/PendingStatus";
import StatusNote from "@/components/molecules/StatusNote/StatusNote";
import OfferData from "@/faker/OfferData";
import Button from "@/components/atoms/Button/Button";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {usePopup} from "@/context/PopupContext";
const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const [selected, setSelected] = useState("option1");
    const [checkedValues, setCheckedValues] = useState<Set<string>>(new Set());
    const [checked, setChecked] = useState<boolean>(true);
    const handleCheckboxChange = (value: string) => {
        setCheckedValues((prev) => {
            const newCheckedValues = new Set(prev);
            if (newCheckedValues.has(value)) {
                newCheckedValues.delete(value);
            } else {
                newCheckedValues.add(value);
            }
            return newCheckedValues;
        });
    };
    const [toastVisible, setToastVisible] = useState(false);
    const handleShowToast = () => {
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000); // Automatically hide after 3 seconds
    };
    const handleHideToast = () => {
        setToastVisible(false);
    };
    const showToastMessage = () => {};
    const {showPopup, setShowPopup} = usePopup();
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const handleCancel = () => {
        console.log("Cancelled");
        setShowPopup(false);
    };
    const handleConfirm = () => {
        setShowConfirmPopup(true);
    };
    return (
        <div className="flex flex-col gap-8">
           
            
            
            <div className="flex flex-row gap-8">
                <div className="flex-1"></div>
                <div className="flex-1">
                    <Card
                        title="Pagination"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <Paginator
                                    length={totalPages}
                                    currentPage={currentPage}
                                    buttonDouble
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Status note"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                               
                                <StatusNote
                                    type={StatusEnum.Warning}
                                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                                />
                                <StatusNote
                                    type={StatusEnum.Normal}
                                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                                />
                                <StatusNote
                                    type={StatusEnum.Success}
                                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Radio"
                        content={
                            <div className="gap-8 items-center flex">
                                <RadioButton
                                    checked={selected === "option2"}
                                    onChange={() => setSelected("option2")}
                                />
                                <RadioButton
                                    checked={selected === "option1"}
                                    disabled
                                    onChange={() => setSelected("option1")}
                                />
                                <RadioButton
                                    checked={selected === "option3"}
                                    disabled
                                    onChange={() => setSelected("option1")}
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Checkbox"
                        content={
                            <div className="gap-8 items-center flex">
                                <Checkbox id={"1"} description={""} />
                                <Checkbox id={"2"} description={""} />
                                <Checkbox id={"3"} description={""} />
                                <Checkbox disable id={"3"} description={""} />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Pending"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <Pending
                                    type={PendingEnum.Current}
                                    description={"CURRENT"}
                                />
                                <Pending
                                    type={PendingEnum.Expired}
                                    description={"EXPIRED"}
                                />
                                <Pending
                                    type={PendingEnum.Approve}
                                    description={"APPROVE"}
                                />
                                <Pending
                                    type={PendingEnum.Denied}
                                    description={"DENIED"}
                                />
                                <Pending
                                    type={PendingEnum.Pending}
                                    description={"PENDING"}
                                />
                                <Pending
                                    type={PendingEnum.Draft}
                                    description={"DRAFT"}
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Pending Status"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <PendingStatus
                                    disable
                                    description={"Pending"}
                                />
                                <PendingStatus description={"Pending"} />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Properties"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <Propertie title={"Approval request denied"} />
                                <Propertie title={"Out-of-stock"} />
                                <Propertie title={"Approval voided"} />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Status"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <Propertie
                                    status
                                    title={"Approval request denied"}
                                />
                                <Propertie status title={"Out-of-stock"} />
                                <Propertie status title={"Approval voided"} />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1"></div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Service time"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <ServiceTime
                                    type={ServiceTimeEnum.Success}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                                <ServiceTime
                                    type={ServiceTimeEnum.Warning}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                                <ServiceTime
                                    type={ServiceTimeEnum.Error}
                                    start={"01:24:45"}
                                    end={"10:00:00"}
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Status"
                        content={
                            <div className="gap-8 items-center flex flex-col">
                                <ValidityTime
                                    type={ValidityTimeEnum.Success}
                                    start={"01:24:45"}
                                />
                                <ValidityTime
                                    type={ValidityTimeEnum.Warning}
                                    start={"01:24:45"}
                                />
                                <ValidityTime
                                    type={ValidityTimeEnum.Error}
                                    start={"01:24:45"}
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1"></div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default page;
