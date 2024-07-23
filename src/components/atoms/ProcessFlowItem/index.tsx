import {ProcessFlowProps, stateProcess} from "@/interfaces";
import DonIcon from "@/assets/svgs/done_process.svg";
import IconProcess from "./IconProcess";
function ProcessFlowItem({
    id = 1,
    label = "",
    icon: IconComponent,
    line = false,
    state = stateProcess.ACTIVE,
    onChangeState = () => {}
}: ProcessFlowProps) {
    const styleProcessItem = {
        [stateProcess.NONE]: {w: "w-0", bg: "bg-transparent"},
        [stateProcess.ACTIVE]: {w: "w-1/2", bg: "bg-secondary"},
        [stateProcess.DONE]: {w: "w-full", bg: "bg-violet"},
        [stateProcess.PENDING]: {
            w: "w-0",
            bg: "bg-transparent border border-unit"
        }
    };
    return (
        <div className="flex flex-col items-center min-w-[113px] max-w-[133px]">
            <div
                className={`flex justify-start items-center ${stateProcess.NONE === state ? "disabled cursor-not-allowed" : ""}`}>
                <div className="flex flex-col items-center">
                    <IconProcess
                        icon={IconComponent}
                        id={id}
                        state={state}
                        onChangeState={(id) => onChangeState(id)}
                    />
                    <p>{label}</p>
                </div>
            </div>
        </div>
    );
}

export default ProcessFlowItem;
