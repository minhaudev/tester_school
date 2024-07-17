"use client";
import Frame from "@/assets/svgs/link_alt.svg";
import Delete from "@/assets/svgs/Dell_duotone.svg";
import FileDock from "@/assets/svgs/File_dock_duotone.svg";
import ImportLight from "@/assets/svgs/Import_light.svg";
import Link from "next/link";
import React, {
    ReactNode,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes
} from "react";

interface FileDetail {
    name: string;
    size: number;
}

interface PropsBtn {
    variant:
        | "file"
        | "primary-light"
        | "primary-dark"
        | "secondary"
        | "dashed"
        | "link"
        | "text";
    size: "2xl" | "large" | "semi" | "medium" | "small";
    color?: "white" | "blue" | "blue-dark";
    isDisabled?: boolean;
    children?: ReactNode;
    prefixIcon?: ReactNode;
    url?: string;
    isError?: boolean;
    isIcon?: boolean;
    className?: string;
    onDelete?: (index: number) => void;
    fileDetails?: FileDetail[];
    setFileDetails?: React.Dispatch<React.SetStateAction<FileDetail[]>>;
    typeFile?: string;
}

Button.defaultProps = {
    variant: "file",
    size: "semi",
    isDisabled: false,
    isError: false,
    isIcon: false,
    className: "",
    typeFile: ""
};

export default function Button(
    props: PropsBtn &
        ButtonHTMLAttributes<HTMLButtonElement> &
        AnchorHTMLAttributes<HTMLAnchorElement>
) {
    const {
        onDelete,
        isIcon,
        variant,
        size,
        isDisabled,
        isError,
        prefixIcon,
        url,
        color,
        children,
        className,
        fileDetails,
        setFileDetails,
        ...rest
    } = props;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && setFileDetails) {
            const files = Array.from(event.target.files).map((file) => ({
                name: file.name,
                size: file.size
            }));
            if (files.length > 5) {
                alert("Không được phép chọn quá 5 file.");
                return;
            }
            setFileDetails(files);
        }
    };

    const getVariantClass = (variant: string) => {
        switch (variant) {
            case "primary-light":
                return "bg-secondary text-white hover:bg-secondary-hover ";
            case "primary-dark":
                return "bg-primary-5 text-white hover:bg-primary-5-hover";
            case "secondary":
                return "bg-white border border-stroke hover:bg-highlight hover:border-primary-5-hover hover:text-primary-5-hover text-text";
            case "dashed":
                return "bg-white border border-stroke border-dashed hover:bg-highlight hover:border-primary-5-hover hover:text-primary-5-hover text-text";
            case "link":
                return "bg-[transparent] text-primary hover:text-primary-5-hover";
            case "text":
                return "bg-[transparent] text-text hover:bg-white";
            case "file":
            default:
                return "";
        }
    };

    const getErrorClass = (variant: string) => {
        if (isError) {
            switch (variant) {
                case "primary-light":
                case "primary-dark":
                    return "bg-warning hover:bg-warning-hover text-white";
                case "secondary":
                    return "bg-white border border-warning hover:border-warning-hover hover:text-warning-hover text-warning";
                case "dashed":
                    return "bg-white border border-dashed border-warning hover:border-warning-hover hover:text-warning-hover text-warning";
                case "link":
                case "text":
                    return "bg-[transparent] text-warning hover:text-warning-hover";
                case "file":
                default:
                    return "";
            }
        }
    };

    const getOutline = (color?: string) => {
        if (variant === "secondary" || variant === "dashed") {
            switch (color) {
                case "white":
                    return "bg-[transparent] border-white hover:border-white hover:bg-[transparent] hover:text-white text-white hover:opacity-60";
                case "blue":
                    return "!border-secondary hover:!border-secondary-hover hover:!text-secondary-hover !text-secondary";
                case "blue-dark":
                    return "!border-primary-5 hover:!border-primary-5-hover hover:!text-primary-5-hover !text-primary-5";
                default:
                    return "";
            }
        }
        return "";
    };

    const getSizeClass = (size: string) => {
        switch (size) {
            case "2xl":
                return "min-w-[50px] min-h-[50px]";
            case "large":
                return "min-w-[40px] min-h-[40px]";
            case "semi":
                return "min-w-[36px] min-h-[36px]";
            case "medium":
                return "min-w-[32px] min-h-[32px]";

            case "small":
                return "min-w-[22px] min-h-[22px]";
            default:
                return "";
        }
    };

    if (variant === "link") {
        const anchorProps = {
            ...rest
        } as AnchorHTMLAttributes<HTMLAnchorElement>;

        return (
            <Link
                {...anchorProps}
                href={url || ""}
                className={`inline-flex justify-center items-center gap-[6px]
                text-[14px] rounded-[3px] px-5 leading-[16.71px] font-medium transition op ${className} ${getVariantClass(
                    variant
                )} ${
                    isDisabled ?
                        "text-input cursor-not-allowed pointer-events-none"
                    :   ""
                }  ${getErrorClass(variant)}`}
                style={{fontFamily: "inherit"}}>
                {prefixIcon && <span className="w-4 h-4">{prefixIcon}</span>}
                <span className={`${isIcon ? "[&_svg]:w-5 [&_svg]:h-5 " : ""}`}>
                    {children}
                </span>
            </Link>
        );
    }

    if (variant === "file") {
        return (
            <div className="file-input-container">
                <label
                    htmlFor="file-input"
                    className={`inline-flex justify-center items-center gap-[6px]
                  text-[14px] rounded-[3px] px-5 leading-[16.71px] font-medium transition cursor-pointer bg-white text-primary border border-stroke hover:bg-highlight hover:border-primary-5-hover ${isIcon} ${className} ${getSizeClass(
                      size
                  )}`}>
                    <input
                        type="file"
                        id="file-input"
                        hidden
                        onChange={handleFileChange}
                        multiple={true}
                        accept=".doc,.docx,.pdf,.jpg,.jpeg,.png,.xlsx,.xls,.csv,.txt,.ppt,.pptx,.zip,.rar,.gif,.bmp,.tiff,.svg,.html,.htm,.xml,.json,.mp3,.wav,.mp4,.avi,.mov"
                    />
                    <span className="w-4 h-4">
                        <Frame />
                    </span>
                    <span>
                        {fileDetails && fileDetails.length === 1 ?
                            fileDetails[0].name
                        : fileDetails && fileDetails.length > 1 ?
                            `${fileDetails.length} multiple file`
                        :   children}
                    </span>
                </label>
                {fileDetails && fileDetails.length > 1 && (
                    <div>
                        <div className="flex-col mt-2 w-fit max-w-[620px] rounded-[5px] h-auto border border-stroke py-2 px-4">
                            <ul className="flex gap-4 flex-wrap justify-between">
                                {fileDetails
                                    .slice(0, 10)
                                    .map((fileDetail, index) => (
                                        <li
                                            className="cursor-pointer"
                                            key={index}>
                                            <div className="min-w-[200px] ">
                                                <a
                                                    className="flex justify-between max-w-[164px] items-center"
                                                    href=""
                                                    download>
                                                    <FileDock className="w-[21.33px] h-[26.67px]" />
                                                    <div>
                                                        <p className="text-[#4B5563] font-normal text-[12px] leading-[14.32px]">
                                                            {(
                                                                fileDetail.name
                                                                    .length > 10
                                                            ) ?
                                                                `${fileDetail.name.slice(
                                                                    0,
                                                                    10
                                                                )}...${fileDetail.name.slice(
                                                                    fileDetail.name.lastIndexOf(
                                                                        "."
                                                                    )
                                                                )}`
                                                            :   fileDetail.name}
                                                        </p>
                                                        <p className="font-normal text-[11px] text-input leading-[13.13px]">
                                                            {(
                                                                fileDetail.size /
                                                                1024
                                                            ).toLocaleString()}{" "}
                                                            MB
                                                        </p>
                                                    </div>
                                                    <ImportLight className="text-primary w-4 h-4" />
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <button
            disabled={isDisabled}
            {...rest}
            className={`flex justify-center items-center gap-[6px] text-[14px] rounded-[3px] px-5 leading-[16.71px] font-medium transition ${className} ${getVariantClass(
                variant
            )} ${getSizeClass(size)} ${getErrorClass(variant)} ${getOutline(
                color
            )} ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
            style={{fontFamily: "inherit"}}>
            {prefixIcon && <span className="w-4 h-4">{prefixIcon}</span>}
            <span className={`${isIcon ? "[&_svg]:w-5 [&_svg]:h-5 " : ""}`}>
                {children}
            </span>
        </button>
    );
}
