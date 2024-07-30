"use client";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import Select from "@/assets/svgs/dropdown_select.svg";
import IconCalendar from "@/assets/svgs/calendar_v2.svg";

interface PropsInput {
    isContentCenter: boolean;
    optionSelect?: string[];
    variant?: "input" | "textarea" | "select";
    require?: boolean;
    value?: string;
    placeholder?: string;
    name?: string;
    handleOnChange?: (
        e: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) => void;
    isDisabled?: boolean;
    className?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    size?: "large" | "medium" | "small";
    isError?: boolean;
    helperText?: string;
    label?: string;
    type?: string;
    selectedDate?: Date | null;

    handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Input: React.FC<PropsInput> = (props) => {
    const {
        optionSelect,
        variant,
        require,
        value,
        placeholder,
        name,
        handleOnChange,
        isDisabled,
        className = "",
        prefix,
        suffix,
        size,
        isError,
        helperText,
        label,
        type,
        handleSelectChange,
        isContentCenter
    } = props;

    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const getSizeClass = (size?: "large" | "medium" | "small") => {
        switch (size) {
            case "large":
                return "min-h-[40px]";
            case "medium":
                return "min-h-[32px]";
            case "small":
                return "min-h-[22px]";
            default:
                return "";
        }
    };

    const defaultClasses = ` ${
        isError ?
            "text-warning border-warning focus:border-warning"
        :   "border-[#D9D9D9] text-[#000000D9]"
    } flex items-center gap-1 relative bg-white disabled: rounded-sm border text-[14px] focus:!outline-none  focus:!shadow-md w-full ${getSizeClass(
        size
    )}`;
    const combinedClasses = `${defaultClasses} ${className}`;

    useEffect(() => {
        if (value) {
            setIsOptionSelected(true);
        }
    }, [value]);

    return (
        <div className="border-r-0">
            <label>
                {label}
                {require && <span className="text-warning"> &#160;*</span>}{" "}
            </label>
            <div className={combinedClasses} tabIndex={0}>
                <div className="absolute p-1">{prefix}</div>

                {variant === "textarea" ?
                    <textarea
                        className={`w-full min-h-[169px] max-h-[169px] p-2 focus:!outline-secondary  ${
                            prefix ? "ml-6" : ""
                        }`}
                        placeholder={placeholder}
                        name={name}
                        value={value as string}
                        onChange={handleOnChange}
                        disabled={isDisabled}
                    />
                : variant === "select" ?
                    <div className="relative w-full">
                        <select
                            className={`w-full appearance-none focus:!outline-secondary p-2 ${prefix ? "ml-6" : ""}`}
                            name={name}
                            value={value}
                            onChange={(e) => {
                                handleSelectChange && handleSelectChange(e);
                                setIsOptionSelected(true);
                            }}
                            disabled={isDisabled}>
                            {!isOptionSelected && (
                                <option value="" selected disabled>
                                    Select
                                </option>
                            )}
                            {optionSelect
                                ?.filter((option) => option !== "")
                                .map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </select>

                        <div className="absolute top-[35%] right-[10px] pointer-events-none">
                            <Select />
                        </div>
                    </div>
                :   <input
                        className={`w-full focus:!outline-secondary p-2 ${isDisabled ? "focus:!outline-stroke" : ""} ${isContentCenter ? "text-center text-[13px] font-[400] font-sf-ui-display leading-[15.5px]  " : ""} ${
                            prefix ? " pl-6" : ""
                        }  ${suffix ? "pr-6 " : ""} `}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={handleOnChange}
                        disabled={isDisabled}
                    />
                }
                <div className="absolute pr-2 right-0">{suffix}</div>
            </div>

            <small
                className={`${isError ? "text-warning focus:!outline-warning" : "text-unit"}`}>
                {helperText}
            </small>
        </div>
    );
};

export default Input;
