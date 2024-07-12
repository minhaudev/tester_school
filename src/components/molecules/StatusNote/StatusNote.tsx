"use client";
import {ApproveNoteIcon, CircleIcon} from "@/assets/svgs";
import {StatusEnum} from "@/enums/StatusNum";
import {useEffect} from "react";

interface StatusColors {
    background: string;
    textClass: string;
    border: string;
}
interface StatusNoteProps {
    type: StatusEnum;
    description: string;
}

export const statusColors: Record<StatusEnum, StatusColors> = {
    [StatusEnum.Normal]: {
        background: "bg-normal",
        border: "border-normal",
        textClass: "text-secondary" // Use Tailwind class name
    },
    [StatusEnum.Success]: {
        background: "bg-success",
        border: "border-success",
        textClass: "text-primary" // Use Tailwind class name
    },
    [StatusEnum.Error]: {
        background: "bg-warning",
        border: "border-warning",

        textClass: "text-warning" // Use Tailwind class name
    }
};
const StatusNote = ({type, description}: StatusNoteProps) => {
    const {background, textClass, border} = statusColors[type]; // Destructure colors
    return (
        <div
            className={`w-[1352px] h-8 top-2 left-2.5 p-2 px-4 gap-2 border-[1px] border-transparent flex items-center rounded-custom-sm ${border} ${background}`}>
            <ApproveNoteIcon width={""} height={""} />
            <p className={`${textClass} text-xs  leading-[14.32px] text-left`}>
                {description}
            </p>
        </div>
    );
};
export default StatusNote;
