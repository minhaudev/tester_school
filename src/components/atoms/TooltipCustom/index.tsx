import { Position } from "@/enums/PositionEnum";
import { Tooltip } from "@nextui-org/tooltip";

interface TooltipProps {
    message: string;
    className?: string;
    children: React.ReactNode;
}
export default function TooltipCustom({
    message,
    children,
    className,
}: TooltipProps) {

    return (


        <Tooltip
            placement={"top"}
            content={
                <div className="text-[13px] font-medium absolute bg-black text-white px-2.5 py-1.5 text-xs rounded top-[-2.5rem] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center whitespace-nowrap">{message}</div>
            }
        >
            {children}
        </Tooltip>

    )
}