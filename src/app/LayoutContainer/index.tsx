"use client";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {usePathname} from "next/navigation";
// import Header from '@/components/layouts/Header/Header'

export default function LayoutContainer({
    isNav = true,
    isHeader = true,
    isFooter = true,
    children
}: any) {
    const pathCurrentPage = usePathname();
    return (
        <div className="flex ">
            {isNav && (
                <Navigation
                    type={NavigationType.CLIENT}
                    routePath={pathCurrentPage}
                />
            )}
            <div className="flex-1">
                {isHeader && <Header />}
                <div className="text-primary mt-10 mb-10">{children}</div>
                {isFooter && <Footer />}
            </div>
        </div>
    );
}
