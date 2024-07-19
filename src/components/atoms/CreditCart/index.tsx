import React from "react";
import {infoCartList} from "@/faker/CreditCart";
import IconCart from "@/assets/svgs/Cart_img.svg";
export default function index() {
    return (
        <div>
            <div className=" bg-custom-gradient-cart w-[100%] min-h-[292px] relative rounded">
                <IconCart className="w-full h-full pt-[21px] pr-[57px] absolute" />
                <div className="px-[25px] py-6 z-10 ">
                    <div className="font-medium text-[16px] leading-[19.09px] text-white">
                        General information
                    </div>
                    <div className="flex gap-x-[15px] gap-y-[32px] w-full mt-6 z-10 text-white h-auto">
                        <div className="flex-col w-[31%] ">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                Salesperson
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal break-words">
                                {infoCartList.name}
                            </p>
                        </div>
                        <div className="flex-col text-white w-[66%] break-words">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                Order type
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal ">
                                {infoCartList.orderType}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-[10px] gap-y-[32px] w-full mt-6 text-white h-auto">
                        <div className="flex-col w-[31%] ">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                Ticket number
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal break-words">
                                {infoCartList.ticketNumber}
                            </p>
                        </div>
                        <div className="flex-col text-white w-[66%] break-words">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                Customer
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal ">
                                {infoCartList.customer}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-[10px] gap-y-[32px] w-full mt-6 text-white h-auto">
                        <div className="flex-col w-[31%] ">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                {infoCartList.ticketNumber}
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal break-words">
                                {infoCartList.createdDate}
                            </p>
                        </div>
                        <div className="flex-col text-white w-[66%] break-words">
                            <p className="text-[12px] leading-[14.32px] mb-1">
                                Address
                            </p>
                            <p className="leading-[15.51px] text-[13px] font-normal ">
                                {infoCartList.address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
