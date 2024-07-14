"use client";
import React, {useState} from "react";
import Input from "./Input";
import Button from "../Button/Button";
import addring from "@/assets/images/Add_ring_fill.svg";
import Bell from "@/assets/images/Bell";
function TextInput() {
    const [values, setValues] = useState({
        textInput: "",
        emailInput: "",
        numberInput: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div className="mt-10">
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />{" "}
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />{" "}
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />{" "}
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />{" "}
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />
            <Input
                size="large"
                prefix={<Bell />}
                type="password"
                className=""
                asterisk={true}
                helperText="this is a error"
                value={values.textInput}
                placeholder="Example"
                name="textInput"
                handleOnChange={handleChange}
            />
        </div>
    );
}

export default TextInput;
