"use client";
import TablePrice from "@/components/molecules/TablePrice";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import {isValidDate} from "@/hooks/useValidDate";
import React, {useState} from "react";
import GroupInput from "@/components/molecules/GroupInput/GroupInput";
import LayoutContainer from "./LayoutContainer";
import {Tooltip} from "@nextui-org/tooltip";
import TooltipCustom from "@/components/atoms/Tooltip";
import Button from "@/components/atoms/Button";

export default function Home() {
    const count1 = 32324;
    const count2 = 29292999;
    const [count, setCount] = useState(() => count2 - count1);

    let startDate = new Date();
    let endDate = new Date();
    const start = "2024-07-31T06:54:57.744Z";
    const end = "2024-07-31T06:56:57.744Z";
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
