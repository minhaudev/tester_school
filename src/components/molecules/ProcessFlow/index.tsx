import Button from "@/components/atoms/Button";
import ProcessFlowItem from "@/components/atoms/ProcessFlowItem";
import {processFlowData} from "@/faker";
import {ReactNode, useState} from "react";
import ProcessHeader from "./ProcessHeader";
import {ProcessFlowProps} from "@/interfaces";
import {ProcessFlowProvider, useProcessFlow} from "@/context/FlowContext";
import ProcessContainer from "./ProccessContainer";
interface ProcessFlowContainerProps {
    processLabel: ProcessFlowProps[];
    processBody: ReactNode[];
    leftHeader?: ReactNode;
    subTitle: string;
}
function ProcessFlow({
    processLabel,
    processBody,
    subTitle,
    leftHeader
}: ProcessFlowContainerProps) {
    return (
        <ProcessFlowProvider flowData={processLabel}>
            <ProcessContainer
                processBody={processBody}
                subTitle={subTitle}
                leftHeader={leftHeader}
            />
        </ProcessFlowProvider>
    );
}

export default ProcessFlow;
