import ProcessFlowItem from "@/components/atoms/ProcessFlowItem";
import {ProcessFlowProps} from "@/interfaces";
function ProcessFlow({flows,onProcessActive}: {flows: ProcessFlowProps[],onProcessActive:(id:number)=>void}) {
    
    return (
        <div className="flex justify-start items-center gap-2">
            {flows && flows.map((flow) => (
                <ProcessFlowItem
                onChangeState={()=>onProcessActive(flow.id)}
                    key={flow.id}
                    id={flow.id}
                    icon={flow.icon}
                    label={flow.label}
                    state={flow.state}
                    line={flow.line}
                />
            ))}
        </div>
    );
}

export default ProcessFlow;
