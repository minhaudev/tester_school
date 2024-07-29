import React from "react";
import TriagleExClamation from "@/assets/svgs/Triangle_exclamation.svg";

interface PropertieProps {
    status?: boolean;
    title: string;
    isIcon?: boolean;
}

const Propertie = ({ isIcon = false, status, title }: PropertieProps) => {
    return (
        <div
            className={`py-1 px-4 flex min-w-[193px] w-full  ${!status && "justify-center"} items-center    text-text w-full  text-center text-[11px] font-medium rounded-sm max-w-md bg-gray-light `}>
            {isIcon && <TriagleExClamation className={"mr-1"} />}
            <p className={`${!isIcon && status && "ml-3.5"}`}>{title}</p>
        </div>
    );
};

export default Propertie;
