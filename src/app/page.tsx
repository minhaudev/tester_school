"use client";
import React, {useState} from "react";
import GroupInput from "@/components/molecules/GroupInput/GroupInput";
import LayoutContainer from "./LayoutContainer";

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
            <GroupInput
                onChange={handleOnChange}
                value1={values.input1}
                value2={values.input2}
                name1="input1"
                name2="input2"
                placeholder1="Placeholder 1"
                placeholder2="Placeholder 2"
            />
        </LayoutContainer>
    );
}
