import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode
} from "react";

import {ProcessFlowProps, stateProcess} from "@/interfaces";
import useSaveLocalStorage from "@/hooks/useSaveLocalStorage";

interface ProcessFlowContextProps {
    flows: ProcessFlowProps[];
    currentProcessIndex: number;
    onSubmit: () => void;
    onNext: () => void;
    onBack: () => void;
    onActive: (id: number) => void;
}

const ProcessFlowContext = createContext<ProcessFlowContextProps | undefined>(
    undefined
);

interface ProcessFlowProviderProps {
    children: ReactNode;
    flowData: ProcessFlowProps[];
}

export const ProcessFlowProvider: React.FC<ProcessFlowProviderProps> = ({
    children,
    flowData
}) => {
    const [flows, setFlow] = useState<ProcessFlowProps[]>(flowData);
    const [stepDone, setStateDone] = useSaveLocalStorage(
        "stepDone",
        flowData[0].id
    );
    const [currentProcessIndex, setCurrentProcessIndex] = useState<number>(
        () => stepDone
    );

      useEffect(() => {
        initFlow(stepDone);
      }, [stepDone]);    
      const initFlow = (stepDone: number) => {
        setFlow(prevFlows => 
          prevFlows.map(flow => {
            if (flow.id < stepDone) {
              flow.state = stateProcess.DONE;
            }
            if (flow.id === stepDone) {
              flow.state = stateProcess.ACTIVE;
            }
            return flow;
          })
        );
      };
    const onNext = () => {
        if (currentProcessIndex < flows.length) {
            let flowClone = [...flows];
            const currentFlow = flowClone.findIndex(
                (flow) => flow.id === currentProcessIndex
            );
            if (currentFlow !== -1) {
                flowClone.splice(currentFlow, 1, {
                    ...flowClone[currentFlow],
                    state: stateProcess.DONE
                });
                if (currentFlow + 1 < flowClone.length) {
                    flowClone.splice(currentFlow + 1, 1, {
                        ...flowClone[currentFlow + 1],
                        state: stateProcess.ACTIVE
                    });
                    setCurrentProcessIndex(currentProcessIndex + 1);
                }
            }
            setFlow([...flowClone]);
            setStateDone(currentProcessIndex + 1);
        }
    };

    const onBack = () => {
        if (currentProcessIndex > 1) {
            setCurrentProcessIndex(currentProcessIndex - 1);
            onActive(currentProcessIndex - 1);
        }
    };

    const onSubmit = () => {
        setStateDone(1);
    };

    const onActive = async (id: number) => {
        setCurrentProcessIndex(id);
        const cloneFlow = [...flows];
        const updateFlow = cloneFlow.map((flow) => {
            if (flow.id === id) {
                flow.state = stateProcess.ACTIVE;
            }
            if (flow.id === currentProcessIndex) {
                flow.state = stateProcess.PENDING;
            }
            if (flow.id < stepDone && flow.id !== id) {
                flow.state = stateProcess.DONE;
            }
            return flow;
        });
        setFlow([...updateFlow]);
    };

    return (
        <ProcessFlowContext.Provider
            value={{
                flows,
                currentProcessIndex,
                onSubmit,
                onNext,
                onBack,
                onActive
            }}>
            {children}
        </ProcessFlowContext.Provider>
    );
};

export const useProcessFlow = (): ProcessFlowContextProps => {
    const context = useContext(ProcessFlowContext);
    if (context === undefined) {
        throw new Error(
            "useProcessFlow must be used within a ProcessFlowProvider"
        );
    }
    return context;
};
