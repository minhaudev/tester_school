"use client";
import Header from "@/components/layouts/Header/Header";

import Navigation from "@/components/molecules/Navigation";
import TableFuture from "@/components/molecules/TableFuture";
export default function Home() {
    return (
        <>
            <Header />
            <Navigation />
            <TableFuture />
        </>
    );
}
