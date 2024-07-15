"use client";
import MenuOutline from "@/assets/images/Search.svg";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";

export default function Home() {
    const handleOnChange = (e: any) => {
        console.log(e.target);
    };
    return (
        <>
            <Input
                // error
                isDisabled
                suffixIcon={MenuOutline}
                helperText="this is a value"
                label="Full Name"
                handleOnChange={handleOnChange}
                asterisk
            />
        </>
    );
}
