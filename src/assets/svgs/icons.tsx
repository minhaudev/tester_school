interface IconProps {
    width: string;
    height: string;
    fill?: string;
    className?: any;
}
export const SuccessfulIcon = ({width = "40px", height = "40px"}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_16336)">
            <path
                d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                stroke="#01559B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 20L18.3333 23.3333L25 16.6666"
                stroke="#01559B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_5_16336">
                <rect width="40" height="40" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export const WarningIcon = ({
    width = "40px",
    height = "40px",
    fill = "EB557F"
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_16331)">
            <path
                d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                stroke="#ED1E24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 13.3333V20"
                stroke="#ED1E24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20 26.6667H20.0167"
                stroke="#ED1E24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_5_16331">
                <rect width="40" height="40" fill={fill} />
            </clipPath>
        </defs>
    </svg>
);
export const CheckFillIcon = ({
    width = "40px",
    height = "40px",
    fill = "EB557F"
}) => (
    <svg
        width={width}
        height={width}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.76822 12.6402L13.7682 6.64018L12.2318 5.35982L7.9328 10.5186L5.70711 8.29289L4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402Z"
            fill={fill}
        />
    </svg>
);
export const CircleIcon = ({
    width = "40px",
    height = "40px",
    fill = "EB557F"
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill={fill}>
        <circle cx="10" cy="10" r="10" fill={fill} />
    </svg>
);
export const ApproveNoteIcon = ({
    width = "40px",
    height = "40px",
    fill ,
    className
}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none">
        <g clip-path="url(#clip0_5_17175)">
            <path
                d="M2 13.3333L2.86667 10.7333C2.11763 9.62549 1.84666 8.31358 2.10415 7.04151C2.36163 5.76943 3.13004 4.62375 4.26651 3.81749C5.40298 3.01122 6.83017 2.59924 8.28273 2.65813C9.73528 2.71703 11.1143 3.24279 12.1635 4.13768C13.2127 5.03256 13.8606 6.23567 13.9867 7.52329C14.1128 8.81092 13.7086 10.0955 12.8492 11.1381C11.9899 12.1807 10.7338 12.9104 9.31453 13.1915C7.89529 13.4727 6.40947 13.2862 5.13333 12.6666L2 13.3333"
                stroke="#01559B"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 8V8.00667"
                stroke="#01559B"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.3335 8V8.00667"
                stroke="#01559B"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.6665 8V8.00667"
                stroke="#01559B"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_5_17175">
                <rect width="16" height="16"  />
            </clipPath>
        </defs>
    </svg>
);
