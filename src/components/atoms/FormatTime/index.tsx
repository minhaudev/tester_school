import React from "react";

function FormatTime({date}: {date: any}) {
    return (
        <>
            {date ?
                <div className=" flex items-center text-[11px] font-sf-ui-display font-[500] leading-[16px] text-text tracking-[0.5px] ">
                    {date.day > 0 && <p className="pr-1">{date.day}D </p>}
                    <p>
                        {date.hours >= 0 && date.hours < 10 ?
                            <p>{`${date.hours.toString().padStart(2, "0")}`}</p>
                        :   <p>{`${date.hours}`}</p>}
                    </p>
                    <div className="flex flex-col gap-[2.5px] px-[0.5px]">
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                    </div>
                    <p>
                        {" "}
                        {date.minutes >= 0 && date.minutes < 10 ?
                            <p>{`${date.minutes.toString().padStart(2, "0")}`}</p>
                        :   <p>{`${date.minutes}`}</p>}
                    </p>
                    <div className="flex flex-col gap-[2.5px] px-[0.5px]">
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                    </div>
                    <p>
                        {" "}
                        {date.secondTime >= 0 && date.secondTime < 10 ?
                            <p>{`${date.secondTime.toString().padStart(2, "0")}`}</p>
                        :   <p>{`${date.secondTime}`}</p>}
                    </p>
                </div>
            :   <div className="text-[11px] font-sf-ui-display font-[500] leading-[16px] text-text">
                    <p>00</p>{" "}
                    <div className="flex flex-col gap-[2.5px] px-[0.5px]">
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                    </div>{" "}
                    <p>00</p>{" "}
                    <div className="flex flex-col gap-[2.5px] px-[0.5px]">
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                        <div className="w-[1.3px] h-[1.3px] rounded-full bg-[#000]"></div>{" "}
                    </div>{" "}
                    <p>00</p>
                </div>
            }
        </>
    );
}

export default FormatTime;
