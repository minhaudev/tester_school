"use client";

import ProcessFlow from "@/components/molecules/ProcessFlow";
import { processFlowData } from "@/faker";
import LayoutContainer from "./LayoutContainer";
export default function Home() {
    const handleProcessActive = (id:number)=>{  
    }
    return <LayoutContainer>
        <ProcessFlow onProcessActive={handleProcessActive}  dataFlow={processFlowData}/>
    </LayoutContainer>;
}
