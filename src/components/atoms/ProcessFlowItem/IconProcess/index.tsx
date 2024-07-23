import DonIcon from "@/assets/svgs/done_process.svg";
import {stateProcess} from "@/interfaces";
import {ReactNode} from "react";
interface IconProcessProp {
    id: number;
    icon: any;
    state: stateProcess;
    onChangeState: (id: number) => void;
}
function IconProcess({
    id = 1,
    icon: IconComponent,
    state = stateProcess.ACTIVE,
    onChangeState = () => {}
}: IconProcessProp) {
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
                ${stateProcess.ACTIVE === state ? "text-white" : "text-unit"}`}
                        />
                    </div>
                </div>
            :   <DonIcon
                    onClick={(id: number) => onChangeState && onChangeState(id)}
                    className="
    cursor-pointer
    min-w-[48px]
    min-h-[48px]
   "
                />
            }
        </div>
    );
}

export default IconProcess;
