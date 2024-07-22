"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {usePathname} from "next/navigation";
import LayoutContainer from "../LayoutContainer";
// import Header from '@/components/layouts/Header'

export default function Order() {
    const pathCurrentPage = usePathname();
    return <LayoutContainer>Order</LayoutContainer>;
}
