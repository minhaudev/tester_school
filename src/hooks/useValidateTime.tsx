import { calculateDate } from '@/utils/FormatDate';
import React, { useEffect, useRef, useState } from 'react';

function useValidateTime({endDate,startDate}:{endDate:Date,startDate:Date}) {
    const [timeAble, setTimeAble] = useState(0);
    const [timeValidity,setTimeValidity] = useState({day:0,hours:0,minutes:0,secondTime:0})
    const [currentPercent, setCurrentPercent] = useState(0);
    const totalTime = endDate.getTime() - startDate.getTime();
    const [end,setEnd] = useState(false)
    const totalTimeHours = totalTime / (1000 * 60 * 60);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeAble = (endDate.getTime() - Date.now()) / (1000 * 60 * 60);
            const timeData = calculateDate({ endDate });
            setTimeValidity({ ...timeData });
            setTimeAble(() => timeAble);
            const currentPercent = (timeAble / totalTimeHours) * 100;
            if (timeAble <= 0) {
                setCurrentPercent(0);
                setTimeValidity({day:0,hours:0,minutes:0,secondTime:0})
                clearInterval(intervalId); 
                setEnd(true)
            } else {
                setCurrentPercent(currentPercent);
            }
        }, 1000);
    
        return () => clearInterval(intervalId); // Clear the interval when the component unmounts
    }, []);
    
    return {timeAble,timeValidity,currentPercent,totalTimeHours,totalTime,end}
}

export default useValidateTime;