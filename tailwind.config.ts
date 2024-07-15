import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],

    theme: {
        colors: {
            text: "#3A3B3C",
            "text-light": "#4B5563",
            primary: "#01559B",
            secondary: "#00ADEF",
            stroke: "#E4E4E4",
            highlight: "#F2F5F8",
            white: "#FFFFFF",
            input: "#929292",
            unit: "#A2A5A9",
            green: "#69AA43",
            greenLight: "#70E28D",
            orange: "#ED8400",
            red: "#ED1E24",
            dangerous: "#FFF4F4",
            violet: "#A644F6",
            blue: "#5A92F7",
            "blue-bold": "#1E4D83",
            pink: "#FFEDDF",
            yellow: "#F5BF00",
            "custom-light-blue": "#EDFAFF",
            "primary-1": "#111D2C",
            "primary-2": "#112A45",
            "primary-3": "#15395B",
            "primary-4": "#164C7E",
            "primary-5": "#01559B",
            "primary-6": "#1765AD",
            "primary-7": "#177DDC",
            "primary-8": "#3C9AE8",
            "primary-9": "#65B7F3",
            "primary-10": "#65B7F3",
            gray: "#9A9C9F",
            "gray-1": "#FFFFFF",
            "gray-2": "#FAFAFA",
            "gray-3": "#F5F5F5",
            "gray-4": "#d9d9d9",
            "gray-5": "#FFFFFF",
            "gray-6": "#bfbfbf",
            " gray-7": "#8c8c8c",
            " gray-8": "#595959",
            " gray-9": "#434343",
            "gray-10": "#262626",
            "gray-11": "#1f1f1f",
            "gray-12": "#141414"
        },
        extend: {
            backgroundColor: {
                "green-bold": "#69AA43",

                secondary: "#00ADEF",
                primary: "#E9E9E9",
                "red-bold": "#ED1E24",
                confirm: "#D6292E",
                yellow: "#F5BF00",

                "red-light": "#FFEEEE",
                "warning-light": "#FFFBEB",
                "blue-bold": "#01559B",
                highlight: "#F2F5F8",
                green: "#F2FFEB",
                stroke: "#E4E4E4",

                normal: "#EDFAFF",
                warning: "#FCE7E7", // Updated from backgrounds to backgroundColor
                success: "#D2E5F5" // Updated from backgrounds to backgroundColor
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(90deg, #00ADEE 0%, #0087CA 15%, #006CAF 29%, #005CA0 41%, #00569A 50%, #005CA0 59%, #006CAF 71%, #0087CA 85%, #00AEEF 100%)"
            },
            fontSize: {
                "title-20": "20pt",
                "title-16": "16pt",
                "body-14": "14pt",
                "body-13": "13pt",
                "body-12": "12pt",
                "captions-11": "11pt"
            },
            lineHeight: {
                "title-20": "1", // Auto
                "title-16": "1", // Auto
                "body-14": "1", // Auto
                "body-13": "1", // Auto
                "body-12": "1", // Auto
                "captions-11": "12pt"
            },
            fontWeight: {
                medium: "500",
                bold: "700",
                regular: "400",
                semibold: "600",
                light: "300"
            },
            borderRadius: {
                "custom-sm": "5px" // Define your custom border-radius value here
            },
            borderColor: {
                input: "#D0D5DD",
                normal: "#00ADEF",
                success: "#01559B",
                warning: "#ED1E24",
                stroke: "#E4E4E4"
            },
            maxWidth: {
                "custom-448": "448px" // Define custom max-width value
            }
        },
        fontFamily: {
            "sf-ui-display": ["SF UI Display", "sans-serif"]
        }
    },
    plugins: []
};
export default config;
