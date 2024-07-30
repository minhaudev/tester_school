import {stateProcess} from "@/interfaces";

export const initValidityTime = {
    day: 0,
    hours: 0,
    minutes: 0,
    secondTime: 0
};
export const tableColumns = `
          --data-table-library_grid-template-columns:  56px 56px 15% 6% 7% 8% 11% 6% 8% 6% 88px 88px 88px 88px 88px 88px 8% 8% 8% 100px 100px  ;
        `;
export const formatColumns = `
&:nth-of-type(1) {
  left: 0px;
}
&:nth-of-type(2) {
  left: 56px;
}
  &:nth-of-type(3) {
  left:112px;
}
  &:nth-of-type(4) {
  left: calc(112px + 15%);
}
  &:nth-of-type(5) {
  left: calc(112px + 15% + 6%);
}
  &:nth-of-type(6) {
  left: calc(112px + 15% +  6% + 7%);
}
  &:nth-of-type(7) {
  left: calc(112px + 15% + 6% + 7% + 8%);
}
  &:nth-of-type(8) {
  left: calc(112px + 15% + 6% + 7% + 8% + 11%);
}
  &:nth-of-type(9) {
  left: calc(112px + 15% + 6% + 7% + 8% + 11% + 6%);
}
  &:nth-of-type(10) {
  left: calc(112px + 15% + 6% + 7% + 8% + 11% + 6% + 8%);
}

`;

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
