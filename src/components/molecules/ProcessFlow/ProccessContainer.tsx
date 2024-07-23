import {useProcessFlow} from "@/context/FlowContext";
import {ReactNode} from "react";
import Add from "@/assets/svgs/add.svg";
import ProcessHeader from "./ProcessHeader";
import Button from "@/components/atoms/Button";
interface ProcessFlowContainerProps {
    processBody: ReactNode[];
    subTitle?: string;
    leftHeader?: ReactNode;
}
function ProcessContainer({
    processBody,
    subTitle,
    leftHeader
}: ProcessFlowContainerProps) {
    const {flows, currentProcessIndex, onActive} = useProcessFlow();
    return (
        <div className="p-4">
            <ProcessHeader
                subTitle={subTitle}
                flowData={flows}
                handleProcessActive={onActive}>
                <div className="flex gap-4 ">{leftHeader && leftHeader}</div>
            </ProcessHeader>
            <div className="pt-4 w-full">
                {processBody && processBody[currentProcessIndex - 1]}
            </div>
        </div>
    );
}

export default ProcessContainer;
