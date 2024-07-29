import LayoutContainer from "@/app/LayoutContainer";
import DataTable from "@/components/atoms/Datatable";
import React, {useEffect, useRef} from "react";
import "./styles.css";
import {twMerge} from "tailwind-merge";
import Input from "@/components/atoms/Input";

const TestTable = () => {
    const tableClasses = twMerge(
        "min-h-[56px] flex justify-center items-center border-stroke border-b border-l"
    );
    const thClasses = twMerge(
        tableClasses,
        "border-t text-[12px] font-semibold"
    );
    const tdClasses = twMerge(
        tableClasses,
        "text-text text-[13px] font-normal"
    );

    // Tạo mảng refs cho các container và thead
    const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const synchronizeScroll = (index: number) => {
        const scrollLeft = containerRefs.current[index]?.scrollLeft || 0;
        containerRefs.current.forEach((container, idx) => {
            if (container && idx !== index) {
                container.scrollLeft = scrollLeft;
            }
        });
    };

    // useEffect(() => {
    //     const handleScroll = (index: number) => () => synchronizeScroll(index);

    //     containerRefs.current.forEach((container, index) => {
    //         if (container) {
    //             container.addEventListener("scroll", handleScroll(index));
    //         }
    //     });

    //     return () => {
    //         containerRefs.current.forEach((container, index) => {
    //             if (container) {
    //                 container.removeEventListener(
    //                     "scroll",
    //                     handleScroll(index)
    //                 );
    //             }
    //         });
    //     };
    // }, []);

    return (
        <div className="w-full overflow-x-hidden maw-w-[1200px]">
            <div className="w-full  overflow-scroll ">
                <div className={`flex w-full`}>
                    <div className="sticky left-0 bg-white">
                        <div className="flex">
                            <th
                                className={`${thClasses} min-w-[50px] px-1 2xl:min-w-[56px] w-full flex-center `}>
                                No
                            </th>
                            <th
                                className={`${thClasses} min-w-[50px] px-1 2xl:min-w-[55PX] w-full flex-center `}>
                                Type
                            </th>
                            <th
                                className={`${thClasses} min-w-[140px] px-1 2xl:min-w-[199px] w-full flex-center `}>
                                Specifications
                            </th>
                            <th
                                className={`${thClasses} min-w-[70px] px-1 2xl:min-w-[81px] w-full flex-col `}>
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[90px] px-1 2xl:min-w-[94px] w-full flex-col `}>
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[90px] px-1 2xl:min-w-[98px] w-full flex-center `}>
                                Prime
                            </th>
                            <th
                                className={`${thClasses} min-w-[140px] px-1 2xl:min-w-[145px] w-full flex-center `}>
                                Preferred tolerances
                            </th>
                            <th
                                className={`${thClasses} min-w-[75px] 2xl:min-w-[80px] w-full flex-col `}>
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[104px] 2xl:min-w-[104px] w-full flex-col `}>
                                Discounted price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[78px] 2xl:min-w-[78px] w-full flex-col border-r `}>
                                Rebate offer
                                <span className="text-unit">(VND)</span>
                            </th>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <th
                                className={`${thClasses} min-w-[264px] !p-0 min-h-[56px] max-h-[56px] border-l-0 flex flex-col justify-start`}>
                                <div className="min-w-[264px] max-h-[28px] min-h-[28px] flex-center border-b border-stroke">
                                    Special discount price
                                </div>
                                <div className="min-w-[264px] min-h-[28px] max-h-[28px] flex">
                                    <div className="flex-center text-unit min-w-[88px] border-r border-stroke">
                                        VND/KG
                                    </div>
                                    <div className="flex-center text-unit min-w-[88px] border-r border-stroke">
                                        %
                                    </div>
                                    <div className="flex-center text-unit min-w-[88px]">
                                        VND
                                    </div>
                                </div>
                            </th>
                            <th
                                className={`${thClasses} min-w-[264px] !p-0 min-h-[56px] max-h-[56px] border-l border-stroke flex flex-col justify-start`}>
                                <div className="min-w-[264px] max-h-[28px] min-h-[28px] flex-center border-b border-stroke">
                                    Special rebate offer
                                </div>
                                <div className="min-w-[264px] min-h-[28px] max-h-[28px] flex">
                                    <div className="flex-center text-unit min-w-[88px] border-x border-stroke">
                                        VND/KG
                                    </div>
                                    <div className="flex-center text-unit min-w-[88px] border-r border-stroke">
                                        %
                                    </div>
                                    <div className="flex-center text-unit min-w-[88px]">
                                        VND
                                    </div>
                                </div>
                            </th>
                            <th className={`${thClasses} min-w-[133px]`}>
                                Fulfillment
                            </th>
                            <th
                                className={`${thClasses} flex flex-col min-w-[157px] w-full`}>
                                Final price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th
                                className={`${thClasses} flex flex-col min-w-[156px] w-full`}>
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className={`${thClasses} min-w-[126px] w-full`}>
                                Status
                            </th>
                            <th className={`${thClasses} min-w-[126px] w-full`}>
                                Action
                            </th>
                        </div>
                    </div>
                </div>

                {/* Thêm các container khác với refs tương ứng */}
                {[0, 1, 2, 3].map((item) => (
                    <div key={item} className={`flex w-full bg-green`}>
                        <div className="sticky left-0 z-50">
                            <div
                                className={`flex ${(item + 1) % 2 ? " bg-highlight" : "bg-white"}`}>
                                <th
                                    className={`${thClasses} min-w-[50px] px-1 2xl:min-w-[56px] w-full flex-center`}>
                                    01
                                </th>
                                <th
                                    className={`${thClasses} min-w-[50px] px-1 2xl:min-w-[55PX] w-full flex-center`}></th>
                                <th
                                    className={`${thClasses} min-w-[140px] px-1 2xl:min-w-[199px] w-full flex-center`}></th>
                                <th
                                    className={`${thClasses} min-w-[70px] px-1 2xl:min-w-[81px] w-full flex-col`}></th>
                                <th
                                    className={`${thClasses} min-w-[90px] px-1 2xl:min-w-[94px] w-full flex-col`}></th>

                                <th
                                    className={`${thClasses} min-w-[90px] px-1 2xl:min-w-[98px] w-full flex-center`}></th>
                                <th
                                    className={`${thClasses} min-w-[140px] px-1 2xl:min-w-[145px] w-full flex-center`}></th>
                                <th
                                    className={`${thClasses} min-w-[75px] 2xl:min-w-[80px] w-full flex-col`}></th>
                                <th
                                    className={`${thClasses} min-w-[104px] 2xl:min-w-[104px] w-full flex-col`}></th>
                                <th
                                    className={`${thClasses} min-w-[78px] 2xl:min-w-[78px] w-full flex-col border-r`}></th>
                            </div>
                        </div>
                        <div
                            className={`w-full ${(item + 1) % 2 ? " bg-highlight" : "bg-white"}`}>
                            <div className="flex">
                                <th
                                    className={`${thClasses} min-w-[264px] !p-0 min-h-[56px] max-h-[56px] border-l-0 flex  justify-start`}>
                                    <div className="min-w-[88px] border-l-0 h-full flex-center  py-[10px] px-[8px]  border-stroke">
                                        <Input placeholder="Enter" />
                                    </div>
                                    <div className="min-w-[88px] border-l-0 h-full flex-center py-[10px] px-[8px]  border-stroke">
                                        <Input placeholder="Enter" />
                                    </div>
                                    <div className="min-w-[88px] border-l-0 h-full flex-center py-[10px] px-[8px]  border-stroke">
                                        <Input placeholder="Enter" />
                                    </div>
                                </th>
                                <th
                                    className={`${thClasses} min-w-[264px] !p-0 min-h-[56px] max-h-[56px] border-l border-stroke flex  justify-start`}>
                                    <div className="min-w-[88px] border-l h-full flex-center py-[10px] px-[8px]  border-stroke">
                                        {" "}
                                        <Input placeholder="Enter" />
                                    </div>
                                    <div className="min-w-[88px] border-l h-full flex-center py-[10px] px-[8px]  border-stroke">
                                        {" "}
                                        <Input placeholder="Enter" />
                                    </div>
                                    <div className="min-w-[88px] border-l h-full flex-center py-[10px] px-[8px]  border-stroke">
                                        {" "}
                                        <Input placeholder="Enter" />
                                    </div>
                                </th>
                                <th
                                    className={`${thClasses} min-w-[133px]`}></th>
                                <th
                                    className={`${thClasses} min-w-[157px] w-full`}>
                                    {(312000).toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND"
                                    })}
                                </th>
                                <th
                                    className={`${thClasses} min-w-[156px] w-full`}></th>
                                <th
                                    className={`${thClasses} min-w-[126px] w-full`}></th>
                                <th
                                    className={`${thClasses} min-w-[126px] w-full`}></th>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestTable;
