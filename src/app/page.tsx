"use client";
import FormatTime from "@/components/atoms/FormatTime";
import TimeValidate from "@/components/atoms/TimeValidate";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import useValidateTime from "@/hooks/useValidateTime";
import { calculateDate } from "@/utils/FormatDate";

import { useEffect, useState } from "react";
export default function Home() {

    const endDate = new Date(Date.parse("2024-07-18T21:20:00")).getTime();
    const startDate = new Date(Date.parse("2024-07-18T13:04:00")).getTime();
    return (
        <div className="flex w-full m-[100px]">
            <ValidateServiceTime endDate = {endDate} startDate = {startDate}/>
         <ValidateValidityTime endDate = {endDate} startDate = {startDate}/>
        </div>
    );
}
