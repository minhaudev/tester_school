import DonIcon from "@/assets/svgs/done_process.svg";
import {stateProcess} from "@/interfaces";
interface IconProcessProp {
    id: number;
    label?: string;
    icon: any;
    line: boolean;
    state: stateProcess;
    onChangeState: (id: number) => void;
}
function IconProcess({
    id = 1,
    icon: IconComponent,
    line = false,
    label = "",
    state = stateProcess.ACTIVE,
    onChangeState = () => {}
}: IconProcessProp) {
    const styleProcessItem = {
        [stateProcess.NONE]: {
            w: "w-0",
            bg: "bg-transparent",
            text: "text-unit"
        },
        [stateProcess.ACTIVE]: {
            w: "w-1/2",
            bg: "bg-secondary",
            text: "text-secondary"
        },
        [stateProcess.DONE]: {
            w: "w-full",
            bg: "bg-primary",
            text: "text-primary"
        },
        [stateProcess.PENDING]: {
            w: "w-0",
            bg: "bg-transparent border border-unit",
            text: "text-unit"
        }
    };
    return (
        <div className="flex flex-col items-center">
            <div className={`relative`}>
                {state !== stateProcess.DONE ?
                    <div
                        onClick={() => {
                            if (state === stateProcess.PENDING) {
                                return onChangeState(id);
                            }
                        }}
                        className={`rounded-full  ${stateProcess.NONE === state ? "disabled cursor-not-allowed" : "cursor-pointer"} w-[48px] h-[48px] flex items-center justify-center border-[0.5px] ${
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
                        onClick={(id: number) =>
                            onChangeState && onChangeState(id)
                        }
                        className="cursor-pointer min-w-[48px] min-h-[48px]   "
                    />
                }
                {line && (
                    <div className="h-[2px] w-[60px] bg-unit rounded-sm overflow-hidden absolute left-[56px] top-[50%] translate-y-[-50%]  ">
                        <div
                            className={`${styleProcessItem[state].w} ${state === stateProcess.ACTIVE ? "bg-secondary" : "bg-primary-5-hover"} rounded-sm  h-full`}></div>
                    </div>
                )}
            </div>
            {label && (
                <p
                    className={`text-[12px] pointer-events-none font-[500] font-sf-ui-display ${styleProcessItem[state].text} leading-[14.32px] mt-2`}>
                    {label}
                </p>
            )}
        </div>
    );
}

export default IconProcess;
