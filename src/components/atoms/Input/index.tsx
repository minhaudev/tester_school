"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "@/assets/svgs/dropdown_select.svg";
import IconCalendar from "@/assets/svgs/calendar_v2.svg";

interface PropsInput {
    optionSelect?: string[];
    handleDateChange?: (date: Date | null) => void;
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
    isDisabled?: boolean | Record<string, boolean>;
    className?: string;
    prefix?: ReactNode;
    isCalendarPrefix?: boolean;
    isCalendarSuffix?: boolean;
    suffix?: ReactNode;
    size?: "large" | "medium" | "small";
    error?: boolean;
    helperText?: string;
    label?: string;
    type?: string;
    isTextCenter?: boolean;
    showCalendar?: boolean;
    setShowCalendar?: (show: boolean) => void;
    selectedDate?: Date | null;
    handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Input: React.FC<PropsInput> = (props) => {
    const {
        isCalendarPrefix,
        isCalendarSuffix,
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
        isTextCenter,
        showCalendar,
        setShowCalendar,
        selectedDate,
        handleSelectChange
    } = props;

    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const inputRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node) &&
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setShowCalendar && setShowCalendar(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [setShowCalendar]);

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

    const defaultClasses = `${error ?
        "text-warning border-warning focus:border-warning"
        : "border-[#D9D9D9] text-[#000000D9]"
        } flex items-center gap-1 relative bg-white rounded-sm border text-[14px] focus:!outline-none focus:!border-[#40A9FF] focus:!shadow-md w-full ${getSizeClass(
            size
        )}`;
    const combinedClasses = `${defaultClasses} ${className}`;

    useEffect(() => {
        if (value) {
            setIsOptionSelected(true);
        }
    }, [value]);
    const normalizedDisabled = typeof isDisabled === 'boolean' ? isDisabled :
        Object.values(isDisabled || {}).some(disabled => disabled);
    return (
        <div>
            <label>
                {label}
                {require && <span className="text-warning"> &#160;*</span>}{" "}
            </label>
            <div ref={inputRef} className={combinedClasses} tabIndex={0}>
                {isCalendarPrefix ?
                    <span
                        className="absolute left-2 cursor-pointer"
                        onClick={() =>
                            setShowCalendar && setShowCalendar(!showCalendar)
                        }>
                        <IconCalendar className="w-full" />
                    </span>
                    : <div className="absolute">{prefix}</div>}

                {variant === "textarea" ?
                    <textarea
                        className={`w-full min-h-[169px] max-h-[169px] p-2 focus:!outline-secondary  ${prefix ? "ml-6" : ""
                            }`}
                        placeholder={placeholder}
                        name={name}
                        value={value as string}
                        onChange={handleOnChange}
                        disabled={normalizedDisabled}
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
                                disabled={normalizedDisabled}>
                                {!isOptionSelected && (
                                    <option value="" disabled>
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
                        : <input
                            className={`w-full ${isTextCenter && "text-center"}  focus:!outline-secondary p-2 ${prefix ? "pl-8" : ""
                                } ${isCalendarPrefix && "pl-8"} ${suffix ? "pr-6" : ""
                                } ${isCalendarSuffix && "pr-6"}`}
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            value={value}
                            onChange={handleOnChange}
                            onFocus={() => {
                                if (
                                    (isCalendarPrefix || isCalendarSuffix) &&
                                    setShowCalendar
                                ) {
                                    setShowCalendar(true);
                                }
                            }}
                            disabled={normalizedDisabled}
                        />
                }
                {isCalendarSuffix ?
                    <span
                        className="absolute right-0 pr-6 cursor-pointer"
                        onClick={() =>
                            setShowCalendar && setShowCalendar(!showCalendar)
                        }>
                        <IconCalendar className="w-full" />
                    </span>
                    : <span>{suffix}</span>}
                {showCalendar && (
                    <div
                        ref={calendarRef}
                        className={`${isCalendarPrefix ? "left-0 " : "right-0 "
                            } absolute z-50 top-[100%]`}>
                        <DatePicker
                            className="absolute !right-0 "
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                        />
                    </div>
                )}
            </div>

            <small className={`${error ? "text-warning" : "text-unit"}`}>
                {helperText}
            </small>
        </div>
    );
};

export default Input;
