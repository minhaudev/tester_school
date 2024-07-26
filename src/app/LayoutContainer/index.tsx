"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
export default function LayoutContainer({
    isNav = true,
    isHeader = true,
    isFooter = true,
    children
}: any) {
    const pathCurrentPage = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }, []);
    if (isLoading) return null;
    return (
        <div className="flex">
            {isNav && (
                <Navigation
                    type={NavigationType.CLIENT}
                    routePath={pathCurrentPage}
                />
            )}
            <div className="flex-1 max-h-[100vh] overflow-scroll">
                {isHeader && <Header />}
                <div className="text-primary mt-10 mb-10">{children}</div>
                {isFooter && <Footer />}
            </div>
        </div>
    );
}
