import React from "react";
import HouseGlass from "@/assets/svgs/Hour_glass.svg";
import {StatusTimeEnum} from "@/enums/StatusTimeEnum";

interface ValidityTimeProps {
    type: StatusTimeEnum;
    start: string;
}
interface ValidityTimeValue {
    color: string;
    icon: React.ReactNode;
    background: string;
}
const ValidityTimeValue: Record<StatusTimeEnum, ValidityTimeValue> = {
    [StatusTimeEnum.Success]: {
        color: "text-green",
        icon: <HouseGlass className={`mr-1 text-green`} />,
        background: "bg-green-light"
    },
    [StatusTimeEnum.Warning]: {
        color: "text-yellow",
        icon: <HouseGlass className={`mr-1 text-yellow`} />,
        background: "bg-yellow-light"
    },
    [StatusTimeEnum.Error]: {
        color: "text-red",
        icon: <HouseGlass className={`mr-1 text-red`} />,
        background: "bg-red-light"
    }
};
const ValidityTime = ({type, start}: ValidityTimeProps) => {
    const {color, icon, background} = ValidityTimeValue[type];
    return (
        <div
            className={`px-2 py-1 flex  flex-row ${background} items-center rounded-[3px]`}>
            {icon}
            <div className="text-gray text-xs font-normal font-sf-ui-display">
                Validity time:&nbsp;
                <span className={color}>{start}</span>
            </div>
        </div>
    );
};

export default ValidityTime;
