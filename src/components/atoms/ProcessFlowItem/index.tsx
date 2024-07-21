import {ProcessFlowProps, stateProcess} from "@/interfaces";
import DonIcon from "@/assets/svgs/done_process.svg";
import HomeIcon from "@/assets/svgs/Home.svg";
function ProcessFlowItem({
    id = 1,
    label = "",
    icon: IconComponent = HomeIcon,
    line = false,
    state = stateProcess.ACTIVE,
    onChangeState = () => {}
}: ProcessFlowProps) {
    const styleProcessItem = {
        [stateProcess.NONE]: {w: "w-0", bg: "bg-transparent"},
        [stateProcess.ACTIVE]: {w: "w-1/2", bg: "bg-secondary"},
        [stateProcess.DONE]: {w: "w-full", bg: "bg-violet"},
        [stateProcess.PENDING]: {w: "w-0", bg: "bg-transparent border border-unit"}
    };
    return (
        <div className="flex flex-col items-center min-w-[113px] max-w-[133px]">
            <div
                className={`flex justify-start items-center ${stateProcess.NONE === state ? "disabled cursor-not-allowed" : ""}`}>
                <div className="flex flex-col items-center">
                    <div className="relative ">
                        {state !== stateProcess.DONE ?
                            <div
                                onClick={() => {
                                    if (state === stateProcess.PENDING) {
                                        return onChangeState(id);
                                    }
                                }}
                                className={`rounded-full ${state !== stateProcess.NONE ? "cursor-pointer" : ""} w-[48px] h-[48px] flex items-center justify-center border-[0.5px] ${
                                    stateProcess.ACTIVE === state ?
                                        "border-secondary"
                                    :   "border-unit"
                                }`}>
                                <div
                                    className={`w-[39px] h-[39px] rounded-full  ${styleProcessItem[state].bg} 
                          flex items-center justify-center
                          `}>
                                    <IconComponent
                                        className={`
                                min-w-[29px]
                                min-h-[29px]
                                ${
                                    stateProcess.ACTIVE === state ?
                                        "text-white"
                                    :   "text-unit"
                                }`}
                                    />
                                </div>
                            </div>
                        :   <DonIcon
                                onClick={(id: number) =>
                                    onChangeState && onChangeState(id)
                                }
                                className="
                    cursor-pointer
                    min-w-[48px]
                    min-h-[48px]
                   "
                            />
                        }
                        {line && (
                            <div className="h-[2px] w-[60px] bg-unit rounded-sm overflow-hidden absolute left-[56px] top-[50%] translate-y-[-50%]  ">
                                <div
                                    className={`${styleProcessItem[state].w} ${state === stateProcess.ACTIVE ? "bg-secondary" : "bg-primary-5-hover"} rounded-sm  h-full`}></div>
                            </div>
                        )}
                    </div>
                    <p>{label}</p>
                </div>
            </div>
        </div>
    );
}

export default ProcessFlowItem;
