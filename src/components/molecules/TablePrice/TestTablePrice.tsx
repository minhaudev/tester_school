import LayoutContainer from "@/app/LayoutContainer";
import DataTable from "@/components/atoms/Datatable";
import React from "react";
import "./styles.css";
import {twMerge} from "tailwind-merge";

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

    return (
        <>
            <DataTable className="w-full bg-white  " tableId={""}>
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="flex flex-row  ">
                            <th
                                className={`${thClasses} min-w-[264px] !p-0  min-h-[56px] max-h-[56px] border-l-0 flex flex-col justify-start`}>
                                <div className="min-w-[264px] max-h-[28px] min-h-[28px] flex-center border-b border-stroke">
                                    Special discount price
                                </div>
                                <div className="min-w-[264px] min-h-[28px] max-h-[28px] flex">
                                    <div className="flex-center min-w-[88px] border-r border-stroke">
                                        VND/KG
                                    </div>
                                    <div className="flex-center min-w-[88px] border-r border-stroke">
                                        %
                                    </div>
                                    <div className="flex-center min-w-[88px]">
                                        VND
                                    </div>
                                </div>
                            </th>
                            <th
                                className={`${thClasses} min-w-[264px] !p-0  min-h-[56px] max-h-[56px] border-l-0 flex flex-col justify-start`}>
                                <div className="min-w-[264px] max-h-[28px] min-h-[28px] flex-center border-b border-stroke">
                                    Special discount price
                                </div>
                                <div className="min-w-[264px] min-h-[28px] max-h-[28px] flex">
                                    <div className="flex-center min-w-[88px] border-x border-stroke">
                                        VND/KG
                                    </div>
                                    <div className="flex-center min-w-[88px] border-r border-stroke">
                                        %
                                    </div>
                                    <div className="flex-center min-w-[88px]">
                                        VND
                                    </div>
                                </div>
                            </th>
                            <th className={`${thClasses} flex-1 px-4`}>
                                Specifications
                            </th>
                            <th
                                className={`${thClasses} min-w-[81px] flex-col`}>
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[94px] flex-col`}>
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className={`${thClasses} min-w-[98px]`}>
                                Prime
                            </th>
                            <th className={`${thClasses} min-w-[145px]`}>
                                Preferred tolerances
                            </th>
                            <th
                                className={`${thClasses} min-w-[80px] flex-col`}>
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[104px] flex-col`}>
                                Discounted price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th
                                className={`${thClasses} min-w-[78px] flex-col border-r-[1px]`}>
                                Rebate offer
                                <span className="text-unit">(VND)</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row odd:bg-highlight even:bg-white">
                            <td
                                className={`${tdClasses} min-w-[88px] border-l-0 flex-center`}></td>
                            <td
                                className={`${tdClasses} min-w-[88px] flex-center`}></td>
                            <td
                                className={`${tdClasses} flex-1 min-w-[88px] flex-center `}></td>
                            <td
                                className={`${tdClasses} min-w-[88px] border-l-0 flex-center`}></td>
                            <td
                                className={`${tdClasses} min-w-[88px] flex-center`}></td>
                            <td
                                className={`${tdClasses} flex-1 min-w-[88px] flex-center `}></td>
                            <td className={`${tdClasses} min-w-[80px] `}></td>
                            <td className={`${tdClasses} min-w-[104px] `}></td>
                            <td
                                className={`${tdClasses} min-w-[78px] border-r-[1px]`}></td>
                        </tr>
                    </tbody>
                </table>
            </DataTable>
        </>
    );
};

export default TestTable;
