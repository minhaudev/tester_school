import React from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/atoms/AccountBalance";
export default function index() {
    return (
        <div>
            <div className="px-[16.5px] w-full gap-4 flex justify-between">
                <div className="w-[27%]">
                    <CreditCart />
                </div>
                <div className="w-[73%]">
                    <CustomerBalanceInfo />
                </div>
            </div>
        </div>
    );
}
