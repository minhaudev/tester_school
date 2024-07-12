import {ServiceTimeEnum} from "@/enums/ServiceTimeNum";
import React from "react";

interface ServiceTimeProps {
    type: ServiceTimeEnum;
    start: string;
    end: string;
}
interface ServiceTimeValue {
    color: string;
    background: string;
}
const ServiceTimeValue: Record<ServiceTimeEnum, ServiceTimeValue> = {
    [ServiceTimeEnum.Success]: {
        color: "text-green",
        background: "bg-green"
    },
    [ServiceTimeEnum.Warning]: {
        color: "text-yellow",
        background: "bg-error"
    },
    [ServiceTimeEnum.Error]: {
        color: "text-warning",
        background: "bg-error"
    }
};
const ServiceTime = ({type, start, end}: ServiceTimeProps) => {
    const {color, background} = ServiceTimeValue[type];
    return (
        <div className={`px-4 py-2 flex  flex-row ${background}`}>
            <div className="text-gray">
                Service time:&nbsp;
                <span className={color}>
                    {start} / {end}
                </span>
            </div>
        </div>
    );
};

export default ServiceTime;
