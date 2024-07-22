"use client";
import {twMerge} from "tailwind-merge";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "@/app/LayoutContainer";
import {dataList} from "@/faker/AccountBalance";
import Sort from "@/assets/svgs/Sort_arrow.svg";
import Checkbox from "@/components/atoms/Checkbox";
import Propertie from "@/components/atoms/Properties/Propertie";
import Circle from "@/assets/svgs/Circle.svg";
import TimeFill from "@/assets/svgs/TimeFill.svg";
import ValidityTime1 from "@/assets/svgs/validity_time_1.svg";
import ValidityTime2 from "@/assets/svgs/validity_time_2.svg";
import ValidityTime3 from "@/assets/svgs/validity_time_3.svg";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
export default function Home() {
    const theadClasses = twMerge(
        "min-h-[56px] px-4 py-2 flex justify-center items-center border-stroke border-y border-l"
    );
    const thbodyClasses = twMerge(
        "min-h-[56px] px-4 py-2  text-[13px] font-normal border-stroke border-b border-l text-text flex justify-center items-center"
    );
    return (
        <LayoutContainer>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed">
                    <thead>
                        <tr className="flex flex-row">
                            <th className={`w-[4%] ${theadClasses} border-l-0`}>
                                No
                            </th>
                            <th className={`w-[4%] ${theadClasses}`}>Type</th>
                            <th className={`w-[27%] ${theadClasses}`}>
                                Specifications
                            </th>
                            <th className={`w-[7%] flex-col ${theadClasses}`}>
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className={`w-[8%] flex-col ${theadClasses}`}>
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className={`w-[8%] ${theadClasses}`}>Prime</th>
                            <th className={`w-[11%] ${theadClasses}`}>
                                Preferred tolerances
                            </th>
                            <th className={`w-[9%] flex-col ${theadClasses}`}>
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>

                            <th className={`w-[9%] flex-col ${theadClasses}`}>
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className={`w-[5%] ${theadClasses}`}>Status</th>
                            <th className={`w-[8%] ${theadClasses}`}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row ">
                            <td
                                className={`w-[4%] ${thbodyClasses} border-l-0`}>
                                01
                            </td>
                            <td className={`w-[4%] ${thbodyClasses}`}></td>
                            <td className={`w-[27%] ${thbodyClasses}`}></td>
                            <td className={`w-[7%] ${thbodyClasses}`}></td>
                            <td className={`w-[8%] ${thbodyClasses}`}></td>
                            <td className={`w-[8%] ${thbodyClasses}`}></td>
                            <td className={`w-[11%] ${thbodyClasses}`}></td>
                            <td className={`w-[9%] ${thbodyClasses}`}></td>
                            <td className={`w-[9%] ${thbodyClasses}`}></td>
                            <td className={`w-[5%] ${thbodyClasses}`}></td>
                            <td className={`w-[8%] ${thbodyClasses}`}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
        </LayoutContainer>
    );
}
