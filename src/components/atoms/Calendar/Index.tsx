import React from "react";
import {registerLocale} from "react-datepicker";
import {enGB} from "date-fns/locale";
import DatePicker from "react-datepicker";
import "./style.css";
interface Props {
    minDate?: Date | undefined;
    maxDate?: Date | undefined;

    selectsRange?: boolean;
    startDate?: Date | undefined;
    selectedDate?: Date | undefined;
    endDate?: Date | undefined;
    placeholder?: string;

    formatDate?: "dd/MM/yyyy" | "MM/dd/yyyy" | "yyyy/MM/dd";
    isShowIcon?: boolean;
    isShowIconRight?: boolean;
    onChange?: (dates: [Date | null, Date | null]) => void;
}
export default function Calendar(props: Props) {
    const {
        selectedDate,
        placeholder,
        minDate,
        maxDate,
        isShowIcon,
        formatDate,
        isShowIconRight,
        startDate,
        endDate,
        onChange,
        selectsRange = false
    } = props;
    const customLocale = {
        ...enGB,
        localize: {
            ...enGB.localize,
            day: (n: any) =>
                ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n]
        },

        options: {
            weekStartsOn: 0
        }
    };

    registerLocale("custom", customLocale as any);
    return (
        <div
            className={`${isShowIconRight ? "icon-right" : "icon-left"} w-full`}>
            <DatePicker
                minDate={minDate}
                maxDate={maxDate}
                selected={selectedDate}
                showIcon={isShowIcon}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange={selectsRange as true}
                dateFormat={formatDate}
                locale="custom"
                renderDayContents={(day, date) => (
                    <div className="react-datepicker__inside-day">{day}</div>
                )}
            />
        </div>
    );
}
