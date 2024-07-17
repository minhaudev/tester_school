import React from "react";
import HouseGlassSuccess from "@/assets/svgs/Hour_glass_success.svg";
import HouseGlassWarning from "@/assets/svgs/Hour_glass_warning.svg";
import HouseGlassError from "@/assets/svgs/Hour_glass_error.svg";
import {ValidityTimeEnum} from "@/enums/ValidityTimeEnum";

interface ValidityTimeProps {
    type: ValidityTimeEnum;
    start: string;
}
interface ValidityTimeValue {
    color: string;
    icon: React.ReactNode;
    background: string;
}
const ValidityTimeValue: Record<ValidityTimeEnum, ValidityTimeValue> = {
    [ValidityTimeEnum.Success]: {
        color: "text-green",
        icon: <HouseGlassSuccess className={`mr-1`} />,
        background: "bg-green"
    },
    [ValidityTimeEnum.Warning]: {
        color: "text-yellow",
        icon: <HouseGlassWarning className={`mr-1`} />,

        background: "bg-warning-light"
    },
    [ValidityTimeEnum.Error]: {
        color: "text-red",
        icon: <HouseGlassError className={`mr-1`} />,
        background: "bg-red-light"
    }
};
const ValidityTime = ({type, start}: ValidityTimeProps) => {
    const {color, icon, background} = ValidityTimeValue[type];
    return (
        <div className={`px-4 py-2 flex  flex-row ${background} items-center`}>
            {icon}
            <div className="text-gray text-xs">
                Validity time:&nbsp;
                <span className={color}>{start}</span>
            </div>
        </div>
    );
};

export default ValidityTime;
