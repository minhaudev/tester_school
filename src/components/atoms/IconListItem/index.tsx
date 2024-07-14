"use client";
import Link from "next/link";
import React from "react";

interface IconListItemProps {
    title?: string;
    href: string;
    prefixIcon?: React.ComponentType<{className?: string}>;
    leadingIcon?: React.ComponentType<{className?: string}>;
    active?: boolean;
    onActive: () => void;
    expand?: boolean;
    isAnimate?: boolean;
}

const IconListItem: React.FC<IconListItemProps> = ({
    title,
    href = "#",
    prefixIcon: PrefixIcon,
    leadingIcon: LeadingIcon,
    active = false,
    onActive,
    expand = true,
    isAnimate = false,
    ...props
}) => {
    return (
        <Link
            onClick={onActive}
            href={href}
            className={`group flex items-center justify-center w-full  px-4 py-4 text-white ${
                active ? "bg-secondary" : "bg-primary"
            } ${expand ? "flex-row" : "flex-col"}`}
            {...props}>
            {PrefixIcon && (
                <PrefixIcon
                    className={`w-6 h-6 text-white ${
                        !active && "group-hover:text-secondary"
                    }`}
                />
            )}
            {expand && (
                <p
                    className={`w-full text-white pl-2 ${
                        !active && "group-hover:text-secondary"
                    }`}>
                    {title}
                </p>
            )}
            {LeadingIcon && (
                <div
                    className={`duration-200 ${isAnimate ? "rotate-180" : ""}`}>
                    <LeadingIcon
                        className={`w-6 h-6 text-white ${
                            !active && "group-hover:text-secondary"
                        }`}
                    />
                </div>
            )}
        </Link>
    );
};

export default IconListItem;
