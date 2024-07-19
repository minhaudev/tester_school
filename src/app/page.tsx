"use client";
import Header from "@/components/layouts/Header";

import Navigation from "@/components/molecules/Navigation";
import {NavigationType, ProcessFlowProps, stateProcess} from "@/interfaces";
import LayoutContainer from "./LayoutContainer";
import {useEffect, useState} from "react";
import ProcessFlow from "@/components/molecules/ProcessFlow";
import { processFlowData } from "@/faker";
export default function Home() {
    type ActionType = "back" | "next";
    const [statusProcess, setStateProcess] = useState(stateProcess.NONE);
    const [flows, setFlow] = useState<ProcessFlowProps[]>(processFlowData);
    const [currentProcessIndex, setCurrentProcessIndex] = useState(
        processFlowData[0].id
    );
    const handleProcessFlow = ({
        type,
        index
    }: {
        type: ActionType;
        index: number;
    }) => {
        if (type === "next" && currentProcessIndex < flows.length) {
            let flowClone = [...flows];
            const currentFlow = flowClone.findIndex((flow) => {
                return flow.id === index;
            });
            if (currentFlow !== -1) {
                flowClone.splice(currentFlow, 1, {
                    ...flowClone[currentFlow],
                    state: stateProcess.DONE
                });
                if (currentFlow + 1 < flowClone.length) {
                    flowClone.splice(currentFlow + 1, 1, {
                        ...flowClone[currentFlow + 1],
                        state: stateProcess.ACTIVE
                    });
                    setCurrentProcessIndex(currentProcessIndex + 1);
                }
            }
            setFlow([...flowClone]);
        }
        if(type === 'back' && currentProcessIndex > 1){
            handleProcessActive(currentProcessIndex -1);
        }
    };
    const handleProcessActive = (id:number)=>{
        const cloneFlow = [...flows]
       const updateFlow = cloneFlow.map((flow)=>{
        if(flow.id === id){
            flow.state = stateProcess.ACTIVE
        }
        if(flow.id > id){
            flow.state = stateProcess.NONE
        }
        return flow
       })
       setFlow(()=>([...updateFlow]))
       setCurrentProcessIndex(id)
    }
    return <LayoutContainer>
        <ProcessFlow onProcessActive={handleProcessActive}  flows={flows}/>
    </LayoutContainer>;
}
