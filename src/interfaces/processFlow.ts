export enum stateProcess {
    NONE = "none",
    ACTIVE = "active",
    DONE = "done"
}

export interface ProcessFlowProps {
    id: number;
    label: string;
    icon: any;
    line?: boolean;
    state: stateProcess;
    onChangeState?:(id:number)=>void
}
