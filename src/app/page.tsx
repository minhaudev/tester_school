"use client";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";
import Standard from "@/components/molecules/Standard/Index";

export default function Home() {
    return (
        <LayoutContainer>
            {/* <CustomerBalanceInfo /> */}
            <Standard />
        </LayoutContainer>
    );
}
