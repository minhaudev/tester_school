import React from "react";

interface PropertieProps {
    title: string;
}

const Propertie = ({title}: PropertieProps) => {
    return (
        <h1 className=" text-[11px] font-semibold leading-[13.13px] tracking-[0.5px] text-center text-text">
            {title}
        </h1>
    );
};

export default Propertie;
