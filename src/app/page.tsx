"use client";
import Header from "@/components/layouts/Header/Header";

import Navigation from "@/components/molecules/Navigation";
import TableFuture from "@/components/molecules/TableFuture";
import {NavigationType} from "@/interfaces";
export default function Home() {
    const handleClick = () => {
        console.log("ok");
    };
    return (
        <div className="flex w-full">
            <Navigation type={NavigationType.CLIENT} />
            <Header />
            {/* <TableFuture /> */}
        </div>
    );
}
