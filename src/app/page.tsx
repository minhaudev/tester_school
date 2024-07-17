"use client";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";

export default function Home() {
    return (
        <LayoutContainer>
            <CustomerBalanceInfo />
        </LayoutContainer>
    );
}
