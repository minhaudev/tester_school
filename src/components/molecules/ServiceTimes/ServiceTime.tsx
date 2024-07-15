import {ServiceTimeEnum} from "@/enums/ServiceTimeEum";
import React from "react";
import TimeFillSuccess from "@/assets/svgs/Time_fill_success.svg";
import TimeFillWarning from "@/assets/svgs/Time_fill_warning.svg";
import TimeFillError from "@/assets/svgs/Time_fill_error.svg";

interface ServiceTimeProps {
    type: ServiceTimeEnum;
    start: string;
    end: string;
}
interface ServiceTimeValue {
    color: string;
    icon: React.ReactNode;
    background: string;
}
const ServiceTimeValue: Record<ServiceTimeEnum, ServiceTimeValue> = {
    [ServiceTimeEnum.Success]: {
        color: "text-green",
        icon: <TimeFillSuccess className={`mr-1`} />,
        background: "bg-green"
    },
    [ServiceTimeEnum.Warning]: {
        color: "text-yellow",
        background: "bg-error"
    },
    [ServiceTimeEnum.Error]: {
        color: "text-red",
        icon: <TimeFillError className={`mr-1`} />,
        background: "bg-red-light"
    }
};
const ServiceTime = ({type, start, end}: ServiceTimeProps) => {
    const {color, icon, background} = ServiceTimeValue[type];
    return (
        <div className={`px-4 py-2 flex  flex-row ${background} items-center`}>
            {icon}
            <div className="text-gray text-xs">
                Service time:&nbsp;
                <span className={color}>
                    {start} / {end}
                </span>
            </div>
        </div>
    );
};

export default ServiceTime;
