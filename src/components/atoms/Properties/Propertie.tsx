import React from "react";
import TriagleExClamation from "@/assets/svgs/Triangle_exclamation.svg";

interface PropertieProps {
    status?: boolean;
    title: string;
    isIcon?: boolean;
}

const Propertie = ({isIcon = false, status, title}: PropertieProps) => {
    return (
        <div
            className={`flex items-center justify-start pl-2 ${!status && "justify-center"}  bg-gray-light py-1 rounded max-w-[193px] h-[24px]`}>
            {status && isIcon && <TriagleExClamation className="mr-1" />}
            <h1 className="text-[11px] font-semibold leading-[13.13px] tracking-[0.5px] text-center text-text">
                {title}
            </h1>
        </div>
    );
};

export default Propertie;
