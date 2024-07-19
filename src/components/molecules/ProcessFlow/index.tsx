import ProcessFlowItem from "@/components/atoms/ProcessFlowItem";
import {ProcessFlowProps} from "@/interfaces";
function ProcessFlow({flows}: {flows: ProcessFlowProps[]}) {
    return (
        <div className="flex justify-start items-center gap-2">
            {flows.map((flow) => (
                <ProcessFlowItem
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
