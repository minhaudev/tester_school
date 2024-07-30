import CartReport from "@/assets/svgs/cart_report.svg";
import Arrow from "@/assets/svgs/arrow_left_right.svg";
import Trash from "@/assets/svgs/trash_bin.svg";

import Wrench from "@/assets/svgs/wrench.svg";
import Inventory from "@/assets/svgs/inventory.svg";
import {ProductData} from "@/faker/ProductData";
import "./styles.css";
import Input from "@/components/atoms/Input";
import {useEffect, useRef, useState} from "react";
import {formatPrice} from "@/utils";
import Tooltip from "@/components/atoms/Tooltip";
import GroupInput from "../GroupInput/GroupInput";
import TestTable from "./TestTable";
const TablePrice = () => {
    const [isInputDisabled, setInputDisabled] = useState<
        Record<string, boolean>
    >({});
    const tdRefs = useRef<(HTMLTableCellElement | null)[]>([]);

    const changeInputDisabled = (rowId: string) => {
        setInputDisabled((prevState) => ({
            ...prevState,
            [rowId]: !prevState[rowId]
        }));
    };
    return (
        // <div className=" w-full max-w-[100vw]  overflow-x-auto ">
        //     <table className="w-full">
        //         <tr className="col-title">
        //             <th className={`bg-white sticky left-0 z-10 `}>
        //                 <div
        //                     className="grid max-h-[56px] col-title "
        //                     style={{
        //                         gridTemplateColumns:
        //                             "56px 56px auto 83px 93px 98px 145px 80px 104px 78px"
        //                     }}>
        //                     <div className="min-w-[56px]  max-w-[56px] !border-l-0 bg-white">
        //                         No
        //                     </div>
        //                     <div className="min-w-[56px] max-w-[56px]">
        //                         Type
        //                     </div>
        //                     <div className="min-w-[199px] ">Specifications</div>
        //                     <div className="flex-col min-w-[83px]">
        //                         <p>Total coil</p>
        //                         <p className="col-subTitle">(PCS)</p>
        //                     </div>
        //                     <div className="flex-col min-w-[93px]">
        //                         <p>Total coil</p>
        //                         <p className="col-subTitle">(KG)</p>
        //                     </div>
        //                     <div className="w-[98px]">Prime</div>
        //                     <div className="w-[145px]">
        //                         Preferred tolerances
        //                     </div>
        //                     <div className="flex-col w-[80px]">
        //                         <p>Unit price</p>
        //                         <p className="col-subTitle">(PCS)</p>
        //                     </div>
        //                     <div className="flex-col w-[104px]">
        //                         <p>Discounted price</p>
        //                         <p className="col-subTitle">(PCS)</p>
        //                     </div>
        //                     <div className="flex-col w-[78px]">
        //                         <p>Rebate offer</p>
        //                         <p className="col-subTitle">(PCS)</p>
        //                     </div>
        //                 </div>
        //             </th>
        //             <th colSpan={3} className="border-r border-stroke">
        //                 <div className="flex flex-col w-[264px]  ">
        //                     <div className=" w-full h-[28px] border-b border-stroke  flex-center text-center">
        //                         Special rebate offer
        //                     </div>
        //                     <div className="flex max-w-[264px] flex-center h-[28px]">
        //                         <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
        //                             (VND/KG)
        //                         </div>
        //                         <div className="col-subTitle w-[88px] flex-center  h-full  border-r border-stroke  ">
        //                             (%)
        //                         </div>
        //                         <div className="col-subTitle w-[88px] flex-center  h-full    ">
        //                             (VND/KG)
        //                         </div>
        //                     </div>
        //                 </div>
        //             </th>
        //             <th colSpan={3} className="border-r border-stroke">
        //                 <div className="flex flex-col w-[264px]  ">
        //                     <div className=" w-full h-[28px]  flex-center text-center border-b border-stroke">
        //                         Special rebate offer
        //                     </div>
        //                     <div className="flex max-w-[264px] flex-center h-[28px]">
        //                         <div className="col-subTitle w-[88px] flex-center  h-full border-r border-stroke">
        //                             (VND/KG)
        //                         </div>
        //                         <div className="col-subTitle w-[88px] flex-center  h-full border-r border-stroke">
        //                             (%)
        //                         </div>
        //                         <div className="col-subTitle w-[88px] flex-center  h-full ">
        //                             (VND/KG)
        //                         </div>
        //                     </div>
        //                 </div>
        //             </th>
        //             <th className="border-r border-stroke">
        //                 {" "}
        //                 <div className="min-w-[133px] w-full ">
        //                     <p>Fullfillment</p>
        //                 </div>
        //             </th>

        //             <th className="border-r border-stroke">
        //                 {" "}
        //                 <div>
        //                     <p> Final price</p>
        //                     <p className="col-subTitle">(VND)</p>
        //                 </div>
        //             </th>
        //             <th className="border-r border-stroke">
        //                 <div className="flex-col">
        //                     <p> Total price</p>
        //                     <p className="col-subTitle">(PCS)</p>
        //                 </div>
        //             </th>
        //             <th className="border-r border-stroke">
        //                 <div>Status</div>
        //             </th>
        //             <th className="border-r border-stroke">
        //                 <div>Action</div>
        //             </th>
        //         </tr>
        //         {ProductData.map((item, index) => (
        //             <tr key={index}>
        //                 <td
        //                     className={` sticky left-0 z-10 col p-0 ${index % 2 ? "bg-white" : "bg-highlight"} `}>
        //                     <div className="relative w-full h-full top-0 left-0">
        //                         <div
        //                             className=" h-full grid col-left pr-[2.5px] "
        //                             style={{
        //                                 gridTemplateColumns:
        //                                     "56px 56px auto 175px 98px 145px 80px 104px 76px"
        //                             }}>
        //                             <div className="min-w-[56px] max-w-[56px]">
        //                                 {item.No}
        //                             </div>
        //                             <div className="min-w-[56px] max-w-[56px]">
        //                                 <CartReport className="size-6" />
        //                             </div>
        //                             <div className="min-w-[199px] border-r border-stroke   ">
        //                                 {item.Specifications}
        //                             </div>
        //                             <div className="min-w-[175px] max-w-[175px] !border-0">
        //                                 <div className="flex flex-row gap-x-[9px] py-[10px] !px-2">
        //                                     <Input
        //                                         isContentCenter
        //                                         isDisabled={
        //                                             isInputDisabled[item.id]
        //                                         }
        //                                         value={item.TotalCoil}
        //                                         className="max-w-[74px] w-full flex flex-row justify-center"
        //                                     />
        //                                     <div className="flex flex-row justify-center items-center">
        //                                         <Arrow
        //                                             className="w-4 h-4 text-gray-10 hover:cursor-pointer hover:opacity-80"
        //                                             onClick={() =>
        //                                                 changeInputDisabled(
        //                                                     item.id
        //                                                 )
        //                                             }
        //                                         />
        //                                     </div>
        //                                     <Input
        //                                         isContentCenter
        //                                         isDisabled={
        //                                             !isInputDisabled[item.id]
        //                                         }
        //                                         value={formatPrice(
        //                                             Number(item.TotalWeight)
        //                                         )}
        //                                         className="max-w-[74px] w-full flex flex-row justify-center"
        //                                     />
        //                                 </div>
        //                             </div>
        //                             <div className="w-[98px] py-[10px] border-l border-stroke border-r translate-x-[1px]">
        //                                 <select
        //                                     disabled={!item.Prime.isDisabled}
        //                                     className="text-center w-full rounded-[7px] bg-transparent p-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:bg-gray-200 focus:outline-blue-500">
        //                                     {item.Prime.value.map(
        //                                         (primeItem, index) => (
        //                                             <option
        //                                                 key={index}
        //                                                 value={index}>
        //                                                 {primeItem}
        //                                             </option>
        //                                         )
        //                                     )}
        //                                 </select>
        //                             </div>
        //                             <div className="w-[145px] py-[10px] px-2 !border-r-0">
        //                                 {/* <GroupInput /> */}
        //                             </div>
        //                             <div className="w-[80px] break-all !border-r-0 border-l border-stroke ">
        //                                 {formatPrice(item.UnitPrice)}
        //                             </div>
        //                             <div className="w-[104px] border-l border-stroke !border-r-0">
        //                                 {formatPrice(item.discountPrice)}
        //                             </div>
        //                             <div className="w-[76px] !border-r-0 border-l border-stroke">
        //                                 {formatPrice(item.rebatePrice)}
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </td>
        //                 <td className="w-[88px] body-border ">
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className="w-[88px] body-border">
        //                     {" "}
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className="w-[88px] body-border">
        //                     {" "}
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className="w-[88px] body-border">
        //                     {" "}
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className="w-[88px] body-border">
        //                     {" "}
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className="w-[88px] body-border">
        //                     {" "}
        //                     <Input isContentCenter placeholder="Enter" />
        //                 </td>
        //                 <td className=" body-border">
        //                     Lorem ipsum dolor sit amet consectetur adipisicing
        //                     elit. Numquam aspernatur, consectetur placeat nulla
        //                     totam soluta quaerat sed laborum nobis officia
        //                     itaque doloribus ratione culpa facere! Nisi pariatur
        //                     ab rerum accusamus!
        //                 </td>
        //                 <td className="w-[133px] body-border">
        //                     {" "}
        //                     {formatPrice(item.finalPrice)}
        //                 </td>
        //                 <td className="w-[156px] body-border">
        //                     {" "}
        //                     {formatPrice(item.TotalPrice)}
        //                 </td>
        //                 <td className="min-w-[66px] body-border">
        //                     <div className="flex justify-center items-center border-0">
        //                         <Inventory
        //                             className={`size-5 ${item.Status}`}
        //                         />
        //                     </div>
        //                 </td>
        //                 <td className="w-[115px] body-border ">
        //                     <div className=" flex items-center justify-center gap-2 border-0 cursor-pointer">
        //                         {item.Action.includes("delete") && (
        //                             <Trash
        //                                 className="size-6"
        //                                 onClick={() => {
        //                                     alert("Delete");
        //                                 }}
        //                             />
        //                         )}
        //                         {item.Action.includes("edit") && (
        //                             <Wrench
        //                                 className="size-6"
        //                                 onClick={() => {
        //                                     alert("Edit");
        //                                 }}
        //                             />
        //                         )}
        //                     </div>
        //                 </td>
        //             </tr>
        //         ))}
        //     </table>
        // </div>
        <TestTable />
    );
};

export default TablePrice;
