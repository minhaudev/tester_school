import React from "react";
import TimeFill from "@/assets/svgs/Time_fill.svg";
import {StatusTimeEnum} from "@/enums/StatusTimeEnum";

interface ServiceTimeProps {
    type: StatusTimeEnum;
    current: string;
    end: string;
}
interface ServiceTimeValue {
    color: string;
    icon: React.ReactNode;
    background: string;
}
const ServiceTimeValue: Record<StatusTimeEnum, ServiceTimeValue> = {
    [StatusTimeEnum.Success]: {
        color: "text-green",
        icon: <TimeFill className={`mr-1 text-green`} />,
        background: "bg-green-light"
    },
    [StatusTimeEnum.Warning]: {
        color: "text-yellow",
        icon: <TimeFill className={`mr-1 text-yellow`} />,
        background: "bg-yellow-light"
    },
    [StatusTimeEnum.Error]: {
        color: "text-red",
        icon: <TimeFill className={`mr-1 text-red`} />,
        background: "bg-red-light"
    }
};
const ServiceTime = ({type, current, end}: ServiceTimeProps) => {
    const {color, icon, background} = ServiceTimeValue[type];
    return (
        <div
            className={`px-2 py-1 flex  flex-row ${background} items-center rounded-[3px]`}>
            {icon}
            <div className="text-gray text-xs font-normal font-sf-ui-display">
                Service time:&nbsp;
                <span className={color}>
                    {current} / {end}
                </span>
            </div>
        </div>
    );
};

export default ServiceTime;
