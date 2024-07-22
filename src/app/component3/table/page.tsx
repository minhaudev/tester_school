import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "@/app/LayoutContainer";
import {dataList} from "@/faker/AccountBalance";
import {TABLE_HEAD, TABLE_HEAD2, TABLE_BODY2} from "@/faker/TableData";
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
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const endDate = new Date(Date.parse("2024-07-19T17:01:00"));
    const startDate = new Date(Date.parse("2024-07-19T13:50:00"));
    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allIds = TABLE_BODY2.data.map((item) => item.id);
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
    const handleEndIn = () => {
        alert("end in");
    };

    return (
        <LayoutContainer>
            <CustomerBalanceInfo />
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed">
                    <thead>
                        <tr className="flex flex-row">
                            <th className="w-[5%] px-4 py-2  flex flex-row justify-center items-center border-stroke border-y border-l">
                                No
                            </th>
                            <th className="w-[5%]  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l ">
                                Type
                            </th>
                            <th className="flex-1  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Specifications
                            </th>
                            <th className="w-[10%]  px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Total coil
                                <span className="text-unit">(PCS)</span>
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l ">
                                Total weight
                                <span className="text-unit">(KG)</span>
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Prime
                            </th>
                            <th className="w-[12%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Preferred tolerances
                            </th>
                            <th className="w-[10%]  px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Unit price
                                <span className="text-unit">(PCS)</span>
                            </th>

                            <th className="w-[10%]   px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l">
                                Total price
                                <span className="text-unit">(VND)</span>
                            </th>
                            <th className="w-[5%] px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Status
                            </th>
                            <th className="w-[10%]   px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row ">
                            <td className="w-[5%] px-4 py-2  text-[13px] font-normal border-stroke border-y border-l text-text flex justify-center">
                                01
                            </td>
                            <td className="w-[5%] px-4 py-2 border-stroke border-y border-l "></td>
                            <td className="px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l flex-1"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[12%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%] px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[5%]  px-4 py-2  border-stroke border-y border-l"></td>
                            <td className="w-[10%]  px-4 py-2  border-stroke border-y border-l"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-xs table-fixed">
                    <thead>
                        <tr className="flex flex-row text-text">
                            <th className="w-[3%] px-4 py-2  flex flex-row justify-center items-center border-stroke border-y border-l">
                                <Checkbox
                                    description={""}
                                    id={"allIds"}
                                    className="h-5 w-5"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className=" w-1/12 text-primary  px-4 py-2 flex flex-row text-[12px] justify-center items-center border-stroke border-y border-l "></th>
                            <th className="w-1/12 text-primary   px-4 py-2 flex flex-row text-[12px] justify-center items-center border-stroke border-y border-l ">
                                Ticket ID
                            </th>
                            <th className="w-[15%] text-primary   px-4 py-2 flex flex-row gap-x-1 text-[12px] justify-center items-center border-stroke border-y border-l">
                                Status
                                <Sort className="w-4 h-4" />
                            </th>
                            <th className="w-[10%]  text-primary   text-[12px] px-4 py-2 flex flex-col justify-center items-center border-stroke border-y border-l ">
                                Customer
                            </th>
                            <th className="w-[15%] px-4 py-2 text-primary   flex flex-row gap-x-1 text-[12px] justify-center items-center border-stroke border-y border-l ">
                                Properties
                                <Sort className="w-4 h-4" />
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Progresses
                                <Sort className="w-4 h-4" />
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Service time
                                <Sort className="w-4 h-4" />
                            </th>

                            <th className="w-[10%] text-primary    text-[12px] gap-x-1  px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Validity time
                                <Sort className="w-4 h-4" />
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Created date
                                <Sort className="w-4 h-4" />
                            </th>
                            <th className="w-[10%] text-primary    text-[12px] gap-x-1 px-4 py-2 flex flex-row justify-center items-center border-stroke border-y border-l">
                                Total tonnage
                                <Sort className="w-4 h-4" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="1"
                                    className="h-5 w-5"
                                    checked={selectedItems.includes("1")}
                                    onChange={() => handleCheckboxChange("1")}
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center items-center ">
                                <ValidityTime1 className="w-6 h-6" />
                                <ValidityTime2 className="w-6 h-6" />
                                <ValidityTime3 className="w-6 h-6" />
                            </td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                    <Circle className="w-2 h-3 text-violet" />
                                    <Circle className="w-2 h-3 text-blue" />
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie
                                    status
                                    isIcon={false}
                                    title="PENDING"
                                />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center items-center">
                                Thép Thiên Phước
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie title="NON STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    <TimeFill className={`mr-1 text-green`} />{" "}
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                                <ValidateServiceTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                                <ValidateValidityTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="2"
                                    className="h-5 w-5"
                                    checked={selectedItems.includes("2")}
                                    onChange={() => handleCheckboxChange("2")}
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center items-center "></td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                    <Circle className="w-2 h-3 text-violet" />
                                    <Circle className="w-2 h-3 text-blue" />
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie
                                    status
                                    isIcon
                                    title="NOT ENOUGH INVENTORY"
                                />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center items-center">
                                Tôn thép KOKORO
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie title="STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    <TimeFill className={`mr-1 text-yellow`} />{" "}
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center ">
                                <ValidateServiceTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                                <ValidateValidityTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                        <tr className="flex flex-row text-text font-normal w-full ">
                            <td className="w-[3%] px-4 py-2 flex flex-col justify-center items-center">
                                <Checkbox
                                    description={""}
                                    id="3"
                                    className="h-5 w-5"
                                    checked={selectedItems.includes("3")}
                                    onChange={() => handleCheckboxChange("3")}
                                />
                            </td>
                            <td className="flex flex-row w-1/12 px-4 py-2 justify-center  items-center"></td>
                            <td className=" px-4 py-2 text-text  flex flex-col font-normal  w-1/12 ">
                                019100101
                                <div className="flex flex-row gap-x-1">
                                    <Circle className="w-2 h-3 text-violet" />
                                    <Circle className="w-2 h-3 text-blue" />
                                </div>
                            </td>

                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie
                                    status
                                    isIcon
                                    title="INVALID SCHEDULE"
                                />
                            </td>
                            <td className=" px-4 py-2 font-normal w-[10%]  flex  justify-center  items-center">
                                Sắt thép Thiên Phúc
                            </td>
                            <td className=" px-4 py-2 w-[15%] ">
                                <Propertie title="PRE-ORDER STANDARDS" />
                            </td>
                            <td className=" px-4 py-2 w-[10%]  flex flex-col justify-start gap-x-1">
                                <div className="flex flex-row items-center gap-x-1">
                                    <TimeFill className={`mr-1 text-red`} />{" "}
                                    Price & Policy
                                </div>
                                <p className="text-text-1">See details</p>
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                                <ValidateServiceTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2 w-[10%] flex items-center">
                                <ValidateValidityTime
                                    onEnd={handleEndIn}
                                    endDate={endDate}
                                    startDate={startDate}
                                />
                            </td>
                            <td className=" px-4 py-2  font-normal w-[10%] flex justify-center items-center">
                                08:50
                            </td>
                            <td className=" px-4 py-2 text-text  font-normal w-[10%] flex justify-center items-center">
                                40,000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </LayoutContainer>
    );
}
