"use client";
import Header from "@/components/layouts/Header/Header";

import Button from "@/components/atoms/Button";
import Menu from "@/assets/svgs/Menu-1.svg";
import Navigation from "@/components/molecules/Navigation";
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
