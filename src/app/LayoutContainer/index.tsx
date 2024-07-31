"use client";
import Header from "@/components/layouts/Header";
import Footer from "@/components/atoms/Footer";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
interface LayoutContainerProps {
    isNav?: boolean;
    isHeader?: boolean;
    isFooter?: boolean;
    footerChildren?: React.ReactNode;
    children: React.ReactNode;
}

export default function LayoutContainer({
    isNav = true,
    isHeader = true,
    isFooter = true,
    footerChildren,
    children
}: LayoutContainerProps) {
    const pathCurrentPage = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }, []);

    if (isLoading) return null;

    return (
        <>
            <div className="flex min-h-screen bg-[#F9F9FB]">
                {isNav && (
                    <Navigation
                        type={NavigationType.CLIENT}
                        routePath={pathCurrentPage}
                    />
                )}
                <div className="flex-1 flex flex-col max-h-screen">
                    {isHeader && <Header />}
                    <div className="flex-1 overflow-scroll mt-10">
                        {children}
                    </div>
                   
                </div>
            </div>
        </>
    );
}
