import React, {ReactNode} from "react";

interface DropsDown {
    children: ReactNode;
}
export default function DropsDown({children}: DropsDown) {
    return (
        <div className="rounded-[6px] bg-white z-30 transition transform absolute min-w-[120px] w-full h-auto shadow-[0px_4px_11px_0px_rgba(0,0,0,0.1)] p-2 mt-4  right-[-20px]">
            {children}
        </div>
    );
}
