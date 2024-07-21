import Button from "@/components/atoms/Button";
import ProcessFlowItem from "@/components/atoms/ProcessFlowItem";
import { ProcessFlowProps } from "@/interfaces";
// FIX PROPS
function ProcessHeader({flowData,handleProcessActive}:{flowData:ProcessFlowProps[],handleProcessActive:any}) {
    return (
        <>
    <div className="flex justify-between">
        <div className=" text-[16px] font-sf-ui-display font-[500] leading-[20px] text-secondary">
            <p className="capitalize">{'product'}</p>
            <p className=" text-[13px] font-sf-ui-display font-[400] leading-[16px] text-text">{'Sales Order Management - Create Sales Order'}</p>
        </div>
    <div className="flex justify-start items-center gap-[13px]">
            {flowData && flowData.map((flow) => (
                <ProcessFlowItem
                onChangeState={()=>handleProcessActive(flow.id)}
                    key={flow.id}
                    id={flow.id}
                    icon={flow.icon}
                    label={flow.label}
                    state={flow.state}
                    line={flow.line}
                />
            ))}
        </div>
        <div className=" flex gap-4">
           <Button isIcon className="!bg-secondary !text-text"  prefixIcon ={''} variant="secondary" size="2xl" typeFile="" >
            Save draft
           </Button>
            <Button  isIcon prefixIcon ={''} variant="text" size="medium" typeFile="" >
                Add product
            </Button>
        </div>
    </div>
        </>
        
    );
}

export default ProcessHeader;
