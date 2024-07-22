"use client";
<<<<<<< HEAD
import LayoutContainer from "./LayoutContainer";
export default function Home() {
    return <LayoutContainer></LayoutContainer>;
=======
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";

export default function Home() {
    return (
        <LayoutContainer>
            <CustomerBalanceInfo />
        </LayoutContainer>
    );
>>>>>>> da42c49 (fix:bug table)
}
