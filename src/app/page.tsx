"use client";
import Button from "@/components/atoms/Button";
import Toast from "@/components/molecules/Toasts/Toast";
import { ToastPosition, ToastType } from "@/enums/ToastEnum";
import { useState } from "react";

import Input from "@/components/atoms/Input";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import Standard from "@/components/molecules/Standard/Index";
import LayoutContainer from "./LayoutContainer";
export default function Home() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [select, setSelect] = useState("");
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
    console.log(inputValue);
    return (
        <LayoutContainer>
            <Standard />
            <Input
                // isCalendarPrefix
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
            <Button
                warningFile={
                    <Toast
                    onClose={()=>{}}
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
        </LayoutContainer>
    );
}
