"use client";
import Header from "@/components/layouts/Header/Header";

import Navigation from "@/components/molecules/Navigation";
import TableFuture from "@/components/molecules/TableFuture";
import {NavigationType} from "@/interfaces";
export default function Home() {
    return (
        <div className="flex w-full">
            <Navigation type={NavigationType.MANAGE} />
            <Header />
            {/* <TableFuture /> */}
        </div>
    );
}
