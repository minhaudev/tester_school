"use client";
import Menu from "@/assets/svgs/Menu.svg";
import Button from "@/components/atoms/Button/Button";
import IconListItem from "@/components/atoms/IconListItem";
import {navbarData} from "@/faker/navbar";
import {NavbarProps, NavigationType} from "@/interfaces";
import React, {useEffect, useState} from "react";
import "../../../app/globals.css";

function Navigation({type = NavigationType.CLIENT}: {type: NavigationType}) {
    const [showFirstMenu, setShowFirstMenu] = useState(false);
    const [showSecondMenu, setShowSecondMenu] = useState(false);
    const [active, setActive] = useState(1);
    const [expand, setExpand] = useState(true);
    const handleExpand = () => {
        setExpand(!expand);
        setShowFirstMenu(false);
    };

    const handleShowMenuFirst = () => {
        setShowFirstMenu(!showFirstMenu);
        setExpand(true);
    };

    const handleShowMenuSecond = () => {
        setShowSecondMenu(!showSecondMenu);
        setExpand(true);
    };

    return (
        <div
            className={` h-[100vh] overflow-y-auto ${
                expand ? "w-full max-w-[255px]" : "min-w-[56px]"
            } bg-primary pb-[13px]`}>
            <div
                className={`sticky top-0 h-[56px] z-50 bg-primary flex items-center justify-between py-[13px]  ${
                    expand ? "w-full px-4" : "w-[56px] px-3"
                } font-[400] text-[32px]`}>
                {expand && (
                    <p className="uppercase text-8 font-[400] leading-[34px] text-white font-wendy">
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
                                <IconListItem
                                    onActive={() => setActive(item.id)}
                                    active={active === item.id}
                                    expand={expand}
                                    prefixIcon={item.prefixIcon}
                                    title={item.title}
                                    href={item.href}
                                />
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
                                                        onActive={() =>
                                                            setActive(
                                                                subItem.id
                                                            )
                                                        }
                                                        classCustom={
                                                            "pl-[56px]"
                                                        }
                                                        active={
                                                            active ===
                                                            subItem.id
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
                                                                        onActive={() =>
                                                                            setActive(
                                                                                subSubItem.id
                                                                            )
                                                                        }
                                                                        active={
                                                                            active ===
                                                                            subSubItem.id
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
