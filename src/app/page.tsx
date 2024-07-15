"use client";

import Navigation from "@/components/molecules/Navigation";
<<<<<<< HEAD
import TableFuture from "@/components/molecules/TableFuture";
export default function Home() {
    return (
        <>
            <Header />
            <Navigation />
            <TableFuture />
=======
import {NavigationType} from "@/interfaces";
export default function Home() {
    return (
        <>
            <Navigation type={NavigationType.MANAGE} />
>>>>>>> a25154b (create navigation)
        </>
    );
}
