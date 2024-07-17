"use client";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

import Navigation from "@/components/molecules/Navigation";
import TableFuture from "@/components/molecules/TableFuture";
import {NavigationType} from "@/interfaces";
import LayoutContainer from "./LayoutContainer";
import {useEffect, useState} from "react";
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    if (isLoading) {
        return null;
    }
    return <LayoutContainer>this is home page !!!!</LayoutContainer>;
}
