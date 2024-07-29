
"use client"
import LayoutContainer from "@/app/LayoutContainer";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProductApprovalsData, ProductApprovalsData2, ProductData } from "@/faker/ProductData";
import Input from "@/components/atoms/Input";
import Arrow from "@/assets/svgs/Arrow_switch.svg"
import Trash from "@/assets/svgs/Trash_big.svg"
import CartReport from "@/assets/svgs/Cart_report.svg"
import Wrench from "@/assets/svgs/Wrench.svg"
import Inventory from "@/assets/svgs/Inventory.svg"
import { formatNumber } from "@/utils/FormatNumber";
import PaginationSelect from "@/components/molecules/Pagination/Select";
import Checkbox from "@/components/atoms/Checkbox";
import Sort from "@/assets/svgs/Sort_arrow.svg";
import Propertie from "@/components/atoms/Properties";
import ValidityTime1 from "@/assets/svgs/validity_time_1.svg";
import ValidityTime2 from "@/assets/svgs/validity_time_2.svg";
import ValidityTime3 from "@/assets/svgs/validity_time_3.svg";
import Circle from "@/assets/svgs/Circle.svg";
import TimeFill from "@/assets/svgs/TimeFill.svg";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import { isValidDate } from "@/hooks/useValidDate";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import Drawer from "@/components/molecules/Drawer";
import DrawerContent from "@/components/molecules/Drawer/components/DrawerContent";
import DrawerFooter from "@/components/molecules/Drawer/components/DrawerFooter";
import DataTable from "@/components/atoms/Datatable";
import useTableSelection from "@/hooks/useTableSelection";
import { useTableSorting } from "@/hooks/useTableSort";
import useTablePagination from "@/hooks/useTablePagination";
import GroupInput from "@/components/molecules/GroupInput/GroupInput";
import { FormatTolerances } from "@/utils/FormatTolerances";
const tables = {
    "table1": {
        "id": "926fa0f3-674e-4838-b4be-fb5d69e2b2c6",
        "data": ProductData,
        "totalRecords": ProductData.length,
        "initialPage": 1,
        "initialRecordsPerPage": 5
    },
    "table2": {
        "id": "46aeeea5-bc89-4b61-bfc5-63792ad0034d",
        "data": ProductApprovalsData,
        "totalRecords": ProductApprovalsData.length,
        "initialPage": 1,
        "initialRecordsPerPage": 5
    },
    "table3": {
        "id": "0ee92f36-9205-4e88-a986-7de10048420d",
        "data": ProductApprovalsData2,
        "totalRecords": ProductApprovalsData2.length,
        "initialPage": 1,
        "initialRecordsPerPage": 5
    }
};

const Product = () => {
    const {
        selectedItems,
        isAllSelected,
        handleSelectAll,
        handleCheckboxChange
    } = useTableSelection(tables);
    const { sortConfig, handleSort, getSortedData } = useTableSorting();
    const {
        paginationStates,
        totalPages,
        handlePageChange,
        handleRecordsPerPageChange,
        paginatedData
    } = useTablePagination(tables);


    let startDate = new Date()
    let endDate = new Date()
    const start = "2024-07-26T06:58:19.516Z"
    const end = "2024-07-30T11:33:58.936Z"
    if (isValidDate(start) && isValidDate(end)) {
        startDate = new Date(Date.parse(start));
        endDate = new Date(Date.parse(end));
    } else {
        console.log("false");
    }
    const [isInputDisabled, setInputDisabled] = useState<Record<string, boolean>>({});
    const tableClasses = twMerge(
        "min-h-[56px] flex justify-center items-center border-stroke border-b border-l"
    );
    const thClasses = twMerge(
        tableClasses, "border-t text-[12px] font-semibold text-primary"
    )
    const tdClasses = twMerge(
        tableClasses, "text-text text-[13px] font-normal leading-[15.51px] px-2"
    )
    const th2Classes = twMerge(
        "min-h-[48px] px-4 py-2 flex justify-center items-center gap-x-1  border-b border-stroke "
    );
    const td2Classes = twMerge(
        "min-h-[72px] px-4 py-2  text-[13px] font-normal border-stroke border-b  text-text flex justify-center items-center"
    );
    const changeInputDisabled = (rowId: string) => {
        setInputDisabled(prevState => ({
            ...prevState,
            [rowId]: !prevState[rowId]
        }))
    }
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    const handlePageChangeWrapper = (tableId: string, newPage: number) => {
        handlePageChange(tableId, newPage);
    };
    const handleRecordsPerPageChangeWrapper = (tableId: string, newRecordsPerPage: number) => {
        handleRecordsPerPageChange(tableId, newRecordsPerPage);
    };
   
    return (

        <LayoutContainer>

            <div className="flex flex-row m-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary text-base font-medium">Product</h1>
                    <p className="text-input text-[13px] font-normal">Sales Order Management - Create Sales Order</p>
                </div>
            </div>
            <div className="bg-highlight py-4">
                <DataTable className="w-full" tableId={""} >
                    <thead className="bg-white">
                        <tr className="">
                            <th className={`${thClasses} min-w-[55px] border-l-0 px`}>
                                No
                            </th>
                            <th className={`${thClasses} min-w-[55px]`}>
                                Type
                            </th>
                            <th className={`${thClasses} flex-1`}>
                                Specifications
                            </th>
                            <th className={`${thClasses} min-w-[93px] flex-col`}>
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className={`${thClasses} min-w-[119px] flex-col`}>
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className={`${thClasses} min-w-[113px]`}>
                                Prime
                            </th>
                            <th className={`${thClasses} min-w-[158px]`}>
                                Preferred tolerances
                            </th>
                            <th className={`${thClasses} min-w-[120px] flex-col`}>
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className={`${thClasses} min-w-[120px] flex-col`}>
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className={`${thClasses} min-w-[64px]`}>
                                Status
                            </th>
                            <th className={`${thClasses} min-w-[115px]`}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tables.table1.data.map((item, index) => {
                                index += 1
                                const No = `${index < 10 ? '0' : ''}${index}`
                                return (
                                    <tr key={item.id} className="flex flex-row odd:bg-highlight even:bg-white  ">
                                        <td className={`${tdClasses} min-w-[55px] border-l-0`}>
                                            {No}
                                        </td>
                                        <td className={`${tdClasses} min-w-[55px]`}>
                                            <CartReport className="size-6" />
                                        </td>
                                        <td className={`${tdClasses} flex-1 !justify-start`}>
                                            {item.Specifications}
                                        </td>
                                        <td className={`${tdClasses} min-w-[212px] !px-0`} colSpan={2}>
                                            <div className="flex flex-row gap-x-[9px]">
                                                <Input isDisabled={isInputDisabled[item.id]} value={item.TotalCoil} className="max-w-[74px] w-full flex flex-row justify-center" isContentCenter>
                                                </Input>
                                                <div className="flex flex-row justify-center items-center">
                                                    <Arrow className="w-4 h-4 text-gray-10 hover:cursor-pointer hover:opacity-80"
                                                        onClick={() => changeInputDisabled(item.id)} />
                                                </div>
                                                <Input isDisabled={!isInputDisabled[item.id]} value={formatNumber(Number(item.TotalWeight))} className="max-w-[74px] w-full flex flex-row justify-center" isContentCenter>
                                                </Input>
                                            </div>
                                        </td>
                                        <td className={`${tdClasses} min-w-[113px]`}>
                                            <select
                                                disabled={!item.Prime.isDisabled}
                                                className="text-center min-w-[97px] rounded-[7px] border border-[#D9D9D9] border-t-transparent bg-transparent p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-[#40A9FF]"

                                            >
                                                {
                                                    item.Prime.value.map((primeItem, index) => (
                                                        <option key={index} value={index}>
                                                            {primeItem}
                                                        </option>
                                                    ))
                                                }
                                            </select>

                                        </td>
                                        <td className={`${tdClasses} min-w-[158px]`}>
                                            <textarea className=" max-h-[36px] h-full min-h-[36px]    border-[#D9D9D9] text-[#000000D9] gap-1 relative bg-white rounded-sm border  focus:!outline-none focus:!border-[#40A9FF] focus:!shadow-md text-center w-full max-w-[138px] text-[12px] " name="" id="" value={FormatTolerances(item.PreferredTolerances)}></textarea>

                                        </td>
                                        <td className={`${tdClasses} min-w-[120px] `}>
                                            {formatNumber(item.UnitPrice)}
                                        </td>
                                        <td className={`${tdClasses} min-w-[120px] `}>
                                            {formatNumber(item.TotalPrice)}
                                        </td>
                                        <td className={`${tdClasses} min-w-[64px]`}>
                                            <Inventory className={`size-5 ${item.Status}`} />
                                        </td>
                                        <td className={`${tdClasses} min-w-[115px] gap-2`}>
                                            {
                                                item.Action.includes("delete") && <Trash className="size-6" />
                                            }
                                            {
                                                item.Action.includes("edit") && <Wrench className="size-6" />
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </DataTable>
            </div>
            <div className="flex flex-row m-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary text-base font-medium">Product Approvals</h1>
                </div>
            </div>
            <div className="flex flex-row my-4 bg-highlight p-4 items-center justify-between">
                <div className="flex flex-col gap-1">
                </div>
                <div className="flex flex-col gap-1">
                    <PaginationSelect
                        tableId="table2"
                        currentPage={paginationStates["table2"].currentPage}
                        totalRecords={tables.table2.totalRecords}
                        recordsPerPage={paginationStates["table2"].recordsPerPage}
                        arrRecordsPerPage={[2, 5, 10]}
                        handlePageChange={(tableId, newPage) => handlePageChange(tableId, newPage)}
                        handleRecordsPerPageChange={(tableId, newRecordsPerPage) => handleRecordsPerPageChange(tableId, newRecordsPerPage)}
                    />

                </div>
            </div>
            <div className=" py-4">

                <DataTable className="w-full" tableId={tables.table2.id} >
                    <thead className="bg-white">
                        <tr className="flex flex-row text-primary min-h-[48px] text-[12px] font-semibold">
                            <th className={`w-[3%] ${th2Classes} flex-col`}>
                                <Checkbox
                                    description=""
                                    id="allIds"
                                    className="h-5 w-5"
                                    checked={isAllSelected("table2")}
                                    onChange={() => handleSelectAll("table2")}
                                />


                            </th>
                            <th className={`w-[7%] ${th2Classes}`}></th>
                            <th className={`w-[7%]  ${th2Classes} `}>
                                Ticket ID
                            </th>
                            <th className={`w-[15%]  ${th2Classes}`}>
                                Status
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "propertieStatus")}
                                />
                            </th>
                            <th className={`flex-1  ${th2Classes}`}>
                                Customer
                            </th>
                            <th className={`w-[15%] ${th2Classes}`}>
                                Properties
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "propertieTitle")}
                                />
                            </th>
                            <th className={`w-[11%] ${th2Classes}`}>
                                Progresses
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "pricePolicy")}
                                />
                            </th>
                            <th className={`w-[11%] ${th2Classes}`}>
                                Service time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "validateServiceTime")}

                                />
                            </th>
                            <th className={`w-[9%]  ${th2Classes}`}>
                                Validity time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "validateValidityTime")}
                                />
                            </th>
                            <th className={`w-[6%]  ${th2Classes} !px-2`}>
                                <p className={`text-justify`}> Created date</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "createdDate")}
                                />
                            </th>
                            <th className={`w-[6%] ${th2Classes} !px-2`}>
                                <p className={`text-justify`}>Total tonnage</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table2", "price")}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getSortedData("table2", paginatedData("table2", tables.table2.data)).map((row) => {
                            let startDate = new Date()
                            let endDate = new Date()
                            if (isValidDate(row.validateServiceTime.startDate) && isValidDate(row.validateServiceTime.endDate)) {
                                startDate = new Date(Date.parse(row.validateServiceTime.startDate));
                                endDate = new Date(Date.parse(row.validateServiceTime.endDate));
                            } else {
                                console.log("false");
                            }
                            const isSelected = selectedItems["table2"]?.includes(row.id);
                            return (
                                <tr
                                    key={row.id}
                                    className="flex flex-row font-normal w-full">
                                    <td
                                        className={`w-[3%] ${td2Classes} flex-col`}>
                                        <Checkbox
                                            description=""
                                            id={row.id}
                                            className="h-5 w-5"
                                            checked={selectedItems["table2"]?.includes(row.id) || false}
                                            onChange={() => handleCheckboxChange("table2", row.id)}
                                        />
                                    </td>
                                    <td className={`w-[7%] ${td2Classes} px-0`}>
                                        <div className="flex flex-row justify-around w-full">
                                            <ValidityTime1 className={`size-4`} />
                                            <ValidityTime2 className={`size-4`} />
                                            <ValidityTime3 className={`size-4`} />
                                        </div>
                                    </td>
                                    <td
                                        className={`w-[7%] ${td2Classes} flex-col justify-start`}>
                                        <div>
                                            <p>{row.itemId}</p>
                                            <div className="flex flex-row gap-x-2">

                                                <Circle
                                                    className={
                                                        "text-green"
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`w-[15%] ${td2Classes}`}>
                                        <Propertie
                                            status={row.propertieStatus.status}
                                            isIcon={row.propertieStatus.isIcon}
                                            title={row.propertieStatus.title}
                                        />
                                    </td>
                                    <td className={`flex-1 ${td2Classes}`}>
                                        {row.companyName}
                                    </td>
                                    <td className={`w-[15%] ${td2Classes} `}>
                                        <Propertie
                                            status={row.propertieTitle.status}
                                            isIcon={row.propertieTitle.isIcon}
                                            title={row.propertieTitle.title}
                                        />
                                    </td>
                                    <td
                                        className={`w-[11%] ${td2Classes} flex-col !items-start`}>
                                        <div className="flex flex-row items-center gap-x-1">
                                            <TimeFill
                                                className={
                                                    row.pricePolicy.iconClassName
                                                }
                                            />
                                            {row.pricePolicy.title}
                                        </div>
                                        <a className="hover:cursor-pointer" onClick={() => setIsOpen(true)}>
                                            See details
                                        </a>
                                    </td>
                                    <td className={`w-[11%] ${td2Classes}`}>
                                        <ValidateServiceTime
                                            endDate={endDate}
                                            startDate={startDate}
                                        />
                                    </td>
                                    <td className={`w-[9%] ${td2Classes}`}>
                                        <ValidateValidityTime
                                            endDate={endDate}
                                            startDate={startDate}
                                        />
                                    </td>
                                    <td className={`w-[6%] ${td2Classes}`}>
                                        {row.createdDate}
                                    </td>
                                    <td className={`w-[6%] ${td2Classes}`}>
                                        {row.totalTonnage.toLocaleString()}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </DataTable>
            </div>
            <div className="flex flex-row m-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-primary text-base font-medium">Product Approvals 2</h1>
                </div>
            </div>
            {/* <div className="flex flex-row my-4 bg-highlight p-4 items-center justify-between">
                <div className="flex flex-col gap-1">
                </div>
                <div className="flex flex-col gap-1">
                    <PaginationSelect
                        tableId="table3"
                        currentPage={paginationStates["table3"].currentPage}
                        totalRecords={tables.table3.totalRecords}
                        recordsPerPage={paginationStates["table3"].recordsPerPage}
                        arrRecordsPerPage={[2, 5, 10]}
                        handlePageChange={(tableId, newPage) => handlePageChange(tableId, newPage)}
                        handleRecordsPerPageChange={(tableId, newRecordsPerPage) => handleRecordsPerPageChange(tableId, newRecordsPerPage)}
                    />

                </div>
            </div> */}
            {/* <div className=" py-4">
                <DataTable className="w-full" tableId={tables.table3.id} >
                    <thead className="bg-white">
                        <tr className="flex flex-row text-primary min-h-[48px] text-[12px] font-semibold">
                            <th className={`w-[3%] ${th2Classes} flex-col`}>
                                <Checkbox
                                    description=""
                                    id="allIds"
                                    className="h-5 w-5"
                                    checked={isAllSelected("table3")}
                                    onChange={() => handleSelectAll("table3")}
                                />

                            </th>

                            <th className={`w-[15%]  ${th2Classes}`}>
                                Status
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "propertieStatus")}
                                />
                            </th>
                            <th className={`flex-1  ${th2Classes}`}>
                                Customer
                            </th>
                            <th className={`w-[15%] ${th2Classes}`}>
                                Properties
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "propertieTitle")}
                                />
                            </th>
                            <th className={`w-[11%] ${th2Classes}`}>
                                Progresses
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "pricePolicy")}
                                />
                            </th>
                            <th className={`w-[11%] ${th2Classes}`}>
                                Service time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "validateServiceTime")}

                                />
                            </th>
                            <th className={`w-[9%]  ${th2Classes}`}>
                                Validity time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "validateValidityTime")}
                                />
                            </th>
                            <th className={`w-[6%]  ${th2Classes} !px-2`}>
                                <p className={`text-justify`}> Created date</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "createdDate")}
                                />
                            </th>
                            <th className={`w-[6%] ${th2Classes} !px-2`}>
                                <p className={`text-justify`}>Total tonnage</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("table3", "price")}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getSortedData("table3", paginatedData("table3", tables.table3.data)).map((row) => (

                            <tr
                                key={row.id}
                                className="flex flex-row font-normal w-full">
                                <td
                                    className={`w-[3%] ${td2Classes} flex-col`}>
                                    <Checkbox
                                        description=""
                                        id={row.id}
                                        className="h-5 w-5"
                                        checked={selectedItems["table3"]?.includes(row.id) || false}
                                        onChange={() => handleCheckboxChange("table3", row.id)}
                                    />
                                </td>

                                <td className={`w-[15%] ${td2Classes}`}>
                                    <Propertie
                                        status={row.propertieStatus.status}
                                        isIcon={row.propertieStatus.isIcon}
                                        title={row.propertieStatus.title}
                                    />
                                </td>
                                <td className={`flex-1 ${td2Classes}`}>
                                    {row.companyName}
                                </td>
                                <td className={`w-[15%] ${td2Classes} `}>
                                    <Propertie
                                        status={row.propertieTitle.status}
                                        isIcon={row.propertieTitle.isIcon}
                                        title={row.propertieTitle.title}
                                    />
                                </td>
                                <td
                                    className={`w-[11%] ${td2Classes} flex-col !items-start`}>
                                    <div className="flex flex-row items-center gap-x-1">
                                        <TimeFill
                                            className={
                                                row.pricePolicy.iconClassName
                                            }
                                        />
                                        {row.pricePolicy.title}
                                    </div>
                                    <a onClick={() => setIsOpen(true)}>
                                        See details
                                    </a>
                                </td>
                                <td className={`w-[11%] ${td2Classes}`}>
                                    <ValidateServiceTime
                                        endDate={endDate}
                                        startDate={startDate}
                                    />
                                </td>
                                <td className={`w-[9%] ${td2Classes}`}>
                                    <ValidateValidityTime
                                        endDate={endDate}
                                        startDate={startDate}
                                    />
                                </td>
                                <td className={`w-[6%] ${td2Classes}`}>
                                    {row.createdDate}
                                </td>
                                <td className={`w-[6%] ${td2Classes}`}>
                                    {row.totalTonnage.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>
            </div> */}
            <Drawer
                name="Header Name"
                subName="Sub Name"
                isOpen={isOpen}
                onClose={handleClose}>
                <DrawerContent children={undefined}></DrawerContent>
                <DrawerFooter handleClick={() => { }} title={""}></DrawerFooter>
            </Drawer>

        </LayoutContainer >
    );
};

export default Product;