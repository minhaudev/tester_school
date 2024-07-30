interface TooltipProps {
    message: string;
    children: React.ReactNode;
}
export default function Tooltip({ message, children }: TooltipProps) {
    return (
        <div className="group relative flex justify-center gap-2">
            {children}
            <span className="text-[13px] font-medium absolute bg-black text-white px-2.5 py-1.5 text-xs rounded top-[-2.5rem] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center whitespace-nowrap">
                {message}
            </span>
        </div>
    )
}