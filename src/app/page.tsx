"use client";

import Bell from "@/assets/images/Bell";
import Breadcrumb from "@/components/atoms/Breadcrumb/BreadCrumbs";
import Button from "@/components/atoms/Button/Button";
import TextInput from "@/components/atoms/Input/TextInput";
import Header from "@/components/layouts/Header/Header";

const breadcrumbs = [
    {prefixIcon: <h1>Icon</h1>, label: "Home", url: "/home"},
    {label: "About", url: "/about"},
    {label: "Services", url: "/services"},
    {label: "Projects", url: "/projects"},
    {label: "Contact", url: "/contact"}
];

export default function Home() {
    const handle = (e: any) => {
        console.log(e);
    };
    return (
        <>
            <Header />
            {/* <Button variant="file" onChange={handle} prefixIcon={<Bell />}>
                Button title
            </Button> */}
            {/* <TextInput /> */}
            <Breadcrumb breadcrumbs={breadcrumbs} />
        </>
    );
}
