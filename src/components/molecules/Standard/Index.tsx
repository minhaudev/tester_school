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

                    {valueSelect === "Galvalume" && (
                        <div>
                            <div className="flex gap-2 mb-4">
                                <Input
                                    placeholder="Select"
                                    label="Surface coating"
                                    variant="select"
                                />

                                <Input
                                    placeholder="Select"
                                    label="Alloy coating"
                                    variant="select"
                                />
                            </div>
                            <Input
                                placeholder="Select"
                                label="Specification"
                                variant="select"
                            />
                        </div>
                    )}
                    {valueSelect === "Pre-painted galvanized" && (
                        <div>
                            <div className="flex gap-2 mb-4">
                                <Input
                                    placeholder="Select"
                                    label="Surface coating"
                                    variant="select"
                                />

                                <Input
                                    placeholder="Select"
                                    label="Alloy coating"
                                    variant="select"
                                />
                            </div>
                            <Input
                                placeholder="Select"
                                label="Specification"
                                variant="select"
                            />
                        </div>
                    )}
                </DrawerContent>
                <DrawerFooter
                    title="Add new"
                    isAction
                    handleClick={() => {}}></DrawerFooter>
            </Drawer>
        </>
    );
}
