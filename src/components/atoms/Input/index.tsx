"use client";
import React, {ReactNode} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "@/assets/svgs/dropdown_select.svg";
interface PropsInput {
    optionSelect?: string[];
    handleDateChange?: (date: Date | null) => void;
    variant?: "input" | "textarea" | "select"; // Added "select" to variant type
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
    error?: boolean;
    helperText?: string;
    label?: string;
    type?: string;
    showCalendar?: boolean;
    setShowCalendar?: (show: boolean) => void;
    selectedDate?: Date | null;
    handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    // Added handleSelectChange
}

const Input: React.FC<PropsInput> = (props) => {
    const {
        optionSelect,
        handleDateChange,
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
        error,
        helperText,
        label,
        type,
        showCalendar,
        setShowCalendar,
        selectedDate,
        handleSelectChange
    } = props;

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

    const defaultClasses = `${
        error ?
            "text-warning border-warning focus:border-warning"
        :   "border-[#D9D9D9] text-[#000000D9]"
    } flex items-center gap-1 relative bg-white rounded-sm border text-[14px] focus:!outline-none focus:!border-[#40A9FF] focus:!shadow-md w-full ${getSizeClass(
        size
    )}`;
    const combinedClasses = `${defaultClasses} ${className}`;

    return (
        <div>
            <label>
                {label}
                {require && <span className="text-warning"> &#160;*</span>}{" "}
            </label>
            <div className={`${combinedClasses}`} tabIndex={0}>
                <div className="absolute">{prefix}</div>
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
                            className={`w-full appearance-none 
                             focus:!outline-secondary p-2 ${
                                 prefix ? "ml-6" : ""
                             }`}
                            name={name}
                            value={value}
                            onChange={handleSelectChange}
                            disabled={isDisabled}>
                            <option disabled value="">
                                {placeholder}
                            </option>
                            {optionSelect?.map((option, index) => (
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
                        className={`w-full focus:!outline-secondary   p-2  ${
                            prefix ? "ml-6" : ""
                        }`}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={handleOnChange}
                        disabled={isDisabled}
                    />
                }
                <span
                    className="absolute right-0 mr-6 cursor-pointer"
                    onClick={() =>
                        setShowCalendar && setShowCalendar(!showCalendar)
                    }>
                    {suffix}
                </span>
            </div>
            {showCalendar && (
                <div className="absolute right-0">
                    <DatePicker
                        className="absolute !right-0"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                    />
                </div>
            )}
            <small className={`${error ? "text-warning" : "text-unit"}`}>
                {helperText}
            </small>
        </div>
    );
};

export default Input;
