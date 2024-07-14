"use client";
import MenuOutline from "@/assets/svgs/Menu.svg";
import Button from "@/components/atoms/Button/Button";

export default function Home() {
    return (
        <>
            <Button isIcon variant="primary-dark" color="white">
                <MenuOutline />
            </Button>
        </>
    );
}
