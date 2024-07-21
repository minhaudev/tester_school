import { useProcessFlow } from "@/context/FlowContext";
import { ReactNode } from "react";
import ProcessHeader from "./ProcessHeader";
interface ProcessFlowContainerProps {
    processBody:ReactNode[]
}
function ProcessContainer({processBody}:ProcessFlowContainerProps) {
   const {flows,currentProcessIndex,onActive} = useProcessFlow()
   console.log('check data flow at here :::: ',flows);
    return (
        <>
       <ProcessHeader flowData={flows} handleProcessActive={onActive}/>
        <div className="pt-4 w-full">
        {processBody && processBody[currentProcessIndex - 1]}
        </div>
        </>
        
    );
}

export default ProcessContainer;
