"use client";
import {twMerge} from "tailwind-merge";
import {ChangeEvent, useEffect, useState} from "react";
import LayoutContainer from "@/app/LayoutContainer";
import {dataList} from "@/faker/AccountBalance";
import {TABLE_BODY} from "@/faker/TableData";
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
import Button from "@/components/atoms/Button";
import ExpandLeftLight from "@/assets/svgs/Expand_left_light.svg";
import ExpandRightLight from "@/assets/svgs/Expand_right_light.svg";
import Drawer from "@/components/molecules/Drawer";
import DrawerContent from "@/components/molecules/Drawer/components/DrawerContent";
import DrawerFooter from "@/components/molecules/Drawer/components/DrawerFooter";
import ExpandLeft from "@/assets/svgs/Expand_left.svg";
import ExpandRight from "@/assets/svgs/Expand_right.svg";
type SortOrder = "asc" | "desc";
type SortField = "pricePolicy" | "propertieStatus" | "propertieTitle" | string;

export default function Home() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const endDate = new Date(Date.parse("2024-07-22T17:01:00"));
    const startDate = new Date(Date.parse("2024-07-19T13:50:00"));
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(2);
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allIds = TABLE_BODY.data.map((item) => item.id);
            setSelectedItems(allIds);
        }
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (id: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };
    const handleSort = (field: string) => {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    const sortedData = [...TABLE_BODY.data].sort((a, b) => {
        if (!sortField) return 0;
        let aValue: any;
        let bValue: any;

        if (
            sortField === "pricePolicy" ||
            sortField === "propertieStatus" ||
            sortField === "propertieTitle"
        ) {
            aValue = a[sortField]?.title;
            bValue = b[sortField]?.title;
        } else {
            aValue = a[sortField as keyof typeof a];
            bValue = b[sortField as keyof typeof b];
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
            if (aValue < bValue) {
                return sortOrder === "asc" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortOrder === "asc" ? 1 : -1;
            }
        }
        return 0;
    });

    useEffect(() => {
        if (selectedItems.length == 0) {
            setSelectAll(false);
        }
        if (selectedItems.length == TABLE_BODY.total) {
            setSelectAll(true);
        }
    }, [selectedItems]);
    const handleEndIn = () => {
        alert("end in");
    };
    const theadClasses = twMerge(
        "min-h-[48px] px-4 py-2 flex justify-center items-center gap-x-1  border-b border-stroke "
    );
    const thbodyClasses = twMerge(
        "min-h-[72px] px-4 py-2  text-[13px] font-normal border-stroke border-b  text-text flex justify-center items-center"
    );
    const handleOnChange = () => {
        console.log("on change");
    };
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
        setValueSelect("");
    };
    const [valueSelect, setValueSelect] = useState("");
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(e.target.value);
    };

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const paginatedData = sortedData.slice(startIndex, endIndex);
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleRecordsPerPageChange = (
        e: ChangeEvent<
            HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
        >
    ) => {
        setRecordsPerPage(parseInt(e.target.value));

        setCurrentPage(1);
    };

    return (
        <LayoutContainer>
            <div className="overflow-x-auto mt-4 mx-4">
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row justify-between gap-4"></div>
                    <div className="flex flex-row justify-between gap-x-2 items-center text-text text-xs font-normal">
                        <p>Display</p>
                        <select
                            className="peer h-full rounded-[7px] border border-[#D9D9D9] border-t-transparent bg-transparent p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-[#40A9FF]   "
                            onChange={handleRecordsPerPageChange}>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>

                        <p> of {TABLE_BODY.total} result</p>
                        <Button
                            isIcon
                            variant="dashed"
                            size="medium"
                            onClick={() =>
                                handlePageChange(Math.max(currentPage - 1, 1))
                            }>
                            {currentPage === 1 ?
                                <ExpandLeftLight className="w-5 h-5 text-gray-10" />
                            :   <ExpandLeft />}
                            {/* <ExpandLeftLight className="w-5 h-5 text-gray-10" /> */}
                        </Button>
                        <span className="mx-2 hidden">{currentPage}</span>
                        <Button
                            isIcon
                            variant="dashed"
                            size="medium"
                            onClick={() =>
                                handlePageChange(
                                    Math.min(
                                        currentPage + 1,
                                        Math.ceil(
                                            TABLE_BODY.total / recordsPerPage
                                        )
                                    )
                                )
                            }>
                            {(
                                currentPage ===
                                Math.ceil(TABLE_BODY.total / recordsPerPage)
                            ) ?
                                <ExpandRightLight className="w-5 h-5 text-gray-10" />
                            :   <ExpandRight />}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed ">
                    <thead>
                        <tr className="flex flex-row text-primary min-h-[48px] text-[12px] font-semibold">
                            <th className={`w-[3%] ${theadClasses} flex-col`}>
                                <Checkbox
                                    description={""}
                                    id={"allIds"}
                                    className={`h-5 w-5`}
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className={`w-[7%] ${theadClasses}`}></th>
                            <th className={`w-[7%]  ${theadClasses} `}>
                                Ticket ID
                            </th>
                            <th className={`w-[15%]  ${theadClasses}`}>
                                Status
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() =>
                                        handleSort("propertieStatus")
                                    }
                                />
                            </th>
                            <th className={`w-[14%]  ${theadClasses}`}>
                                Customer
                            </th>
                            <th className={`w-[15%] ${theadClasses}`}>
                                Properties
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("propertieTitle")}
                                />
                            </th>
                            <th className={`w-[11%] ${theadClasses}`}>
                                Progresses
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("pricePolicy")}
                                />
                            </th>
                            <th className={`w-[11%] ${theadClasses}`}>
                                Service time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() =>
                                        handleSort("validateServiceTime")
                                    }
                                />
                            </th>
                            <th className={`w-[9%]  ${theadClasses}`}>
                                Validity time
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() =>
                                        handleSort("validateValidityTime")
                                    }
                                />
                            </th>
                            <th className={`w-[6%]  ${theadClasses} !px-2`}>
                                <p className={`text-justify`}> Created date</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("time")}
                                />
                            </th>
                            <th className={`w-[6%] ${theadClasses} !px-2`}>
                                <p className={`text-justify`}>Total tonnage</p>
                                <Sort
                                    className={`size-4 hover:cursor-pointer`}
                                    onClick={() => handleSort("price")}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, index) => (
                            <tr
                                key={row.id}
                                className="flex flex-row font-normal w-full">
                                <td
                                    className={`w-[3%] ${thbodyClasses} flex-col`}>
                                    <Checkbox
                                        description=""
                                        id={row.id}
                                        className="h-5 w-5"
                                        checked={selectedItems.includes(row.id)}
                                        onChange={() =>
                                            handleCheckboxChange(row.id)
                                        }
                                    />
                                </td>
                                <td className={`w-[7%] ${thbodyClasses} px-0`}>
                                    <div className="flex flex-row justify-around w-full">
                                        <ValidityTime1 className={`size-4`} />
                                        <ValidityTime2 className={`size-4`} />
                                        <ValidityTime3 className={`size-4`} />
                                    </div>
                                </td>
                                <td
                                    className={`w-[7%] ${thbodyClasses} flex-col justify-start`}>
                                    <div>
                                        <p>{row.itemId}</p>
                                        <div className="flex flex-row gap-x-2">
                                            {row.circles.map(
                                                (circle, index) => (
                                                    <Circle
                                                        key={index}
                                                        className={
                                                            circle.className
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className={`w-[15%] ${thbodyClasses}`}>
                                    <Propertie
                                        status={row.propertieStatus.status}
                                        isIcon={row.propertieStatus.isIcon}
                                        title={row.propertieStatus.title}
                                    />
                                </td>
                                <td className={`w-[14%] ${thbodyClasses}`}>
                                    {row.companyName}
                                </td>
                                <td className={`w-[15%] ${thbodyClasses} `}>
                                    <Propertie
                                        status={row.propertieTitle.status}
                                        isIcon={row.propertieTitle.isIcon}
                                        title={row.propertieTitle.title}
                                    />
                                </td>
                                <td
                                    className={`w-[11%] ${thbodyClasses} flex-col !items-start`}>
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
                                <td className={`w-[11%] ${thbodyClasses}`}>
                                    <ValidateServiceTime
                                        onEnd={handleEndIn}
                                        endDate={endDate}
                                        startDate={startDate}
                                    />
                                </td>
                                <td className={`w-[9%] ${thbodyClasses}`}>
                                    <ValidateValidityTime
                                        onEnd={handleEndIn}
                                        endDate={endDate}
                                        startDate={startDate}
                                    />
                                </td>
                                <td className={`w-[6%] ${thbodyClasses}`}>
                                    {row.time}
                                </td>
                                <td className={`w-[6%] ${thbodyClasses}`}>
                                    {row.price.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Drawer
                name="Header Name"
                subName="Sub Name"
                isOpen={isOpen}
                onClose={handleClose}>
                <DrawerContent children={undefined}></DrawerContent>
                <DrawerFooter handleClick={() => {}} title={""}></DrawerFooter>
            </Drawer>
        </LayoutContainer>
    );
}
