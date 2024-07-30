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
           <DataTable className="w-full text-center" tableId={""} >
                    <tr className="bg-white">
                        <th className={`${thClasses} w-[55px] border-l-0 `}>
                            No
                        </th>
                        <th className={`${thClasses} w-[55px] `}>
                            Type
                        </th>
                        <th className={`${thClasses}`}>
                            Specifications
                        </th>
                        <th className={`${thClasses} w-[93px] `}>
                            <div className="flex flex-col">
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </div>
                        </th>
                        <th className={`${thClasses} w-[119px]`}>
                            <div className="flex flex-col">
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </div>
                        </th>
                        <th className={`${thClasses} w-[113px]`}>
                            Prime
                        </th>
                        <th className={`${thClasses} w-[158px]`}>
                            Preferred tolerances
                        </th>
                        <th className={`${thClasses} w-[120px] `}>
                            <div className="flex flex-col">
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </div>
                        </th>
                        <th className={`${thClasses} w-[120px]`}>
                            <div className="flex flex-col">

                                Total price
                                <span className="text-unit">(VND)</span>
                            </div>
                        </th>
                        <th className={`${thClasses} w-[64px]`}>
                            Status
                        </th>
                        <th className={`${thClasses} w-[115px]`}>
                            Action
                        </th>
                    </tr>
                    {
                        table1.data.map((item, index) => {
                            index += 1
                            const No = `${index < 10 ? '0' : ''}${index}`
                            const statusClass = colorStatus[item.status as StatusEnum];
                            const { value1, value2 } = FormatTolerances(item.preferredTolerances);
                            return (
                                <tr key={item.id} className="odd:bg-white even:bg-highlight">
                                    <td className={`${tdClasses}  border-l-0`}>{No}</td>
                                    <td className={`${tdClasses} `}>
<div className="flex justify-center">
                                            <CartReport className="size-6" />
                                        </div>
                                    </td>
                                    <td className={`${tdClasses} text-start px-2 leading-[15.51px]`}>{item.specifications}</td>
                                    <td className={`${tdClasses}`} colSpan={2}>
                                        <div className="flex flex-row gap-x-[9px] justify-center">
                                            <Input isDisabled={isInputDisabled[item.id]} value={item.totalCoil} className="max-w-[74px] w-full flex flex-row justify-center" isContentCenter>
                                            </Input>
                                            <div className="flex flex-row justify-center items-center">
                                                <Arrow className="w-4 h-4 text-gray-10 hover:cursor-pointer hover:opacity-80"
                                                    onClick={() => changeInputDisabled(item.id)} />
                                            </div>
                                            <Input isDisabled={!isInputDisabled[item.id]} value={formatNumber(Number(item.totalWeight))} className="max-w-[74px] w-full flex flex-row justify-center" isContentCenter>
                                            </Input>
                                        </div>
                                    </td>
                                    <td className={`${tdClasses}`}>
                                        <div className="flex justify-center items-center">
                                            <Input variant="select" optionSelect={primes} isContentCenter={false} className="min-w-[97px]" ></Input>
                                        </div>
                                    </td>
                                    <td className={`${tdClasses}`}>
                                        <GroupInput value1={value1} value2={value2} >
                                        </GroupInput>
                                    </td>
                                    <td className={`${tdClasses}`}>
                                        <Tooltip position={Position.} message={"hello world"} >
                                            {formatNumber(item.unitPrice)}
                                        </Tooltip>
                                    </td>
                                    <td className={`${tdClasses}`}>  {formatNumber(item.totalPrice)}</td>
                                    <td className={`${tdClasses} `}>
                                        <div className="flex justify-center">
                                            <Inventory className={`size-5 ${statusClass}`} />
                                        </div>
                                    </td>
                                    <td className={`${tdClasses}`}>
<div className="flex flex-row justify-center gap-2">
                                            {
                                                item.action.includes("delete") && <Trash className="size-6" />
                                            }
                                            {
                                                item.action.includes("edit") && <Wrench className="size-6" />
                                            }
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </DataTable>
const thClasses = twMerge(
        tableClasses, "border-l border-t text-[12px] font-semibold text-primary h-[56px]"
    )
    const tdClasses = twMerge(
        tableClasses, "border-l text-text text-[13px] font-normal leading-[15.51px]   h-[56px]"
    )
        </>
    );
};

export default TestTable;
