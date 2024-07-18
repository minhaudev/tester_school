import React from 'react';

function FormatTime({date}:{date:any}) {
    return (
        <div>{date.day>0 && <span>{date.day}D </span>}
        <span>{date.hours >= 0 && date.hours < 10 ? <span>{`${date.hours.toString().padStart(2,"0")}`}</span> :<span>{`${date.hours}`}</span>}</span>  
          <span>:</span>  
          <span> {date.minutes >= 0 && date.minutes < 10 ? <span>{`${date.minutes.toString().padStart(2,"0")}`}</span> :<span>{`${date.minutes}`}</span>}</span>  
          <span>:</span>
          <span> {date.secondTime >= 0 && date.secondTime < 10 ? <span>{`${date.secondTime.toString().padStart(2,"0")}`}</span> :<span>{`${date.secondTime}`}</span>}</span>  
      </div>
    );
}

export default FormatTime;