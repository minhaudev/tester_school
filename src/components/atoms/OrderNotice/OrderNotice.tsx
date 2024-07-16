import React from "react";
import Button from "../Button/Button";
import {formatDate} from "@/utils/FormatDate";
interface Notice {
    id: string;
    content: string;
    timestamp: string;
    type?: string;
    read?: boolean;
}
interface PropsOrderNotice {
    dataNotice: Notice[];
}
export default function OrderNotice(props: PropsOrderNotice) {
    const {dataNotice} = props;
    const handleOnclick = () => {
        console.log("see more");
    };
    const latestNotices = dataNotice.slice(-5);
    return (
        <div className="rounded-[10px] transition transform absolute min-w-[325px] h-auto shadow-[0px_4px_11px_0px_rgba(0,0,0,0.1)] left-[-149px] py-4 mt-4">
            <div className="font-medium mb-4 text-[16px] leading-[19.09px] text-text px-4">
                Notifications
            </div>
            {latestNotices.map((item, index) => (
                <div key={item.id}>
                    <div className="py-[12px] cursor-pointer border-t border-b border-stroke hover:bg-highlight hover:text-primary">
                        <p className="w-full px-4 mb-1 text-[13px] font-medium leading-[18.2px]">
                            {item.content}
                        </p>
                        <p className="text-input text-[12px] font-normal leading-[14.32px] px-4">
                            {formatDate(item.timestamp)}
                        </p>
                    </div>
                </div>
            ))}
            <div className="text-center">
                <Button
                    className="text-[14px] font-medium leading-[16.71px] mt-4"
                    target="_blank"
                    url="https://www.youtube.com/watch?v=AJtDXIazrMo&list=PLPSCssPYXhWTTcpNZwYoEQWt8Wc8KO0NV&index=18"
                    variant="link">
                    See all
                </Button>
            </div>
        </div>
    );
}
