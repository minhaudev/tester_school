import {useState} from "react";
import UnSelected from "@/assets/svgs/UnSelected.svg";
import Selected from "@/assets/svgs/Selected.svg";
import SelectedDisable from "@/assets/svgs/Selected_disable.svg";

interface CheckboxProps {
    description: string;
    id: string;
    disable?: boolean;
    className?: string;
    checked?: boolean;
    onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    description,
    id,
    disable,
    className,
    checked,
    onChange
}) => {
    const handleClick = () => {
        if (!disable && onChange) {
            onChange();
        }
    };

    return (
        <>
            <div onClick={handleClick} className={`w-5 h-5 cursor-pointer `}>
                {disable ?
                    <SelectedDisable className="w-5 h-5" />
                : checked ?
                    <Selected className={`${className}`} />
                :   <UnSelected className={`${className}`} />}
            </div>
            <label
                onClick={handleClick}
                htmlFor={id}
                className="ms-2 text-[13px] font-normal text-text-light dark:text-gray-300 hover:cursor-pointer">
                {description}
            </label>
        </>
    );
};

export default Checkbox;
