import React from "react";
import TriagleExClamation from "@/assets/svgs/Triangle_exclamation.svg";

interface PropertieProps {
    status?: boolean;
    title: string;
}

const Propertie = ({status, title}: PropertieProps) => {
    return (
        <div className="flex items-center justify-center">
            {status && <TriagleExClamation className="mr-1" />}
            <h1 className="text-[11px] font-semibold leading-[13.13px] tracking-[0.5px] text-center text-text">
                {title}
            </h1>
        </div>
    );
};

export default Propertie;
