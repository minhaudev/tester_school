import React from "react";

import Input from "@/components/atoms/Input/Input";
export default function GroupInput() {
    return (
        <div className="border ">
            <Input
                className="border-none outline-none"
                placeholder="nhập số kg"
            />
            <Input
                className="border-none outline-none"
                placeholder="nhập số m"
            />
        </div>
    );
}
