"use client";
import React, {ReactNode} from "react";
import Search from "@/assets/svgs/Search.svg";

interface PropsInput {
    variant?: "input" | "textarea";
    size?: "large" | "medium" | "small";
    label?: string;
    value?: string | number;
    type?: string;
    error?: boolean;
    helperText?: string;
    suffixIcon?: string;
    placeholder?: string;
    name?: string;
    handleOnChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    isDisabled?: boolean;
    className?: string;
    prefix?: ReactNode;
    asterisk?: boolean;
}
const Input = (props: PropsInput) => {
    const {
        variant,
        asterisk,
        value,
        placeholder,
        name,
        handleOnChange,
        isDisabled,
        className = "",
        prefix,
        size,
        error,
        helperText,
        label,
        type
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
        error
            ? "text-warning border-warning focus:border-warning"
            : "border-[#D9D9D9] text-[#000000D9]"
    } flex items-center gap-1 px-3 relative bg-white rounded-sm border text-[14px] focus:outline-none focus:border-[#40A9FF] focus:shadow-md w-full ${getSizeClass(
        size
    )}`;
    const combinedClasses = `${defaultClasses} ${className}`;

    console.log(helperText);

    return (
        <div>
            <label>
                {label}
                {label && asterisk && (
                    <span className="text-warning">*</span>
                )}{" "}
            </label>
            <div className={combinedClasses}>
                <span className="absolute">{prefix}</span>
                {variant === "textarea" ? (
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
                ) : (
                    <input
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
                )}
            </div>

            <small className={`${error ? "text-warning" : "text-unit"}`}>
                {helperText}
            </small>
        </div>
    );
};

const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    console.log(e.target.value);
};

Input.defaultProps = {
    handleOnChange: handleOnChange,
    helperText: "this is a helpertext",
    label: "Note",
    variant: "input",
    size: "large",
    type: "text",
    isDisabled: false,
    error: false,
    asterisk: true,
    className: ""
    // prefix: <Search />
};

export default Input;
