import React from "react";
import MenuOutline from "@/assets/svgs/Menu_outline.svg";
function Navigation() {
    return (
        <>
            <div className="max-w-[255px] w-full bg-primary py-[13px]">
                <div className="flex items-center justify-between px-4">
                    <p className="uppercase text-8 text-white">Luna</p>
                </div>
                <MenuOutline className="w-6 h-6 text-white" />
            </div>
            <div className=""></div>
        </>
    );
}

export default Navigation;
