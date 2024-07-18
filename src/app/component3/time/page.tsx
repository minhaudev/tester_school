// ServiceTimeLayout.tsx
"use client";
import React, {useEffect, useState} from "react";
import Card from "@/components/molecules/Card";
import ServiceTime from "@/components/molecules/ServiceTime";
import ValidityTime from "@/components/molecules/ValidityTime";
import {StatusTimeEnum} from "@/enums/StatusTimeEnum";
import {timeToTimestamp} from "@/utils/CurrentDate";
import FormatTime from "@/utils/FormatTime";

const ServiceTimeLayout = () => {
    const endTime = timeToTimestamp("18:00:00");
    const serverTime =
        typeof window === "undefined" ? new Date().getTime() : Date.now();
    const [currentTime, setCurrentTime] = useState(serverTime);
    const [typeTime, setTypeTime] = useState(StatusTimeEnum.Success);
    const [countdownTime, setCountdownTime] = useState(endTime - currentTime);

    useEffect(() => {
        const timer = setInterval(() => {
            const newCurrentTime = new Date().getTime();
            if (newCurrentTime >= endTime) {
                setCurrentTime(endTime);
                setCountdownTime(0);
                setTypeTime(StatusTimeEnum.Error);
                clearInterval(timer);
            } else {
                setCurrentTime(newCurrentTime);
                const newCountdownTime = endTime - newCurrentTime;
                setCountdownTime(newCountdownTime);

                const hoursRemaining = newCountdownTime / (1000 * 60 * 60);
                const hourCurrent = new Date(newCurrentTime).getHours();

                if (hoursRemaining < 2) {
                    setTypeTime(StatusTimeEnum.Error);
                } else if (hoursRemaining < 5) {
                    setTypeTime(StatusTimeEnum.Warning);
                } else {
                    setTypeTime(StatusTimeEnum.Success);
                }
            }
        }, 1000);

        // Cleanup the interval timer on component unmount
        return () => clearInterval(timer);
    }, [endTime]);

    const endTimeDefault = FormatTime(endTime);
    const currentTimeDefault = FormatTime(currentTime);
    const countdownFormatted =
        countdownTime <= 0 ? "00:00:00" : (
            new Date(countdownTime).toISOString().substr(11, 8)
        );

    return (
        <div className="flex flex-row gap-8">
            <div className="flex-1">
                <Card
                    title="Service time"
                    content={
                        <div className="gap-8 items-center flex flex-col">
                            <ServiceTime
                                type={typeTime}
                                current={currentTimeDefault}
                                end={endTimeDefault}
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
                                type={typeTime}
                                start={countdownFormatted}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default ServiceTimeLayout;
