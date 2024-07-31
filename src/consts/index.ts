import {stateProcess} from "@/interfaces";

export const initValidityTime = {
    day: 0,
    hours: 0,
    minutes: 0,
    secondTime: 0
};
const arr = [
    "56px",
    "56px",
    "15%",
    "6%",
    "7%",
    "8%",
    "11%",
    "6%",
    "8%",
    "6%",
    "88px",
    "88px",
    "88px",
    "88px",
    "88px",
    "88px",
    "8%",
    "8%",
    "8%",
    "100px",
    "100px"
];
export const tableColumns = `
          --data-table-library_grid-template-columns: ${arr.join(" ")};
        `;
const calculateFix = (numberOf: number) => {
    let calcString = "";
    for (var i = 0; i < numberOf - 1; i++) {
        calcString += ` ${arr[i]} +`;
    }
    return calcString.slice(0, -2);
};
export const formatColumns = () => {
    let columnFixed = `&:nth-of-type(1) {
  left: 0px;
}`;
    for (var i = 2; i < 11; i++) {
        columnFixed += `&:nth-of-type(${i}) {
        left: calc(${calculateFix(i)});
      }`;
    }
    return columnFixed;
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
