import { Position } from "@/enums/PositionEnum";
import { useState } from "react";

interface TooltipProps {
    message: string;
    position?: Position;
    children: React.ReactNode;
}
const positionClasses: Record<Position, string> = {
    [Position.Top]: "top-[-2.5rem]",
    [Position.Bottom]: "bottom-[-2.5rem]",

};

export default function Tooltip({
    message,
    position = Position.Bottom,
    children
}: TooltipProps) {
    const positionClass = positionClasses[position] || "";

    return (
       
            <div className="relative  flex justify-center group ">
                {children}
                <span className={`truncate max-w-[300px] absolute  w-fit break-words text-[13px] font-medium  text-center m-0 bg-black text-white px-2.5 py-1.5 text-xs  ${positionClass} opacity-0 group-hover:opacity-100 whitespace-nowrap
            `}>
                    {message}
                </span>

            
        </div>
    )
}