"use client";

import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";
import ProcessFlow from "@/components/molecules/ProcessFlow";

export default function Home() {
    return (
        <LayoutContainer>
            <CustomerBalanceInfo />
            <ProcessFlow />
        </LayoutContainer>
    );
}
