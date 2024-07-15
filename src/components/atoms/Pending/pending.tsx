import {PendingEnum} from "@/enums/PendingEnum";
import React from "react";

interface PendingValue {
    color: string;
    background: string;
}

interface PendingProps {
    type: PendingEnum;
    description: string;
    className?: string;
}

export const PendingValues: Record<PendingEnum, PendingValue> = {
    [PendingEnum.Current]: {
        color: "text-white",
        background: "bg-green-bold"
    },
    [PendingEnum.Expired]: {
        color: "text-text",
        background: "bg-primary"
    },
    [PendingEnum.Approve]: {
        color: "text-white",
        background: "bg-secondary"
    },
    [PendingEnum.Denied]: {
        color: "text-white",
        background: "bg-red-bold"
    },
    [PendingEnum.Pending]: {
        color: "text-text",
        background: "bg-yellow"
    },
    [PendingEnum.Draft]: {
        color: "text-text",
        background: "bg-primary"
    }
};

const Pending = ({type, description}: PendingProps) => {
    const {color, background} = PendingValues[type];

    return (
        <div
            className={`flex justify-center items-center p-4 ${background} rounded-sm h-[25px]`}>
            <p
                className={`${color} text-[11px] font-semibold text-center px-2 py-1`}>
                {description}
            </p>
        </div>
    );
};

export default Pending;
