"use client";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
export default function Home() {
    return (
        <div className="flex w-full">
            <Navigation type={NavigationType.CLIENT} />
            <Header />
            {/* <TableFuture /> */}
        </div>
    );
}
