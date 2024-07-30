import React from "react";

import Input from "@/components/atoms/Input";
interface Props {
    value1: string;
    value2: string;
}
export default function GroupInput({ value1, value2 }: Props) {
    return (
        <div className="border border-input ">
            <Input
                className="!border-none !outline-none"
                placeholder="nhập số kg" isContentCenter={true} value={value1} />
            <Input
                className="!border-none !outline-none"
                placeholder="nhập số m" isContentCenter={true} value={value2} />
        </div>
    );
}