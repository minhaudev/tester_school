"use client";
import {useState} from "react";
import LayoutContainer from "./LayoutContainer";
import Input from "@/components/atoms/Input";
import Icon from "@/assets/svgs/search.svg";
import Calendar from "@/components/atoms/Calendar/Index";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/Button";
import Standard from "@/components/molecules/Standard/Index";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import GroupInput from "@/components/molecules/GroupInput/GroupInput";

export default function Home() {
    const [fileDetails, setFileDetails] = useState([]);
    const handleFileDetailsChange = (details: any) => {
        setFileDetails(details);
    };

    // Initialize startDate and endDate to undefined
    // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // const onChange = (date: Date | null) => {
    //     setSelectedDate(date);
    // };
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <LayoutContainer
            footerChildren={
                <div className="flex justify-between ">
                    <Button variant="primary-dark">Button</Button>
                    <Button variant="primary-dark" isError>
                        primary
                    </Button>
                </div>
            }>
            <Calendar
                minDate="2024/07/25"
                maxDate="2024/08/25"
                endDate={endDate}
                startDate={startDate}
                // selectedDate={selectedDate}
                formatDate="dd/MM/yyyy"
                onChange={onChange}
                isShowIcon={true}
                selectsRange={true}
                // isShowIconRight
            />
            <Input variant="input" placeholder="nhập input" suffix={<Icon />} />

            <div className="ml-2">
                <Button
                    // isError
                    maxFile={5}
                    typeFile="image/*"
                    fileDetails={fileDetails}
                    setFileDetails={setFileDetails}
                    warningFile="123"
                    variant="file">
                    Button
                </Button>
                <Standard />
                <CustomerBalanceInfo />
            </div>
            <GroupInput />
        </LayoutContainer>
    );
}
