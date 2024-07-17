import {useState} from "react";
import UnSelected from "@/assets/svgs/UnSelected.svg";
import Selected from "@/assets/svgs/Selected.svg";
import SelectedDisable from "@/assets/svgs/Selected_disable.svg";
interface CheckboxProps {
    description: string;
    id: string;
    disable?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({description, id, disable}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center mb-4">
            <div onClick={handleClick} className="w-4 h-4 cursor-pointer">
                {disable ? (
                    <SelectedDisable />
                ) : isChecked ? (
                    <Selected />
                ) : (
                    <UnSelected />
                )}
            </div>
            <label
                onClick={handleClick}
                htmlFor={id}
                className="ms-2 text-[13px] font-normal text-text-light dark:text-gray-300 hover:cursor-pointer">
                {description}
            </label>
        </div>
    );
};

export default Checkbox;
