import {Position} from "@/interfaces/Pending";
import {useState} from "react";

interface TooltipProps {
    message: string;
    position?: Position;
    children: React.ReactNode;
}
const positionClasses: Record<Position, string> = {
    [Position.Top]: "top-[-2.5rem]",
    [Position.Bottom]: "bottom-[-2.5rem]"
};

export default function Tooltip({
    message,
    position = Position.Bottom,
    children
}: TooltipProps) {
    const positionClass = positionClasses[position] || "";

    return (
        <div className="relative  flex justify-center group  z-50">
            {children}
            <span
                className={`truncate max-w-[300px] absolute z-50 w-fit break-words text-[13px] font-medium rounded-[2.4px]  text-center m-0 bg-black text-white px-2.5 py-1.5 text-xs  ${positionClass}  whitespace-nowrap
            `}>
                {message}
            </span>
        </div>
    );
}
