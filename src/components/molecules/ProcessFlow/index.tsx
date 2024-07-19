import Button from "@/components/atoms/Button";
import ProcessFlowItem from "@/components/atoms/ProcessFlowItem";
import { processFlowData } from "@/faker";
import { useState } from "react";
import {ProcessFlowProps, stateProcess} from "@/interfaces";
function ProcessFlow() {
    type ActionType = "back" | "next";
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
    return (
        <>
        <div className="flex justify-start items-center gap-2">
            {flows && flows.map((flow) => (
                <ProcessFlowItem
                onChangeState={()=>handleProcessActive(flow.id)}
                    key={flow.id}
                    id={flow.id}
                    icon={flow.icon}
                    label={flow.label}
                    state={flow.state}
                    line={flow.line}
                />
            ))}
        </div>
        <div className="flex gap-4 mt-[50px]"> 
        <Button
        variant="secondary"
        size="medium"
            className={`${currentProcessIndex >= flows.length ?"disabled text-gray-4 cursor-not-allowed":""}`}
                onClick={() =>
                    handleProcessFlow({
                        type: "next",
                        index: currentProcessIndex
                    })
                }>
                next
            </Button>
            <Button
              variant="secondary"
        size="medium"
             className={`${currentProcessIndex <=  1 ?"disabled text-gray-4 cursor-not-allowed":""}`}
                onClick={() =>
                    handleProcessFlow({
                        type: "back",
                        index: currentProcessIndex
                    })
                }>
               back
            </Button>
        </div>
        </>
        
    );
}

export default ProcessFlow;
