"use client";
import SaveDraftIcon from "@/assets/svgs/save_draft.svg";
import AddIcon from "@/assets/svgs/add_light.svg";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import ProcessFlow from "@/components/molecules/ProcessFlow";
import Standard from "@/components/molecules/Standard/Index";
import Toast from "@/components/molecules/Toast";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {processFlowData} from "@/faker";
import {useState} from "react";
import LayoutContainer from "./LayoutContainer";
import TableExample from "./TableExample";
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
    const endDate = new Date(Date.parse("2024-08-33T15:13:00Z"));
    const startDate = new Date(Date.parse("2024-07-23T15:12:00Z"));
    const handleEndIn = () => {
        alert("end in");
    };
    return (
        <LayoutContainer>
            <Standard />
            <Input
                isCalendarSuffix
                // suffix={<IconPassword />}
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
            <div className=" flex flex-col items-start gap-8 p-[10px] m-[20px] ">
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
            </div>
            <Button
                warningFile={
                    <Toast
                        time={1000}
                        onClose={() => {}}
                        visible
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

            <ProcessFlow
                subTitle="Sales Order Management - Create Sales Order"
                leftHeader={
                    <>
                        <Button
                            className="!px-2 !py-[10px]"
                            typeFile=""
                            variant="secondary"
                            prefixIcon={
                                <SaveDraftIcon className="min-w-4 min-h-4" />
                            }
                            size="medium"
                            onClick={() => {}}>
                            Save Draft
                        </Button>

                        <Button
                            className="!px-2 !py-[10px]"
                            typeFile=""
                            variant="secondary"
                            size="medium"
                            prefixIcon={<AddIcon className="min-w-4 min-h-4" />}
                            onClick={() => {}}>
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
        </LayoutContainer>
    );
}
