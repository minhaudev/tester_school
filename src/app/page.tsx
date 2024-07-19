"use client";
import Button from "@/components/atoms/Button";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import Toast from "@/components/molecules/Toasts/Toast";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";
import Standard from "@/components/molecules/Standard/Index";
import Input from "@/components/atoms/Input";
import Calendar from "@/assets/svgs/calendar.svg";
import IconPassword from "@/assets/svgs/pass_light.svg";
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
