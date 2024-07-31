import { initValidityTime } from "@/consts";
import { calculateDate, convertToTimeStamp } from "@/utils";
import React, { useEffect, useState } from "react";

function useValidateTime({
    endDate,
    startDate,
    onEnd
}: {
    endDate: Date;
    startDate: Date;
    onEnd?: () => void;
}) {
    const [timeAble, setTimeAble] = useState(() => {
        return (
            convertToTimeStamp(endDate) -
            convertToTimeStamp(new Date(Date.now()))
        );
        return (
            convertToTimeStamp(endDate) -
            convertToTimeStamp(new Date(Date.now()))
        );
    });
    const [timeValidity, setTimeValidity] = useState(initValidityTime);
    const [timeUsed, setTimeUsed] = useState(initValidityTime);
    const [currentPercent, setCurrentPercent] = useState(0);
    const [timeCurrent, setTimeCurrent] = useState(initValidityTime);
    const [end, setEnd] = useState(false);
    const totalTime =
        convertToTimeStamp(endDate) - convertToTimeStamp(startDate);
    const totalTimeHours = totalTime / (1000 * 60 * 60);
    useEffect(() => {
        setEnd(false);
        const intervalId = setInterval(() => {
            try {
                const timeAble = Math.floor(
                    (convertToTimeStamp(endDate) -
                        convertToTimeStamp(new Date(Date.now()))) /
                    1000
                );
                if (
                    totalTime <= 0 ||
                    isNaN(endDate.getTime()) ||
                    isNaN(startDate.getTime())
                ) {
                    setTimeValidity(initValidityTime);
                    setCurrentPercent(0);
                    setTimeAble(0);
                    return;
                }
                const currentAble = Math.floor(
                    (convertToTimeStamp(new Date(Date.now())) -
                        convertToTimeStamp(startDate)) /
                    1000
                );
                const timeData = calculateDate({ endDate, startDate });
                const timeAbleHours = timeAble / (60 * 60);
                const currentPercent = (timeAbleHours / totalTimeHours) * 100;
                if (timeAble <= 0) {
                    clearInterval(intervalId);
                    setCurrentPercent(() => 0);
                    setTimeValidity(initValidityTime);
                    setEnd(true);
                    return;
                }
                if (
                    convertToTimeStamp(startDate) <=
                    convertToTimeStamp(new Date(Date.now()))
                ) {
                    setTimeValidity({ ...timeData });
                    setTimeAble(() => Math.floor(timeAble));
                    setCurrentPercent(() => currentPercent);
                    const timeUse = calculateDate({
                        startDate,
                        endDate: new Date(Date.now()),
                        hasDay: false,
                        isTimeUse: true
                    });
                    setTimeUsed(() => timeUse);
                }
                if (
                    convertToTimeStamp(startDate) >
                    convertToTimeStamp(new Date(Date.now()))
                ) {
                    setTimeValidity({ ...timeData });
                    setTimeAble(() => Math.floor(timeAble));
                    setCurrentPercent(100);
                }
            } catch (error) {
                return;
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeAble, endDate, startDate, totalTimeHours, totalTime]);

    return {
        timeAble,
        timeValidity,
        currentPercent,
        totalTimeHours,
        totalTime: calculateDate({ endDate, startDate, isTotal: true }),
        setEnd,
        end,
        timeUsed
    };
}

export default useValidateTime;