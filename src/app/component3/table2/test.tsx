import React, {useState, useEffect, ChangeEvent} from "react";
import {twMerge} from "tailwind-merge";
import LayoutContainer from "@/app/LayoutContainer";
import {TABLE_BODY} from "@/faker/TableData";
import {Checkbox} from "primereact/checkbox";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import ExpandLeftLight from "@/assets/svgs/Expand_left_light.svg";
import ExpandRightLight from "@/assets/svgs/Expand_right_light.svg";
import ValidateServiceTime from "@/components/molecules/ValidateServiceTime";
import ValidateValidityTime from "@/components/molecules/ValidateValidityTime";
import Drawer from "@/components/molecules/Drawer";
import DrawerContent from "@/components/molecules/Drawer/components/DrawerContent";
import DrawerFooter from "@/components/molecules/Drawer/components/DrawerFooter";
import Propertie from "@/components/atoms/Properties";
import TimeFill from "@/assets/svgs/TimeFill.svg";

export default function Home() {
    const [selectedItems, setSelectedItems] = useState<{id: string}[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const endDate = new Date(Date.parse("2024-07-19T17:01:00"));
    const startDate = new Date(Date.parse("2024-07-19T13:50:00"));
    const [isOpen, setIsOpen] = useState(false);
    const [valueSelect, setValueSelect] = useState("");

    useEffect(() => {
        if (selectedItems.length === 0) {
            setSelectAll(false);
        }
    }, [selectedItems]);

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(TABLE_BODY.data.map((item) => ({id: item.id})));
        }
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (id: string) => {
        const selectedItem = TABLE_BODY.data.find((item) => item.id === id);
        if (selectedItem) {
            if (selectedItems.some((item) => item.id === id)) {
                setSelectedItems(
                    selectedItems.filter((item) => item.id !== id)
                );
            } else {
                setSelectedItems([...selectedItems, selectedItem]);
            }
        }
    };

    const handleEndIn = () => {
        alert("end in");
    };

    const handleOnChange = () => {
        console.log("on change");
    };

    const handleClose = () => {
        setIsOpen(false);
        setValueSelect("");
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValueSelect(e.target.value);
    };

    const actionBodyTemplate = () => {
        return (
            <Button
                icon="pi pi-ellipsis-h"
                className="p-button-rounded p-button-secondary"
            />
        );
    };

    return (
        <LayoutContainer>
            <div className="overflow-x-auto mt-4 mx-4">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-between gap-4">
                        <InputText
                            placeholder="Search"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="flex flex-row justify-between gap-x-2 items-center text-text text-xs font-normal">
                        <p>Display</p>
                        <select
                            value={valueSelect}
                            onChange={handleSelect}
                            className="p-inputtext p-component">
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <p> of {TABLE_BODY.total} results</p>
                        <Button
                            icon={
                                <ExpandLeftLight className="w-5 h-5 text-gray-10" />
                            }
                            className="p-button-outlined p-button-secondary"
                        />
                        <Button
                            icon={
                                <ExpandRightLight className="w-5 h-5 text-gray-10" />
                            }
                            className="p-button-outlined p-button-secondary"
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mt-4">
                <DataTable
                    value={TABLE_BODY.data}
                    className="min-w-full text-xs table-fixed"
                    selection={selectedItems}
                    onSelectionChange={(e) => setSelectedItems(e.value)}
                    selectionMode="checkbox">
                    <Column
                        selectionMode="multiple"
                        headerStyle={{width: "3%"}}
                    />
                    <Column
                        field="itemId"
                        header="Ticket ID"
                        bodyClassName="text-center"
                        headerStyle={{width: "7%"}}
                    />
                    <Column
                        field="propertieStatus.status"
                        header="Status"
                        body={(rowData) => (
                            <Propertie
                                status={rowData.propertieStatus.status}
                                isIcon={rowData.propertieStatus.isIcon}
                                title={rowData.propertieStatus.title}
                            />
                        )}
                        headerStyle={{width: "15%"}}
                    />
                    <Column
                        field="companyName"
                        header="Customer"
                        headerStyle={{width: "14%"}}
                    />
                    <Column
                        field="propertieTitle.status"
                        header="Properties"
                        body={(rowData) => (
                            <Propertie
                                status={rowData.propertieTitle.status}
                                isIcon={rowData.propertieTitle.isIcon}
                                title={rowData.propertieTitle.title}
                            />
                        )}
                        headerStyle={{width: "15%"}}
                    />
                    <Column
                        field="pricePolicy.text"
                        header="Progresses"
                        body={(rowData) => (
                            <div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <TimeFill
                                        className={
                                            rowData.pricePolicy.iconClassName
                                        }
                                    />
                                    {rowData.pricePolicy.text}
                                </div>
                                <a onClick={() => setIsOpen(true)}>
                                    See details
                                </a>
                            </div>
                        )}
                        headerStyle={{width: "11%"}}
                    />
                    <Column
                        field="serviceTime"
                        header="Service time"
                        body={(rowData) => (
                            <ValidateServiceTime
                                onEnd={handleEndIn}
                                endDate={endDate}
                                startDate={startDate}
                            />
                        )}
                        headerStyle={{width: "11%"}}
                    />
                    <Column
                        field="validityTime"
                        header="Validity time"
                        body={(rowData) => (
                            <ValidateValidityTime
                                onEnd={handleEndIn}
                                endDate={endDate}
                                startDate={startDate}
                            />
                        )}
                        headerStyle={{width: "9%"}}
                    />
                    <Column
                        field="time"
                        header="Created date"
                        headerStyle={{width: "6%"}}
                    />
                    <Column
                        field="price"
                        header="Total tonnage"
                        body={(rowData) => rowData.price.toLocaleString()}
                        headerStyle={{width: "6%"}}
                    />
                </DataTable>
            </div>
            <Drawer isOpen={isOpen} onClose={handleClose}>
                <DrawerContent children={undefined}></DrawerContent>
                <DrawerFooter handleClick={() => {}} title={""}></DrawerFooter>
            </Drawer>
        </LayoutContainer>
    );
}
