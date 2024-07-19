import React, {useState} from "react";

import Calendar from "@/assets/svgs/Calendar.svg";
const TestInput = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [select, setSelect] = useState("");

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date) {
            setInputValue(date.toLocaleDateString());
        } else {
            setInputValue("");
        }
    };

    const handleOnChange = (
        e: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setSelect(value);
        console.log(select);
    };

    return (
        <div className=""></div>
        // <Input
        //     // suffix={<Calendar />}
        //     error
        //     helperText="this is a helppertext"
        //     require
        //     className="focus:border focus:!border-secondary"
        //     variant="select"
        //     label="Chọn Ngày:"
        //     placeholder="Công ty TNHH Thép Thiên Phước"
        //     value={inputValue}
        //     showCalendar={showCalendar}
        //     setShowCalendar={setShowCalendar}
        //     selectedDate={selectedDate}
        //     handleDateChange={handleDateChange}
        //     handleOnChange={handleOnChange}
        //     handleSelectChange={handleSelectChange}
        // />
    );
};

export default TestInput;
