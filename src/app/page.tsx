"use client";
import Button from "@/components/atoms/Button";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import Toast from "@/components/molecules/Toasts/Toast";
import {ToastPosition, ToastType} from "@/enums/ToastEnum";
import {NavigationType} from "@/interfaces";
import {useState} from "react";
import CreditCart from "@/components/atoms/CreditCart";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";
import Standard from "@/components/molecules/Standard/Index";
import Input from "@/components/atoms/Input";
import Calendar from "@/assets/svgs/calendar.svg";
export default function Home() {
    return <LayoutContainer></LayoutContainer>;
}
