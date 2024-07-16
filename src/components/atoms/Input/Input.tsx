"use client";
import React, {ReactNode} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {PropsInput} from "@/interfaces/Input";
import Calendar from "@/assets/svgs/Calendar.svg";

const Input = (props: PropsInput) => {
    const {
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
        selectedDate
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
    } flex items-center gap-1 px-3 relative bg-white rounded-sm !border text-[14px] !focus:outline-none !focus:border-[#40A9FF] !focus:shadow-md w-full ${getSizeClass(
        size
    )}`;
    const combinedClasses = `${defaultClasses} ${className}`;

    return (
        <div>
            <label>
                {label}
                {require && <span className="text-warning">*</span>}{" "}
            </label>
            <div className={`${combinedClasses}`} tabIndex={0}>
                <span className="absolute">{prefix}</span>
                {variant === "textarea" ?
                    <textarea
                        className={`w-full min-h-[169px] max-h-[169px] py-2 border-none outline-none ${
                            prefix ? "ml-6" : ""
                        }`}
                        placeholder={placeholder}
                        name={name}
                        value={value as string}
                        onChange={handleOnChange}
                        disabled={isDisabled}
                    />
                :   <input
                        className={`w-full py-2 border-none outline-none ${
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
                <div className="absolute right-60">
                    {" "}
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

Input.defaultProps = {
    handleDateChange: () => {},
    variant: "input",
    require: false,
    value: "",
    placeholder: "",
    name: "",
    handleOnChange: () => {},
    isDisabled: false,
    className: "",
    prefix: null,
    suffix: <Calendar />,
    size: "medium",
    error: false,
    helperText: "",
    label: "",
    type: "text",
    showCalendar: false,
    setShowCalendar: () => {},
    selectedDate: null
};

export default Input;
