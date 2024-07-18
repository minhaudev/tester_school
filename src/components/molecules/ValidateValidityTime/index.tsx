import useValidateTime from '@/hooks/useValidateTime';
import React from 'react';
import FormatTime from '../../atoms/FormatTime';

function ValidateValidityTime({startDate,endDate}:any) {
    const {timeValidity,currentPercent} = useValidateTime({endDate,startDate})
    const bgColor = currentPercent >= 50  ? 'bg-green-bold' : (currentPercent >= 30  && currentPercent < 50) ?'bg-yellow' : "bg-red"
    return (
        <div className=" text-[11px] font-[500]  font-sf-ui-display text-text">
        <div className="w-[90px] h-1 bg-green rounded-md ">
             <div
                 className={`${bgColor} mb-[8px]  h-1 rounded-md`}
                 style={{width: `${currentPercent}%`}}></div>
                 <FormatTime date = {timeValidity}/>
         </div>
        </div>
    );
}

export default ValidateValidityTime;