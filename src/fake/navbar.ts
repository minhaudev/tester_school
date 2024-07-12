import React from "react";
import IconFilleDocAdd from "@/assets/svgs/File_dock_add_fill.svg";
import FileDocFill from "@/assets/svgs/File_dock_fill.svg";
import GroupUser from "@/assets/svgs/manage_user-group.svg";
interface NavbarProps {
    icon?: any;
    title: string;
    subMenu?: NavbarProps[];
}
export const navbarData: NavbarProps[] = [
    {
        icon: IconFilleDocAdd,
        title: "Sales Order Management",
        subMenu: [{icon: "", title: ""}]
    },
    {
        icon: FileDocFill,
        title: "Create Sales Order",
        subMenu: [{icon: "", title: ""}]
    },
    {
        icon: GroupUser,
        title: "Create Sales Order",
        subMenu: [{icon: "", title: ""}]
    }
];
