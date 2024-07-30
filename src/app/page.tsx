"use client";
import TablePrice from "@/components/molecules/TablePrice";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import {isValidDate} from "@/hooks/useValidDate";
import {useState} from "react";
import LayoutContainer from "./LayoutContainer";
export default function Home() {
    const count1 = 32324;
    const count2 = 29292999;
    const [count, setCount] = useState(() => count2 - count1);

    let startDate = new Date();
    let endDate = new Date();
    const start = "2024-07-30T14:26:36.986Z";
    const end = "2024-08-01T14:00:36.986Z";
    if (isValidDate(start) && isValidDate(end)) {
        startDate = new Date(Date.parse(start));
        endDate = new Date(Date.parse(end));
    } else {
        console.log("false");
    }
    const handleEndIn = () => {};

    return (
        <LayoutContainer>
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
            <TablePrice />
        </LayoutContainer>
    );
}
