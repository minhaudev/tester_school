"use client";

import Frame from "@/assets/images/Frame";
import Link from "next/link";
import React, {
    ReactNode,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes
} from "react";

interface PropsBtn {
  textStyle?: string,
  value: string,
  type?: "submit" | "reset" | "button",
  inputType?: string,
  disable?: boolean,
  className?: string,
  handleOnclick: () => void,
}

export default function Button(props: PropsBtn) {
  const { value,textStyle, inputType, type = "submit", disable = false, className = "", handleOnclick } = props;
  const defaultClasses = "font-medium px-[25px] py-[8px] rounded-[3px] bg-secondary text-white text-[14px] leading-[16.71px] inline-flex items-center space-x-2 relative";
  const combinedClasses = `${defaultClasses} ${className}`;

    return (
        <button
            disabled={isDisabled}
            {...rest}
            className={`flex justify-center items-center gap-[6px]
              text-[14px] rounded-[3px] px-5 leading-[16.71px] font-medium transition disabled:bg-disable disabled:text-input disabled:border disabled:border-stroke disabled:cursor-not-allowed ${
                  isIcon ? "px-0" : ""
              } ${className} ${getVariantClass(variant)} ${getErrorClass(
                variant
            )} ${getSizeClass(size)} ${getOutline(color)}`}
            style={{fontFamily: "inherit"}}>
            {prefixIcon && <span className="w-4 h-4">{prefixIcon}</span>}
            <span className={`${isIcon ? "[&_svg]:w-6 [&_svg]:h-6" : ""}`}>
                {children}
            </span>
        </button>
    );
}
