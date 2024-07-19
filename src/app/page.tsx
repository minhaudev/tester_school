"use client";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import CustomerBalanceInfo from "@/components/molecules/CustomerBalanceInfo";
import LayoutContainer from "./LayoutContainer";

export default function Home() {
    const endDate = new Date(Date.parse("2024-07-19T10:35:00"));
    const startDate = new Date(Date.parse("2024-07-19T10:09:00"));
    const handleEndIn = ()=>{
        alert('end in')
    }
    return (
        <LayoutContainer>
            <CustomerBalanceInfo />
          <div className=" flex flex-col items-start gap-8 p-[10px] m-[20px] bg-secondary">
          <ValidateServiceTime onEnd={handleEndIn} endDate = {endDate} startDate = {startDate}/>
          <ValidateValidityTime endDate = {endDate} startDate = {startDate}/>
          </div>
        </LayoutContainer>
    );
}
