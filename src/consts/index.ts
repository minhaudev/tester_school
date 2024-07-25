import {stateProcess} from "@/interfaces";

export const initValidityTime = {
    day: 0,
    hours: 0,
    minutes: 0,
    secondTime: 0
};

export const styleProcessItem = (state: stateProcess) =>
    ({
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
    })[state];
