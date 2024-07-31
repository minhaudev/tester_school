import React, {useState} from "react";
import Drawer from "../Drawer";
import DrawerContent from "../Drawer/components/DrawerContent";
import DrawerFooter from "../Drawer/components/DrawerFooter";
import Input from "@/components/atoms/Input";
interface Props {}
export default function Standard(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
        setValueSelect("");
    };
    const [valueSelect, setValueSelect] = useState("");
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(e.target.value);
    };

    return (
        // fib bug slider hight drawer
        <>
            <button onClick={() => setIsOpen(true)}>Click me</button>
            <Drawer isOpen={isOpen} onClose={handleClose}></Drawer>
        </>
    );
}
