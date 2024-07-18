import {PendingEnum} from "@/enums/PendingEnum";
import React from "react";

interface PendingProps {
    description: string;
    disable?: boolean;
}

const PendingStatus = ({description, disable = false}: PendingProps) => {
    return (
        <div
            className={`flex justify-center items-center p-4 rounded-sm h-[25px] ${
                disable ? "bg-stroke" : "bg-blue-bold"
            } hover:bg-stroke hover:cursor-pointer group`}>
            <p
                className={`text-[11px] font-semibold text-center px-2 py-1 ${
                    disable ? "text-input" : "text-white"
                } group-hover:text-text`}>
                {description}
            </p>
        </div>
    );
};

export default PendingStatus;
