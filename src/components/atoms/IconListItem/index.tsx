"use client";
import FilleDocAdd from "@/assets/svgs/File_dock_add_fill.svg";
import Link from "next/link";
import React from "react";
interface IconListItemProps {
    title?: string;
    href: string;
    icon?: React.Component;
    active?: boolean;
    expand?: boolean;
}
function IconListItem({
    icon,
    title,
    href = "#",
    active = false,
    expand = true
}: IconListItemProps) {
    return (
        <Link
            href={href}
            className={` ${
                expand ? "w-full" : "w-fit"
            } group p-4 flex gap-2 items-center ${
                active ? " bg-secondary" : "bg-primary"
            } text-white ${!active && " hover:text-secondary"}`}>
            <FilleDocAdd
                className={`w-6  h-6 text-4 leading-[19px] font-[500] text-white ${
                    !active && "group-hover:text-secondary"
                }`}
            />
            {expand && <p>{title}</p>}
        </Link>
    );
}

export default IconListItem;
