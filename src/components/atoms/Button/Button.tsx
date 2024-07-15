"use client";

import Image from "next/image";
import frame from "@/assets/images/Frame.svg";

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
    <div>
      <button
        disabled={disable}
        type={type}
        className={disable ? `${combinedClasses} cursor-default bg-highlight text-input` : combinedClasses}
        onClick={handleOnclick}
      >
        {inputType &&  <div> <Image src={frame} alt="icon" />
      
          <input type={inputType} className="absolute inset-0 opacity-0 cursor-pointer" /></div>}
          <span className={textStyle}>{value}</span>
      </button>
    </div>
  );
}
