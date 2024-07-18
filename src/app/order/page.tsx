"use client";
import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header";
import Navigation from "@/components/molecules/Navigation";
import {NavigationType} from "@/interfaces";
import {usePathname} from "next/navigation";
// import Header from '@/components/layouts/Header'

export default function Order() {
    const pathCurrentPage = usePathname();
    return (
        <div className="flex ">
            <Navigation
                type={NavigationType.CLIENT}
                routePath={pathCurrentPage}
            />
            <div className="flex-1">
                <Header />
                <div className="text-primary mt-10 mb-10">
                    this is a Order main!
                </div>
                <Footer />
            </div>
        </div>
    );
}
