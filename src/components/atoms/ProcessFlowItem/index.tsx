import {ProcessFlowProps, stateProcess} from "@/interfaces";
import DonIcon from "@/assets/svgs/done_process.svg";
import HomeIcon from "@/assets/svgs/Home.svg";
function ProcessFlowItem({
    id = 1,
    label = "",
    icon: IconComponent = HomeIcon,
    line = false,
    state = stateProcess.ACTIVE,
    onChangeState,
}: ProcessFlowProps) {
    const styleProcessItem = {
        [stateProcess.NONE]: {w: "w-0", bg: "bg-transparent"},
        [stateProcess.ACTIVE]: {w: "w-1/2", bg: "bg-secondary"},
        [stateProcess.DONE]: {w: "w-full", bg: "bg-violet"}
    };
    return (
        <div>
            <div className="flex justify-start items-center gap-2">
                {state !== stateProcess.DONE ? (
                    <div
                        className={`rounded-full w-[48px] h-[48px] flex items-center justify-center border-[0.5px] ${
                            stateProcess.ACTIVE === state
                                ? "border-secondary"
                                : "border-unit"
                        }`}>
                        <div
                            className={`w-[39px] h-[39px] rounded-full ${styleProcessItem[state].bg} 
                          flex items-center justify-center
                          `}>
                            <IconComponent
                                className={`
                                min-w-[29px]
                                min-h-[29px]
                                ${
                                    stateProcess.ACTIVE === state
                                        ? "text-white"
                                        : "text-unit"
                                }`}
                            />
                        </div>
                    </div>
                ) : (
                    <DonIcon
                    onClick = {(id:number)=> onChangeState && onChangeState(id)}
                        className="
                    min-w-[48px]
                    min-h-[48px]
                   "
                    />
                )}
                {line && (
                    <div className="h-[2px] w-[60px] bg-unit rounded-sm overflow-hidden ">
                        <div
                            className={`${styleProcessItem[state].w} rounded-sm bg-primary h-full`}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProcessFlowItem;
