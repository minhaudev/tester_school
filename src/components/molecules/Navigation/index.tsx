"use client";
import React, {useState} from "react";
import Menu from "@/assets/svgs/Menu.svg";
import "../../../app/globals.css";
import IconListItem from "@/components/atoms/IconListItem";
import navbarData from "@/fake/navbar";

function Navigation() {
    const [showFirstMenu, setShowFirstMenu] = useState(false);
    const [showSecondMenu, setShowSecondMenu] = useState(false);
    const [active, setActive] = useState(1);
    const [expand, setExpand] = useState(false);

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
            className={`fixed left-0 top-0 h-[100vh] ${
                expand ? "w-full max-w-[255px]" : "w-fit"
            } bg-primary py-[13px]`}>
            <div
                className={`flex items-center justify-between px-4 ${
                    expand ? "w-full" : "w-fit"
                } font-[400] text-[32px]`}>
                {expand && (
                    <p className="uppercase text-8 font-[400] text-white font-wendy">
                        Luna
                    </p>
                )}
                <div className="w-8 h-8 border-white border-[1px] rounded-md flex items-center justify-center  ">
                    <Menu
                        className=" text-white w-5 h-5"
                        onClick={handleExpand}
                    />
                </div>
            </div>
            <div className="pt-6">
                {navbarData &&
                    navbarData.map((item, index) => (
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
                                <div className="pl-8">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <React.Fragment key={subIndex}>
                                            <div
                                                onClick={() => {
                                                    if (subItem.subMenu) {
                                                        handleShowMenuSecond();
                                                    }
                                                }}>
                                                <IconListItem
                                                    onActive={() =>
                                                        setActive(subItem.id)
                                                    }
                                                    active={
                                                        active === subItem.id
                                                    }
                                                    title={subItem.title}
                                                    href={subItem.href}
                                                    isAnimate={showSecondMenu}
                                                    leadingIcon={
                                                        subItem.leadingIcon
                                                    }
                                                />
                                            </div>
                                            {subItem.subMenu &&
                                                showFirstMenu &&
                                                showSecondMenu && (
                                                    <div className="pl-4">
                                                        {subItem.subMenu.map(
                                                            (
                                                                subSubItem,
                                                                subSubIndex
                                                            ) => (
                                                                <IconListItem
                                                                    key={
                                                                        subSubIndex
                                                                    }
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
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
}

export default Navigation;
