import React, {useState} from "react";
import {dataList} from "@/faker/AccountBalance";
import {number_format} from "@/utils/FormatNumber";
export default function Index() {
    return (
        <div>
            <div className="w-[100%] h-[292px] bg-white py-[32px] px-[24px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between">
                    <p className="text-[16px] leading-[19.09px] font-medium">
                        Customer account balance
                    </p>
                    <p className="font-medium text-[12px] leading-[14.32px] text-primary">
                        Eligible for new enquiries
                    </p>
                </div>
                <div>
                    <div className="w-[100%]">
                        <div className="text-input flex mb-2 justify-between font-medium text-[12px] leading-[14.32px]">
                            <div className="w-[25%]"></div>
                            <div className="w-[25%]">Total(VND)</div>
                            <div className="w-[25%]">Percentage</div>
                            <div className="w-[25%] text-end">
                                Average invoicing aging(days)
                            </div>
                        </div>
                    </div>
                    {dataList.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full ${index !== dataList.length - 1 ? "border-b border-stroke" : ""}`}>
                            <div className="flex w-full justify-end items-end mt-[7px] mb-[7px] text-[#4B5563] text-[11px] font-medium leading-[13.13px]">
                                <p className="w-[25%] ">{item.title}</p>
                                <p className="w-[25%] ">
                                    {new Intl.NumberFormat().format(item.value)}
                                </p>
                                <p className="w-[25%] pl-8">
                                    {item.percentage !== 0 ?
                                        `${item.percentage}%`
                                    :   "--"}
                                </p>
                                <p className="w-[25%] text-end ">
                                    {new Intl.NumberFormat().format(item.count)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
