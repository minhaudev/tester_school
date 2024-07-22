"use client";
import {twMerge} from "tailwind-merge";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {ChangeEvent, Key, useEffect, useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "@/app/LayoutContainer";
import {dataList} from "@/faker/AccountBalance";
import {TABLE_BODY} from "@/faker/TableData";
import Sort from "@/assets/svgs/Sort_arrow.svg";
import Checkbox from "@/components/atoms/Checkbox";
import Propertie from "@/components/atoms/Properties";
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
import TriagleExClamation from "@/assets/svgs/Triangle_exclamation.svg";
import Input from "@/components/atoms/Input";
import Drawer from "@/components/molecules/Drawer";
import DrawerContent from "@/components/molecules/Drawer/components/DrawerContent";
import DrawerFooter from "@/components/molecules/Drawer/components/DrawerFooter";

export default function Home() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const endDate = new Date(Date.parse("2024-07-19T17:01:00"));
    const startDate = new Date(Date.parse("2024-07-19T13:50:00"));
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
    useEffect(() => {
        if (selectedItems.length == 0) {
            setSelectAll(false);
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
    return (
        <LayoutContainer>
            <div className="overflow-x-auto mt-4 mx-4">
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-row justify-between gap-4">
                        <Input
                            placeholder="Search"
                            handleOnChange={handleOnChange}></Input>
                        {/* <Input
                            showCalendar
                            handleOnChange={handleOnChange}></Input> */}
                        {/* <Button variant={"dashed"} size={"small"}>
                            Filter
                        </Button> */}
                    </div>
                    <div className="flex flex-row justify-between gap-x-2 items-center text-text text-xs font-normal">
                        <p>Display</p>
                        <Input
                            className=""
                            optionSelect={["10", "50", "100"]}
                            variant="select"
                            size="medium"
                            handleOnChange={function (
                                e: ChangeEvent<
                                    | HTMLTextAreaElement
                                    | HTMLInputElement
                                    | HTMLSelectElement
                                >
                            ): void {
                                throw new Error("Function not implemented.");
                            }}></Input>
                        <p> of {TABLE_BODY.total} results</p>
                        <Button
                            isIcon
                            variant="dashed"
                            size="medium"
                            typeFile={""}>
                            <ExpandLeftLight className="w-5 h-5 text-gray-10" />
                        </Button>
                        <Button
                            isIcon
                            variant="dashed"
                            size="medium"
                            typeFile={""}>
                            <ExpandRightLight className="w-5 h-5 text-gray-10" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed ">
                    <thead>
                        <tr className="flex flex-row text-primary bg-white min-h-[48px] text-[12px] font-semibold">
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
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[14%]  ${theadClasses}`}>
                                Customer
                            </th>
                            <th className={`w-[15%] ${theadClasses}`}>
                                Properties
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[11%] ${theadClasses}`}>
                                Progresses
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[11%] ${theadClasses}`}>
                                Service time
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[9%]  ${theadClasses}`}>
                                Validity time
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[6%]  ${theadClasses} !px-2`}>
                                <p className={`text-justify`}> Created date</p>
                                <Sort className={`w-4 h-4`} />
                            </th>
                            <th className={`w-[6%] ${theadClasses} !px-2`}>
                                <p className={`text-justify`}>Total tonnage</p>
                                <Sort className={`w-4 h-4`} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_BODY.data.map((row, index) => (
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
                                        <ValidityTime1 className={`w-4 h-4`} />
                                        <ValidityTime2 className={`w-4 h-4`} />
                                        <ValidityTime3 className={`w-4 h-4`} />
                                    </div>
                                </td>
                                <td
                                    className={`w-[7%] ${thbodyClasses} flex-col justify-start`}>
                                    <div>
                                        <p>{row.itemId}</p>
                                        <div className="flex flex-row gap-x-2">
                                            {row.circles.map(
                                                (circle: { className: any; }, index: Key | null | undefined) => (
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
                                        {row.pricePolicy.text}
                                    </div>
                                    <a onClick={() => setIsOpen(true)}>
                                        {" "}
                                        See details
                                    </a>
                                    {/* <p className="text-text-1">See details</p> */}
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
            <Drawer isOpen={isOpen} onClose={handleClose}>
                <DrawerContent children={undefined}></DrawerContent>
                <DrawerFooter handleClick={() => {}} title={""}></DrawerFooter>
            </Drawer>
        </LayoutContainer>
    );
}
