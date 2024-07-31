"use client";
import React, {useState} from "react";
import GroupInput from "@/components/molecules/GroupInput/GroupInput";
import LayoutContainer from "./LayoutContainer";
import {Tooltip} from "@nextui-org/tooltip";
import TooltipCustom from "@/components/atoms/Tooltip";
import Button from "@/components/atoms/Button";

export default function Home() {
    const [values, setValues] = useState({
        input1: "",
        input2: ""
    });

    const handleOnChange = (
        event: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    console.log("value1", values);

    return (
        <LayoutContainer>
            <TooltipCustom placement="left" message="this is a tooltip">
                <Button>tooltip</Button>
            </TooltipCustom>
            <GroupInput
                onChange={handleOnChange}
                value1={values.input1}
                value2={values.input2}
                name1="input1"
                name2="input2"
                placeholder1="content 1"
                placeholder2="content 2"
            />
        </LayoutContainer>
    );
}
