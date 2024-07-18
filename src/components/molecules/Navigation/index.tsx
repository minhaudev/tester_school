"use client";
import Menu from "@/assets/svgs/menu.svg";
import Button from "@/components/atoms/Button";
import IconListItem from "@/components/atoms/IconListItem";
import {navbarData} from "@/faker/NavbarData";
import {NavbarProps, NavigationType} from "@/interfaces";
import React, {useEffect, useState} from "react";
import "../../../app/globals.css";
import usePersistedState from "@/hook/saveLocalStorage";

function Navigation({
    type = NavigationType.CLIENT,
    routePath
}: {
    type: NavigationType;
    routePath: string;
}) {
    const [showFirstMenu, setShowFirstMenu] = useState(false);
    const [showSecondMenu, setShowSecondMenu] = useState(false);
    const [active, setActive] = useState(1);
    const [expand, setExpand] = usePersistedState("expand", true);

    const handleExpand = () => {
        setExpand(!expand);
        setShowFirstMenu(false);
        setShowSecondMenu(false);
    };

    const handleShowMenuFirst = () => {
        setShowFirstMenu(!showFirstMenu);
        setExpand(true);
    };

    const handleShowMenuSecond = () => {
        setShowSecondMenu(!showSecondMenu);
        setExpand(true);
    };

    useEffect(() => {
        if (routePath.includes("/order")) {
            setExpand(true);
            setShowFirstMenu(true);
            setShowSecondMenu(true);
        }
    }, [routePath]);

    return (
        <div
            className={`h-[100vh] overflow-y-auto transition-width duration-100 ${
                expand ? "min-w-[255px]" : "min-w-[56px]"
            } bg-primary pb-[13px]`}>
            <div
                className={`sticky top-0 h-[56px] z-50 bg-primary flex items-center justify-between py-[13px] ${
                    expand ? "px-4" : "px-3"
                } font-[400] text-[32px]`}>
                {expand && (
                    <p className="uppercase text-8 font-[400] leading-[34px] text-white font-wendy-one">
                        Luna
                    </p>
                )}
                <Button
                    isIcon
                    variant="primary-dark"
                    color="white"
                    size="medium"
                    onClick={handleExpand}>
                    <Menu />
                </Button>
            </div>
            <div className="pt-6 flex flex-col gap-3">
                {navbarData &&
                    navbarData[type].map((item: NavbarProps, index: number) => (
                        <React.Fragment key={index}>
                            <div
                                onClick={() => {
                                    if (item.subMenu) {
                                        handleShowMenuFirst();
                                    }
                                }}>
                                {item.href ?
                                    <IconListItem
                                        active={item.href === routePath}
                                        expand={expand}
                                        prefixIcon={item.prefixIcon}
                                        title={item.title}
                                        href={item.href}
                                    />
                                :   <IconListItem
                                        active={active === item.id}
                                        expand={expand}
                                        prefixIcon={item.prefixIcon}
                                        title={item.title}
                                    />
                                }
                            </div>
                            {item.subMenu && showFirstMenu && (
                                <div>
                                    {item.subMenu.map(
                                        (
                                            subItem: NavbarProps,
                                            subIndex: number
                                        ) => (
                                            <React.Fragment key={subIndex}>
                                                <div
                                                    onClick={() => {
                                                        if (subItem.subMenu) {
                                                            handleShowMenuSecond();
                                                        }
                                                    }}>
                                                    <IconListItem
                                                        classCustom={
                                                            "pl-[56px]"
                                                        }
                                                        active={
                                                            subItem.href ===
                                                            routePath
                                                        }
                                                        title={subItem.title}
                                                        href={subItem.href}
                                                        isAnimate={
                                                            showSecondMenu
                                                        }
                                                        leadingIcon={
                                                            subItem.leadingIcon
                                                        }
                                                    />
                                                </div>
                                                {subItem.subMenu &&
                                                    showFirstMenu &&
                                                    showSecondMenu && (
                                                        <div>
                                                            {subItem.subMenu.map(
                                                                (
                                                                    subSubItem: NavbarProps,
                                                                    subSubIndex: number
                                                                ) => (
                                                                    <IconListItem
                                                                        key={
                                                                            subSubIndex
                                                                        }
                                                                        classCustom="pl-[76px]"
                                                                        active={
                                                                            subSubItem.href ===
                                                                            routePath
                                                                        }
                                                                        title={
                                                                            subSubItem.title
                                                                        }
                                                                        href={
                                                                            subSubItem.href
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                            </React.Fragment>
                                        )
                                    )}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
}

export default Navigation;
