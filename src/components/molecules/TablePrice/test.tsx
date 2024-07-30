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
        <div className=" w-full max-w-[100vw]  overflow-x-auto ">
            <table className="w-full">
                <tr className="!border-l-0">
                    <th className="w-[56px]   bg-white">No</th>
                    <th className="w-[55px]">Type</th>
                    <th className=" flex-1 min-w-[199px]">Specifications</th>
                    <th className="flex-col w-[81px]">
                        <p>Total coil</p>
                        <p className="col-subTitle">(PCS)</p>
                    </th>
                    <div className="flex-col w-[94px]">
                        <p>Total coil</p>
                        <p className="col-subTitle">(KG)</p>
                    </div>
                    <div className="w-[98px]">Prime</div>
                    <div className="w-[145px]">Preferred tolerances</div>
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
                    {/* <th className={`bg-white sticky left-0 z-50`}>
                        <div className=" table-column-group">
                            <div className="w-[56px]   bg-white">No</div>
                            <div className="w-[55px]">Type</div>
                            <div className=" flex-1 min-w-[199px]">
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
                    </th> */}
                    <th>
                        <div className="flex ">
                            <div className="flex flex-col">
                                <div className="w-[264px] h-[28px]  flex-center">
                                    Special discount price
                                </div>
                                <div className="flex flex-center h-[28px]">
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
                                        (VND/KG)
                                    </p>
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
                                        (%)
                                    </p>
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
                                        (VND/KG)
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col !-0">
                                <div className="w-[264px] h-[28px]  flex-center">
                                    Special rebate offer
                                </div>
                                <div className="flex flex-center h-[28px]">
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
                                        (VND/KG)
                                    </p>
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
                                        (%)
                                    </p>
                                    <p className="col-subTitle w-[88px] flex-center  h-full ">
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
                            <div className={`min-w-[115px]  max-w-[115px] !-0`}>
                                Action
                            </div>
                        </div>
                    </th>
                </tr>
                {ProductData.map((item, index) => (
                    <tr key={index} className="!border-l-0 bg-red">
                        <td className={` sticky left-0 z-20 `}>
                            <div className="flex col-body h-max">
                                <div className={` w-[56px] `}>{item.No}</div>
                                <div className={`w-[55px]`}>
                                    <CartReport className="size-6" />
                                </div>
                                <div
                                    className={`flex-1 min-w-[199px] !justify-start`}>
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
                                                    changeInputDisabled(item.id)
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
                                <div className={`w-[98px] py-[10px] !px-2 `}>
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
                                    {/* <GroupInput /> */}
                                </div>
                                <div
                                    className={`w-[80px] relative group z-50 `}>
                                    {formatPrice(item.UnitPrice)}
                                </div>
                                <div className={`w-[104px] `}>
                                    {formatPrice(item.discountPrice)}
                                </div>
                                <div className={`w-[78px]`}>
                                    {formatPrice(item.rebatePrice)}
                                </div>
                            </div>
                        </td>

                        <td className={``}>
                            <div className="flex col-body min-h-[75px]">
                                <div className={`   w-[88px]  `}></div>
                                <div
                                    className={`   w-[88px] py-[10px] px-2    flex-center`}>
                                    <Input
                                        isContentCenter
                                        placeholder="Enter"
                                    />
                                </div>
                                <div
                                    className={`   w-[88px] py-[10px] px-2    flex-center`}>
                                    <Input
                                        isContentCenter
                                        placeholder="Enter"
                                    />
                                </div>
                                <div
                                    className={`   w-[88px] py-[10px] px-2    flex-center`}>
                                    <Input
                                        isContentCenter
                                        placeholder="Enter"
                                    />
                                </div>
                                <div
                                    className={`   w-[88px] py-[10px] px-2    flex-center`}>
                                    <Input
                                        isContentCenter
                                        placeholder="Enter"
                                    />
                                </div>
                                <div
                                    className={`   w-[88px] py-[10px] px-2    flex-center`}>
                                    <Input
                                        isContentCenter
                                        placeholder="Enter"
                                    />
                                </div>
                                <div
                                    className={`   w-[133px] py-[10px] px-2    flex-center   `}></div>
                                <div
                                    className={`   w-[156px] py-[10px] px-2    flex-center !font-sf-ui-display !font-[400] !text-[13px] leading-[15.5px] !text-text  `}>
                                    {formatPrice(item.finalPrice)}
                                </div>
                                <div
                                    className={`  w-[156px] py-[10px] px-2    flex-center !font-sf-ui-display !font-[400] !text-[13px] leading-[15.5px] !text-text   `}>
                                    {formatPrice(item.TotalPrice)}
                                </div>
                                <div className={`w-[64px]  `}>
                                    <Inventory
                                        className={`size-6 ${item.Status}`}
                                    />
                                </div>
                                <div className={`w-[115px] gap-2   !-0`}>
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
    );
};

export default TablePrice;
