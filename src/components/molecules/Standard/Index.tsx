import React, {useState} from "react";
import Drawer from "../Drawer";
import DrawerContent from "../Drawer/components/DrawerContent";
import DrawerFooter from "../Drawer/components/DrawerFooter";
import Input from "@/components/atoms/Input";
export default function Standard() {
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
        <>
            <button onClick={() => setIsOpen(true)}>Click me</button>
            <Drawer
                name="Header Name"
                subName="Sub Name"
                isOpen={isOpen}
                onClose={handleClose}>
                <DrawerContent>
                    <Input
                        className="mb-4"
                        name="select-v1"
                        value={valueSelect}
                        handleSelectChange={handleSelect}
                        optionSelect={[
                            "Galvalume",
                            "Pre-painted galvanized",
                            "Specification"
                        ]}
                        label="Type"
                        variant="select"
                        placeholder="Select"
                    />
                </DrawerContent>
                <DrawerFooter
                    title="Add new"
                    isAction
                    handleClick={() => {}}></DrawerFooter>
            </Drawer>
        </>
    );
}
