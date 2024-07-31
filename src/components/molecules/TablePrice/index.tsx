"use client";
import Arrow from "@/assets/svgs/arrow_left_right.svg";
import CartReport from "@/assets/svgs/cart_report.svg";
import Inventory from "@/assets/svgs/inventory.svg";
import SalePercent from "@/assets/svgs/sale_percent.svg";
import Trash from "@/assets/svgs/trash_bin.svg";
import WarningPrice from "@/assets/svgs/warning_price.svg";
import Wrench from "@/assets/svgs/wrench.svg";
import Input from "@/components/atoms/Input";
import {formatColumns, tableColumns} from "@/consts";
import {ProductData} from "@/faker/ProductData";
import {formatPrice, FormatTolerances} from "@/utils";
import {Tooltip} from "react-tooltip";

import {TypeStatus} from "@/enums/TypeStatusEnum";
import {
    Body,
    Cell,
    Header,
    HeaderCell,
    HeaderRow,
    Row,
    Table
} from "@table-library/react-table-library/table";
import {useTheme} from "@table-library/react-table-library/theme";
import {useState} from "react";
import "react-tooltip/dist/react-tooltip.css";
import GroupInput from "../GroupInput/GroupInput";
import {nodes} from "./data";
import "./styles.css";

const TablePrice = () => {
    const data = {nodes};
    const [isInputDisabled, setInputDisabled] = useState<
        Record<string, boolean>
    >({});

    const changeInputDisabled = (rowId: string) => {
        setInputDisabled((prevState) => ({
            ...prevState,
            [rowId]: !prevState[rowId]
        }));
    };
    const theme = useTheme({
        Table: tableColumns,
        BaseCell: formatColumns()
    });
    return (
        <>
            <Tooltip id="my" />
            <Table
                data={data}
                className="border border-stroke"
                theme={theme}
                layout={{custom: true}}>
                {() => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCell
                                    className="border-r border-stroke"
                                    resize
                                    pinLeft>
                                    No
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    Type
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    Specifications
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    <div className="flex-col min-w-[83px]">
                                        <p>Total coil</p>
                                        <p className="col-subTitle">(PCS)</p>
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    <div className="flex-col min-w-[93px]">
                                        <p>Total coil</p>
                                        <p className="col-subTitle">(KG)</p>
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    Prime
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    Preferred tolerances
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    <div className="flex-col w-[6%]">
                                        <p>Unit price</p>
                                        <p className="col-subTitle">
                                            (PCS)
                                        </p>{" "}
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    pinLeft
                                    resize
                                    className="border-r border-stroke">
                                    <div className="flex-col w-[8%]">
                                        <p>Discounted price</p>
                                        <p className="col-subTitle">(PCS)</p>
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    pinLeft
                                    className="border-r border-stroke">
                                    <div className="flex-col w-[78px]">
                                        <p>Rebate offer</p>
                                        <p className="col-subTitle">
                                            (PCS)
                                        </p>{" "}
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    stiff
                                    className="border-r border-stroke r-start-1 col-span-3 ">
                                    <div className="flex flex-col w-[264px]  ">
                                        <div className=" w-full h-[28px] border-b border-stroke !text-primary  flex-center">
                                            Special rebate offer
                                        </div>
                                        <div className="flex max-w-[264px] col-subTitle h-[28px]">
                                            <div className="col-subTitle w-[88px] col-subTitle  h-full  border-l border-stroke  ">
                                                (VND/KG)
                                            </div>
                                            <div className="col-subTitle w-[88px] col-subTitle  h-full  border-l border-stroke  ">
                                                (%)
                                            </div>
                                            <div className="col-subTitle w-[88px] col-subTitle  h-full border-l border-stroke    ">
                                                (VND/KG)
                                            </div>
                                        </div>
                                    </div>
                                </HeaderCell>
                                <HeaderCell
                                    resize
                                    stiff
                                    className="border-r border-stroke  col-span-3 ">
                                    <div className="flex flex-col w-[264px]  ">
                                        <div
                                            className=" w-full h-[28px] border-b border-stroke !text-primary  flex-center"
                                            data-tooltip-class-name="my"
                                            data-tooltip-content={"dfksj"}>
                                            Special rebate offer
                                        </div>
                                        <div className="flex max-w-[264px] col-subTitle h-[28px]">
                                            <div className="col-subTitle w-[88px] col-subTitle  h-full  border-l border-stroke  ">
                                                (VND/KG)
                                            </div>
                                            <div className="col-subTitle w-[88px] col-subTitle  h-full  border-l border-stroke  ">
                                                (%)
                                            </div>
                                            <div className="col-subTitle w-[88px] col-subTitle border-l border-stroke  h-full    ">
                                                (VND/KG)
                                            </div>
                                        </div>
                                    </div>
                                </HeaderCell>
                                <HeaderCell>Fullfillment</HeaderCell>
                                <HeaderCell>
                                    <div>
                                        <p> Final price</p>
                                        <p className="col-subTitle">(VND)</p>
                                    </div>
                                </HeaderCell>
                                <HeaderCell>
                                    <div className="flex-col">
                                        <p> Total price</p>
                                        <p className="col-subTitle">(PCS)</p>
                                    </div>
                                </HeaderCell>
                                <HeaderCell>Status</HeaderCell>
                                <HeaderCell>Action</HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {ProductData.map((item, index) => {
                                index += 1;
                                const no = `${index < 10 ? "0" : ""}${index}`;
                                // const statusClass =
                                //     colorStatus[item.status as StatusEnum];
                                const {value1, value2} = FormatTolerances(
                                    item.preferredTolerances
                                );
                                return (
                                    <Row
                                        key={no}
                                        item={item}
                                        className={`${index % 2 ? "!bg-highlight" : "!bg-white"}`}>
                                        <Cell pinLeft>{no}</Cell>
                                        <Cell pinLeft>
                                            {" "}
                                            {item.type === TypeStatus.SALE && (
                                                <SalePercent className="size-6" />
                                            )}
                                            {item.type ===
                                                TypeStatus.ORIGINAL && (
                                                <CartReport className="size-6" />
                                            )}
                                        </Cell>
                                        <Cell pinLeft>
                                            {item.specifications}
                                        </Cell>

                                        <Cell pinLeft className="col-span-2">
                                            <div className="flex flex-row gap-x-[9px] w-full justify-evenly ">
                                                <div className="w-[30%]">
                                                    <Input
                                                        isDisabled={
                                                            isInputDisabled[
                                                                item.id
                                                            ]
                                                        }
                                                        value={item.totalCoil}
                                                        className=" w-[30%]  border border-stroke flex flex-row justify-center rounded-[3px]"
                                                        isContentCenter></Input>
                                                </div>
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
                                                <div className="w-[40%]">
                                                    <Input
                                                        isDisabled={
                                                            !isInputDisabled[
                                                                item.id
                                                            ]
                                                        }
                                                        value={formatPrice(
                                                            Number(
                                                                item.totalWeight
                                                            )
                                                        )}
                                                        className="  w-full flex flex-row justify-center"
                                                        isContentCenter></Input>
                                                </div>
                                            </div>
                                        </Cell>

                                        <Cell pinLeft className="special-col-1">
                                            {" "}
                                            <Input
                                                variant="select"
                                                optionSelect={[
                                                    "B1",
                                                    "A1",
                                                    "A2"
                                                ]}
                                                isContentCenter={false}
                                                className="w-full"></Input>
                                        </Cell>
                                        <Cell pinLeft className="special-col-2">
                                            {" "}
                                            <GroupInput
                                                value1={item.totalPrice}
                                                value2={
                                                    item.totalPrice
                                                }></GroupInput>
                                        </Cell>
                                        <Cell
                                            pinLeft
                                            className=" special-col-3 ">
                                            <div
                                                className={`flex items-center gap-1 " ${item.discountPrice ? "text-secondary" : ""} `}>
                                                {item.discountPrice > 0 && (
                                                    <WarningPrice className="size-4" />
                                                )}
                                                {formatPrice(item.unitPrice)}
                                            </div>
                                        </Cell>
                                        <Cell pinLeft className="special-col-4">
                                            {" "}
                                            {formatPrice(item.discountPrice)}
                                        </Cell>
                                        <Cell pinLeft className="special-col-5">
                                            {formatPrice(item.rebatePrice)}
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            {
                                                <Input
                                                    isContentCenter
                                                    placeholder="Enter"
                                                />
                                            }
                                        </Cell>
                                        <Cell>
                                            <div
                                                className=""
                                                data-tooltip-id="fulfill"
                                                data-tooltip-content={
                                                    "fulfillment"
                                                }>
                                                hello
                                            </div>
                                        </Cell>
                                        <Cell>
                                            {formatPrice(item.totalPrice)}
                                        </Cell>
                                        <Cell>
                                            {formatPrice(item.totalPrice)}
                                        </Cell>
                                        <Cell>
                                            <div
                                                className=""
                                                data-tooltip-place="top"
                                                data-tooltip-id="my"
                                                data-tooltip-content={"kkkkkk"}>
                                                uuuuu
                                            </div>
                                            <Inventory className="size-6" />
                                        </Cell>
                                        <Cell className="col-action">
                                            {" "}
                                            {item.action.includes("delete") && (
                                                <Trash
                                                    className="size-6"
                                                    onClick={() => {
                                                        alert("delete");
                                                    }}
                                                />
                                            )}
                                            {item.action.includes("edit") && (
                                                <Wrench
                                                    className="size-6"
                                                    onClick={() => {
                                                        alert("edit");
                                                    }}
                                                />
                                            )}
                                        </Cell>
                                    </Row>
                                );
                            })}
                        </Body>
                    </>
                )}
            </Table>
            <Tooltip id="fulfill" />
        </>
    );
};

export default TablePrice;
