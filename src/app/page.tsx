"use client";
import TimeValidate from "@/components/atoms/TimeValidate";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import TableFuture from "@/components/molecules/TableFuture";
import {NavigationType} from "@/interfaces";
import {useEffect, useState} from "react";
export default function Home() {
    // const [fileDetails, setFileDetails] = useState([]);

    // const handleFileDetailsChange = (details: any) => {
    //     setFileDetails(details);
    // };
    const [timeAble, setTimeAble] = useState(0);
    const [currentPercent, setCurrentPercent] = useState(0);
    const endDate = new Date(Date.parse("2024-07-20T19:45:00")).getTime();
    const startDate = new Date(Date.parse("2024-07-17T23:20:00")).getTime();
    const totalTime = endDate - startDate;
    const diffHours = totalTime / (1000 * 60 * 60);
    useEffect(() => {
        setInterval(() => {
            const timeAble = (endDate - Date.now()) / (1000 * 60 * 60);
            setTimeAble(() => timeAble);
            const currentPercent = (timeAble / diffHours) * 100;
            if (timeAble <= 0) {
                setCurrentPercent(0);
            } else {
                setCurrentPercent(currentPercent);
            }
            console.log("check current ::: ", currentPercent);
        }, 1000);
    }, []);
    return (
        <div className="flex w-full">
            <TimeValidate currentTime={timeAble} totalTime={diffHours} />
            <div className="w-[90px] h-[5px] bg-green rounded-md ">
                <div
                    className={`bg-red  h-[5px] rounded-md`}
                    style={{width: `${currentPercent}%`}}></div>
            </div>
            {/* <Navigation type={NavigationType.CLIENT} />
            <Header /> */}
            {/* <Button
                size="semi"
                variant="file"
                color="white"
                fileDetails={fileDetails}
                setFileDetails={handleFileDetailsChange}>
                Button
            </Button> */}
            {/* <TableFuture /> */}
        </div>
    );
}
