"use client";
import SaveDraftIcon from "@/assets/svgs/save_draft.svg";
import AddIcon from "@/assets/svgs/add_light_larger.svg";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import ProcessFlow from "@/components/molecules/ProcessFlow";
import Standard from "@/components/molecules/Standard/Index";
import Toast from "@/components/molecules/Toast";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import { ToastPosition, ToastType } from "@/enums/ToastEnum";
import { processFlowData } from "@/faker";
import { useState } from "react";
import LayoutContainer from "./LayoutContainer";
import TableExample from "./TableExample";
import ServiceTime from "@/components/atoms/ServiceTime";
import { dataList } from "@/faker/AccountBalance";
import { isValidDate } from "@/hooks/useValidDate";
import { usePopup } from "@/context/PopupContext";
import Modal from "@/components/molecules/Modal";
import Drawer from "@/components/molecules/Drawer";
import StatusNote from "@/components/molecules/StatusNote";
import { StatusEnum } from "@/enums/StatusNum";
import RadioButton from "@/components/atoms/RadioButton/RadioButton";
import Paginator from "@/components/molecules/Pagination";
import Checkbox from "@/components/atoms/Checkbox";
import Propertie from "@/components/atoms/Properties";
import { PendingEnum } from "@/enums/PendingEnum";
import Pending from "@/components/atoms/Pending";
import Tooltip from "@/components/atoms/Tooltip";
import DataTable from "@/components/atoms/Datatable";
import { twMerge } from "tailwind-merge";
export default function Home() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [fileDetails, setFileDetails] = useState([]);
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date) {
            setInputValue(date.toLocaleDateString());
        } else {
            setInputValue("");
        }
    };
    const handleFileDetailsChange = (details: any) => {
        setFileDetails(details);
    };
    const handleOnChange = (e: any) => {
        setInputValue(e.target.value);
    };
    let startDate = new Date()
    let endDate = new Date()
    const start = "2024-07-26T06:58:19.516Z"
    const end = "2024-07-26T11:33:58.936Z"
    if (isValidDate(start) && isValidDate(end)) {
        startDate = new Date(Date.parse(start));
        endDate = new Date(Date.parse(end));
    } else {
        console.log("false");
    }
    const handleEndIn = () => {
    };
    const { showPopup, setShowPopup } = usePopup();
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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenToast, setIsOpenToast] = useState(false);
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    const handleCloseToast = () => {
        setIsOpenToast(false);
    };
    const [valueSelect, setValueSelect] = useState("");
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(e.target.value);
    };
    const [selected, setSelected] = useState("option1");

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (id: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

   
    return (
        <LayoutContainer>
            <Standard />
            <Input
                isCalendarSuffix
                placeholder="MM/DD/YY"
                handleOnChange={handleOnChange}
                value={inputValue}
                showCalendar={showCalendar}
                setShowCalendar={setShowCalendar}
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                size="large"
                variant="input"
                optionSelect={["avc", "bc", "vc"]}
            />
            <CustomerBalanceInfo />
            <div className=" flex  flex-row items-start gap-8 p-[10px] m-[20px] ">
                <ValidateServiceTime
                    onEnd={handleEndIn}
                    endDate={endDate}
                    startDate={startDate}
                />
                <ValidateValidityTime
                    onEnd={handleEndIn}
                    endDate={endDate}
                    startDate={startDate}
                />
                <ServiceTime
                    onEnd={handleEndIn}
                    endDate={endDate}
                    startDate={startDate} isValidity={false} />
                <ServiceTime
                    onEnd={handleEndIn}
                    endDate={endDate}
                    startDate={startDate} isValidity />
            </div>
            <div className="flex flex-row gap-5 mb-5">
                <Button
                    warningFile={
                        <Toast
                            time={1000}
                            onClose={() => { }}
                            isOpen
                            type={ToastType.Warning}
                            position={ToastPosition.Top_Right}
                            description="vượt quá số file cho phép!"
                        />
                    }
                    typeFile="image/*"
                    size="semi"
                    variant="file"
                    color="blue"
                    fileDetails={fileDetails}
                    setFileDetails={handleFileDetailsChange}>
                    Button
                </Button>
                <Button
                    variant="primary-dark"
                    onClick={() => setIsOpenModal(true)}
                    size={"small"}
                    typeFile={""}>
                    Show Modal
                </Button>
                <Modal isOpen={isOpenModal} onClose={handleCloseModal}></Modal>
                <Button
                    variant="primary-dark"
                    onClick={() => setIsOpenToast(true)}
                    typeFile={""}
                    size={"small"}>
                    Show Toast
                </Button>
                <Toast
                    time={5000}
                    isOpen={isOpenToast}
                    position={ToastPosition.Top_Right}
                    type={ToastType.Warning}
                    onClose={handleCloseToast}
                    description="Recommened products cannot exceed the selected number of rollsRecommened products cannot exceed the selected number of rolls"
                />
                <Tooltip message={"Change to 0.45mm"} >
                    <Button>
                        Show Tooltip
                    </Button>
                </Tooltip>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mb-5">

                <StatusNote
                    type={StatusEnum.Normal}
                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                />
                <StatusNote
                    type={StatusEnum.Success}
                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                />
                <StatusNote
                    type={StatusEnum.Warning}
                    description="Kế hoạch sản xuất: Có lỗi trong thông tin giao hàng."
                />
            </div>
            <div className="flex flex-row mb-5 gap-5 justify-center">
                <div className="flex flex-row items-start">

                </div>

                <div className="flex flex-row items-start">
                    <RadioButton
                        checked={selected === "option4"}
                        onChange={() => setSelected("option4")}
                    />
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
                <div className="flex flex-col gap-5">
                    <Paginator
                        length={totalPages}
                        currentPage={currentPage}
                        buttonDouble
                        onPageChange={handlePageChange}
                    />
                    <Paginator
                        length={5}
                        currentPage={currentPage}
                        buttonDouble
                        onPageChange={handlePageChange}
                    />
                    <Paginator
                        length={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange} />
                </div>
                <div className="flex flex-row items-start">

                    <Checkbox
                        id="1"
                        checked={selectedItems.includes("1")}
                        onChange={() =>
                            handleCheckboxChange("1")
                        }
                    />
                    <Checkbox
                        id="2"
                        checked={selectedItems.includes("2")}
                        onChange={() =>
                            handleCheckboxChange("2")
                        }
                    />
                    <Checkbox
                        id="3"
                        checked={selectedItems.includes("3")}
                        onChange={() =>
                            handleCheckboxChange("3")
                        }
                    />

                    <Checkbox
                        disable
                        id="4"
                        checked={false} // Disabled items should not be checked
                    />
                </div>
                <div className="flex flex-col gap-y-5">
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
                <div className="flex flex-col gap-5">
                    <Propertie
                        title="PENDING"
                    />
                    <Propertie
                        title="PRICE POLICY CHANGED"
                    />
                    <Propertie
                        title="ACTIONS REQUIRED"
                    />
                    <Propertie
                        title="PRICE POLICY CHANGED"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <Propertie
                        status
                        title="PENDING"
                    />
                    <Propertie
                        status
                        isIcon
                        title="PRICE POLICY CHANGED"
                    />
                    <Propertie
                        status
                        isIcon
                        title="ACTIONS REQUIRED"
                    />
                    <Propertie
                        status
                        isIcon
                        title="PRICE POLICY CHANGED"
                    />
                </div>
            </div>

            <ProcessFlow
                subTitle="Sales Order Management - Create Sales Order"
                rightHeader={
                    <>
                        <Button
                            className="!px-2 !py-[10px]"
                            variant="secondary"
                            prefixIcon={
                                <SaveDraftIcon className="min-w-4 min-h-4" />
                            }
                            size="medium"
                            onClick={() => { }}>
                            Save Draft
                        </Button>

                        <Button
                            className="!px-2 !py-[10px]"
                            variant="primary-dark"
                            size="medium"
                            prefixIcon={<AddIcon className="min-w-4 min-h-4" />}
                            onClick={() => { }}>
                            Add product
                        </Button>
                    </>
                }
                processLabel={processFlowData}
                processBody={[
                    <TableExample label="STEP - 1" key={1} />,
                    <TableExample label="STEP - 2" key={2} />,
                    <TableExample label="STEP - 3" key={3} />,
                    <TableExample label="STEP - 4" key={4} />,
                    <TableExample label="STEP - 5" key={5} />
                ]}
            />
           
        </LayoutContainer >
    );
}
