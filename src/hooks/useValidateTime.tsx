import { VIETNAMZONE } from '@/const';
import { calculateDate } from '@/utils/FormatDate';
import React, { useEffect, useState } from 'react';

function useValidateTime({endDate,startDate}:{endDate:Date,startDate:Date}) {
    const [timeAble, setTimeAble] = useState(0);
    const [timeValidity,setTimeValidity] = useState({day:0,hours:0,minutes:0,secondTime:0})
    const [currentPercent, setCurrentPercent] = useState(0);
    const totalTime = endDate.getTime() - startDate.getTime();
    const [end,setEnd] = useState(false)
    const totalTimeHours = (totalTime / (1000 * 60 * 60));
    useEffect(() => {
        if(endDate.getTime() - startDate.getTime() < 0) return alert('some thing went wrong!')
        if((((endDate.getTime() - Date.now()) / (1000 * 60 * 60))-VIETNAMZONE)*360*1000 < 0  ) return
        const intervalId = setInterval(() => {
            setEnd(false)
            const timeAble = ((endDate.getTime() - Date.now()) / (1000 * 60 * 60))-VIETNAMZONE;
            const timeData = calculateDate({ endDate });
            const currentPercent = (timeAble / totalTimeHours) * 100; 
            if( currentPercent <= 0) {
                clearInterval(intervalId)
                setCurrentPercent(0)
                setEnd(true)
                return
            } ;
            setTimeValidity({ ...timeData });
            setTimeAble(() => timeAble);
            setCurrentPercent(currentPercent);
        }, 1000);
        return () => clearInterval(intervalId); 
    }, [endDate,totalTimeHours,startDate]);
    
    return {timeAble,timeValidity,currentPercent,totalTimeHours,totalTime,end,setEnd}
}

export default useValidateTime;