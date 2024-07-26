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
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {processFlowData} from "@/faker";
import {useState} from "react";
import LayoutContainer from "./LayoutContainer";
import TableExample from "./TableExample";
import TablePrice from "@/components/molecules/TablePrice";
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
    const endDate = new Date(Date.parse("2024-08-24T15:13:00Z"));
    const startDate = new Date(Date.parse("2015-01-24T08:26:00Z"));
    const handleEndIn = () => {
        alert("end in");
    };
    return (
        <LayoutContainer>
            <TablePrice />
        </LayoutContainer>
    );
}
