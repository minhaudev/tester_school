"use client";
"use client";
import {CheckFillIcon, SuccessfulIcon, WarningIcon} from "@/assets/svgs";
import {CircleIcon} from "@/assets/svgs/icons";
import Propertie from "@/components/atoms/Properties/Propertie";
import Card from "@/components/molecules/Cards/Card";
import ServiceTime from "@/components/molecules/ServiceTimes/ServiceTime";
// import StatusNote from "@/components/molecules/StatusNote/StatusNote";
import Toast from "@/components/molecules/Toasts/Toast";
import {ServiceTimeEnum} from "@/enums/ServiceTimeEum";
import {ServiceTimeEnum} from "@/enums/ServiceTimeEum";
import {StatusEnum} from "@/enums/StatusNum";
import {ToastEnum} from "@/enums/ToastEnum";
import React, {useState} from "react";
import NVS from "@/assets/svgs/NVS.svg";
import QLKD from "@/assets/svgs/QLKD.svg";
import BGD from "@/assets/svgs/BGD.svg";
import KHSX from "@/assets/svgs/KHSX.svg";
import TKCU_DG from "@/assets/svgs/TKCU_SN.svg";
import TKCU_SN from "@/assets/svgs/TKCU_SN.svg";
import Delivery from "@/assets/svgs/Delivery.svg";
import Payment from "@/assets/svgs/Payment.svg";
import Product from "@/assets/svgs/Product.svg";
import Complete from "@/assets/svgs/Complete.svg";
import ProductionDiasble from "@/assets/svgs/Production_Diasble.svg";
import PaymentDiasble from "@/assets/svgs/Payment_Disable.svg";
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
import OfferData from "@/faker/Offer";
import Pending from "@/components/atoms/Pending/pending";
import {PendingEnum} from "@/enums/PendingEnum";
import PendingStatus from "@/components/PendingStatus/PendingStatus";
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

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup warning"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <Popup
                                    type={PopupEnum.Warning}
                                    title="Warning"
                                    button
                                    description={
                                        "Are you sure to change the permission"
                                    }></Popup>
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <Popup
                                    type={PopupEnum.Success}
                                    title="You have successfully created an account"
                                    description={
                                        "Your ID and password have been self-generated. Please copy the information to use"
                                    }></Popup>
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Request information"
                                    attachmentButton
                                    description="Please leave the note"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Note"
                                    description="Please leave the note"
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Request information"
                                    isLog
                                    logItems={LogData}
                                    attachmentButton
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Note"
                                    isConfirm
                                    description="Please leave the note"
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Approve order"
                                    description="Please leave the note"
                                    isApproveOrder
                                    approveOrder={ApproveOrderData}
                                    attachmentButton
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Popup request information"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <PopupRequest
                                    title="Are you sure to offer this order?"
                                    description="Information offered:"
                                    isOffer
                                    offer={OfferData}
                                />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Toast message"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <Toast
                                    type={ToastEnum.Warning}
                                    description={
                                        "Recommened products cannot exceed the selected number of rolls"
                                    }
                                />
                                <Toast
                                    type={ToastEnum.Success}
                                    description={
                                        "The number of rolls has been successfully selected"
                                    }
                                />
                                <Toast
                                    type={ToastEnum.Warning}
                                    description={
                                        "Recommened products cannot exceed the selected number of rolls"
                                    }
                                />
                                <Toast
                                    type={ToastEnum.Success}
                                    description={
                                        "The number of rolls has been successfully selected"
                                    }
                                />
                            </div>
                        }
                    />
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Status"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <WarningIcon />
                                <SuccessfulIcon />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Process"
                        content={
                            <div className="gap-8 items-center flex flex-col ">
                                <div className="gap-8 items-center flex">
                                    <Delivery className="w-8 h-8" />
                                    <Payment className="w-8 h-8" />
                                    <Product className="w-8 h-8" />
                                    <ProductionDiasble className="w-8 h-8" />
                                    <PaymentDiasble className="w-8 h-8" />
                                    <Done className="w-8 h-8" />
                                    <Complete className="w-8 h-8" />
                                </div>
                            </div>
                        }
                    />
                </div>
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
                                <Paginator
                                    length={totalPages}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                                <Paginator
                                    length={5}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                                {/* <Paginator
                                    length={totalPages}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                                <Paginator
                                    length={5}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                /> */}
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
                                <StatusNote
                                    type={StatusEnum.Warning}
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
                        title="Blue"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#5A92F7"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#5A92F7"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Pink"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#EB557F"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#EB557F"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Purple"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#A644F6"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#A644F6"
                                    width="20px"
                                    height="20px"
                                />
                            </div>
                        }
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title="Green"
                        content={
                            <div className="gap-8 items-center flex justify-center">
                                <CircleIcon
                                    fill="#70E28D"
                                    width="20px"
                                    height="20px"
                                />
                                <CheckFillIcon
                                    fill="#70E28D"
                                    width="20px"
                                    height="20px"
                                />
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
                <div className="flex-1">
                    <Card
                        title="Progresses"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <NVS />
                                <QLKD />
                                <BGD />
                                <KHSX />
                            </div>
                        }
                    />
                </div>
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
                <div className="flex-1">
                    <Card
                        title="Progresses"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <NVS />
                                <QLKD />
                                <BGD />
                                <KHSX />
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex-1">
                    <Card
                        title="Popup"
                        content={
                            <div className="gap-8 items-center flex flex-row justify-center">
                                <NVS />
                                <QLKD />
                                <BGD />
                                <KHSX />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
