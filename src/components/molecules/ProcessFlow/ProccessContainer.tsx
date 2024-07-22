import { useProcessFlow } from "@/context/FlowContext";
import { ReactNode } from "react";
import Add from '@/assets/svgs/add.svg'
import ProcessHeader from "./ProcessHeader";
import Button from "@/components/atoms/Button";
interface ProcessFlowContainerProps {
    processBody:ReactNode[],
    subTitle?:string,
}
function ProcessContainer( {processBody,subTitle}:ProcessFlowContainerProps) {
   const {flows,currentProcessIndex,onActive} = useProcessFlow()
    return (
        <>
       <ProcessHeader subTitle = {subTitle} flowData={flows} handleProcessActive={onActive}>
       <div className="flex gap-4 ">
                <Button
                    isIcon
                    className="!bg-secondary !text-text"
                    prefixIcon= ""
                    variant="secondary"
                    size="medium"
                    typeFile=""
                >
                    Save draft
                </Button>
                <Button
                 className="!bg-secondary !text-text"
                    isIcon
                    prefixIcon= {<Add/>}
                  variant="secondary"
                    size="medium"
                    typeFile=""
                    
                >
                    Add product
                </Button>
            </div>
          
       </ProcessHeader>
        <div className="pt-4 w-full">
        {processBody && processBody[currentProcessIndex - 1]}
        </div>
        </>
        
    );
}

export default ProcessContainer;
