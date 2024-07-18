import { calculateDate } from '@/utils/FormatDate';
import React, { useEffect, useState } from 'react';

function useValidateTime({endDate,startDate}:any) {
    const [timeAble, setTimeAble] = useState(0);
    const [timeValidity,setTimeValidity] = useState({day:0,hours:0,minutes:0,secondTime:0})
    const [currentPercent, setCurrentPercent] = useState(0);
    const totalTime = endDate - startDate;
    const totalTimeHours = totalTime / (1000 * 60 * 60);
    useEffect(() => {
        setInterval(() => {
            const timeAble = (endDate - Date.now()) / (1000 * 60 * 60);
            const timeData = calculateDate({endDate})
            setTimeValidity({...timeData})
            console.log('check day ::: ',timeData);
            setTimeAble(() => timeAble);
            const currentPercent = (timeAble / totalTimeHours) * 100;
            console.log('check');
            if (timeAble <= 0) {
                setCurrentPercent(0);
            } else {
                setCurrentPercent(currentPercent);
            }
        }, 1000);
    }, []);
    return {timeAble,timeValidity,currentPercent,totalTimeHours,totalTime}
}

export default useValidateTime;