import React from "react";
import TriagleExClamation from "@/assets/svgs/Triangle_exclamation.svg";

interface PropertieProps {
    title: string;
    isIcon?: boolean;
}

const StatusPending = ({ isIcon = true, title }: PropertieProps) => {
    title = title.toUpperCase()
    return (
        <div
            className={`py-1 px-4 flex w-[193px] items-center text-text  text-center text-[11px] font-medium rounded-sm max-w-md bg-gray-light `}>
            {isIcon && <TriagleExClamation className={"mr-1"} />}
            <p className={`${!isIcon && "ml-3.5"}`}>{title}</p>
        </div>
    );
};

export default StatusPending;
