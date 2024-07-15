"use client";

import Button from "@/components/atoms/Button/Button";
import Menu from "@/assets/svgs/Menu-1.svg";
export default function Home() {
    return (
        <>
            <Button isIcon variant="primary-dark" color="blue-dark">
                <Menu />
            </Button>
        </>
    );
}
