import CartReport from "@/assets/svgs/cart_report.svg";
import Arrow from "@/assets/svgs/arrow_left_right.svg";
import Trash from "@/assets/svgs/trash_bin.svg";

import Wrench from "@/assets/svgs/wrench.svg";
import Inventory from "@/assets/svgs/inventory.svg";
import {ProductData} from "@/faker/ProductData";
import "./styles.css";
import Input from "@/components/atoms/Input";
import {useState} from "react";
import {formatPrice} from "@/utils";
import Tooltip from "@/components/atoms/Tooltip";
import GroupInput from "../GroupInput/GroupInput";
const TablePrice = () => {
    const [isInputDisabled, setInputDisabled] = useState<
        Record<string, boolean>
    >({});
    const changeInputDisabled = (rowId: string) => {
        setInputDisabled((prevState) => ({
            ...prevState,
            [rowId]: !prevState[rowId]
        }));
    };
    return (
        <div className="tableContainer">
            <div className="  w-full border border-stroke   h-auto overflow-x-auto ">
                <table className="">
                    <tr>
                        <td className="sticky left-0 flex ">
                            <div className="flex col-title">
                                <div className="w-[56px] border-r border-stroke bg-white">
                                    No
                                </div>
                                <div className="w-[55px]">Type</div>
                                <div className=" flex-1 min-w-[199px] 2xl:min-w-[450px] 2xl:max-w-[450]">
                                    Specifications
                                </div>
                                <div className="flex-col w-[81px]">
                                    <p>Total coil</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                                <div className="flex-col w-[94px]">
                                    <p>Total coil</p>
                                    <p className="col-subTitle">(KG)</p>
                                </div>
                                <div className="w-[98px]">Prime</div>
                                <div className="w-[145px]">
                                    Preferred tolerances
                                </div>
                                <div className="flex-col w-[80px]">
                                    <p>Unit price</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                                <div className="flex-col w-[104px]">
                                    <p>Discounted price</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                                <div className="flex-col w-[78px]">
                                    <p>Rebate offer</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className=" flex col-title">
                                <div className="flex flex-col">
                                    <div className="w-[264px] h-[28px] border-b border-r border-stroke flex-center">
                                        Special discount price
                                    </div>
                                    <div className="flex flex-center h-[28px]">
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (VND/KG)
                                        </p>
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (%)
                                        </p>
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (VND/KG)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col !border-r-0">
                                    <div className="w-[264px] h-[28px] border-b border-r border-stroke flex-center">
                                        Special rebate offer
                                    </div>
                                    <div className="flex flex-center h-[28px]">
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (VND/KG)
                                        </p>
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (%)
                                        </p>
                                        <p className="col-subTitle w-[88px] flex-center border-r h-full border-stroke">
                                            (VND/KG)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-col w-[133px] !border-l-0">
                                    <p>Fullfillment</p>
                                </div>
                                <div className="flex-col w-[156px]">
                                    <p> Final price</p>
                                    <p className="col-subTitle">(VND)</p>
                                </div>
                                <div className="flex-col w-[156px]">
                                    <p> Total price</p>
                                    <p className="col-subTitle">(PCS)</p>
                                </div>
                                <div className="w-[64px]">Status</div>
                                <div
                                    className={`min-w-[115px]  max-w-[115px] !border-r-0`}>
                                    Action
                                </div>
                            </div>
                        </td>
                    </tr>

                    {ProductData.map((item, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 ? "bg-white" : "bg-highlight"}`}>
                            <td
                                className={`sticky left-0 z-50  flex ${index % 2 ? "bg-white" : "bg-highlight"} `}>
                                <div className="flex col-body">
                                    <div className={` w-[56px] border-l-0`}>
                                        {item.No}
                                    </div>
                                    <div className={`w-[55px]`}>
                                        <CartReport className="size-6" />
                                    </div>
                                    <div
                                        className={`flex-1 min-w-[199px] 2xl:min-w-[450px] 2xl:max-w-[450] !justify-start`}>
                                        {item.Specifications}
                                    </div>
                                    <div className={`w-[175px] !px-0`}>
                                        <div className="flex flex-row gap-x-[9px] py-[10px] !px-2">
                                            <Input
                                                isContentCenter
                                                isDisabled={
                                                    isInputDisabled[item.id]
                                                }
                                                value={item.TotalCoil}
                                                className="max-w-[74px] w-full flex flex-row justify-center"></Input>
                                            <div className="flex flex-row justify-center items-center">
                                                <Arrow
                                                    className="w-4 h-4 text-gray-10 hover:cursor-pointer hover:opacity-80"
                                                    onClick={() =>
                                                        changeInputDisabled(
                                                            item.id
                                                        )
                                                    }
                                                />
                                            </div>
                                            <Input
                                                isContentCenter
                                                isDisabled={
                                                    !isInputDisabled[item.id]
                                                }
                                                value={formatPrice(
                                                    Number(item.TotalWeight)
                                                )}
                                                className="max-w-[74px] w-full flex flex-row justify-center"></Input>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-[98px] py-[10px] !px-2 `}>
                                        <select
                                            disabled={!item.Prime.isDisabled}
                                            className="text-center  w-full rounded-[7px] border border-[#D9D9D9] border-t-transparent bg-transparent p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-[#40A9FF]   ">
                                            {item.Prime.value.map(
                                                (primeItem, index) => (
                                                    <option
                                                        key={index}
                                                        value={index}>
                                                        {primeItem}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className={`w-[145px]`}>
                                        <GroupInput />
                                    </div>
                                    <div
                                        className={`w-[80px] relative group z-10 `}>
                                        {formatPrice(item.UnitPrice)}
                                        <div className=" group-hover:opacity-100 z-50 opacity-0 absolute bottom-0  left-[-20px] bg-black h-[20px] rounded-md text-white p-1 flex items-center justify-center whitespace-nowrap">
                                            old information price
                                        </div>
                                    </div>
                                    <div className={`w-[104px] `}>
                                        {formatPrice(item.discountPrice)}
                                    </div>
                                    <div className={`w-[78px]`}>
                                        {formatPrice(item.rebatePrice)}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={` flex col-body`}>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[88px] py-[10px] px-2  border-r border-stroke flex-center`}>
                                        <Input
                                            isContentCenter
                                            placeholder="Enter"
                                        />
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[133px] py-[10px] px-2  border-r border-stroke flex-center   `}></div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"}  w-[156px] py-[10px] px-2  border-r border-stroke flex-center !font-sf-ui-display !font-[400] !text-[13px] leading-[15.5px] !text-text  `}>
                                        {formatPrice(item.finalPrice)}
                                    </div>
                                    <div
                                        className={` ${index % 2 ? "bg-white" : "!bg-highlight"} w-[156px] py-[10px] px-2  border-r border-stroke flex-center !font-sf-ui-display !font-[400] !text-[13px] leading-[15.5px] !text-text   `}>
                                        {formatPrice(item.TotalPrice)}
                                    </div>
                                    <div
                                        className={`w-[64px]  ${index % 2 ? "bg-white" : "!bg-highlight"}`}>
                                        <Inventory
                                            className={`size-6 ${item.Status}`}
                                        />
                                    </div>
                                    <div
                                        className={`w-[115px] gap-2  ${index % 2 ? "bg-white" : "!bg-highlight"} !border-r-0`}>
                                        {item.Action.includes("delete") && (
                                            <Trash className="size-6" />
                                        )}
                                        {item.Action.includes("edit") && (
                                            <Wrench className="size-6" />
                                        )}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default TablePrice;
