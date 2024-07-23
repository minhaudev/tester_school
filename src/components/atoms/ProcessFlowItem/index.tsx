import {ProcessFlowProps, stateProcess} from "@/interfaces";
import IconProcess from "./IconProcess";
function ProcessFlowItem({
    id = 1,
    label = "",
    icon: IconComponent,
    line = false,
    state = stateProcess.ACTIVE,
    onChangeState = () => {}
}: ProcessFlowProps) {
    return (
        <div className="flex flex-col items-center min-w-[113px] max-w-[133px]">
            <div
                className={`flex justify-start items-center ${stateProcess.NONE === state ? "disabled cursor-not-allowed" : ""}`}>
                <div>
                    <IconProcess
                        label={label}
                        icon={IconComponent}
                        id={id}
                        line={line}
                        state={state}
                        onChangeState={(id) => onChangeState(id)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProcessFlowItem;
