"use client";
import ChartFill from "@/assets/svgs/Chart_fill.svg";
import IconFilleDocAdd from "@/assets/svgs/File_dock_add_fill.svg";
import FileDocFill from "@/assets/svgs/File_dock_fill.svg";
import LineUp from "@/assets/svgs/Line_up.svg";
import PaperFill from "@/assets/svgs/Paper_fill.svg";
import UserCircle from "@/assets/svgs/User_cicrle.svg";
import Database from "@/assets/svgs/Database_fill.svg";
import TagPercent from "@/assets/svgs/Offer_Percent.svg";
import FileCheck from "@/assets/svgs/File_Tick.svg";
import Box3d from "@/assets/svgs/3d_box.svg";
import UserAdd from "@/assets/svgs/User_add_alt_fill.svg";
import GroupUser from "@/assets/svgs/manage_user-group.svg";
import ProductUser from "@/assets/svgs/Product_User.svg";
import IconListItem from "@/components/atoms/IconListItem";
import {tableFuture} from "@/fake/tableFuture";

function TableFuture() {
    return (
        <div className=" max-w-[546px] mt-[30px] bg-primary ml-[100px] grid grid-cols-2 gap-x-[26px] gap-y-1 pl-[23px] pt-[18px] pr-[49px]">
            {tableFuture.map((future, index) => (
                <IconListItem
                    key={index}
                    href="#"
                    classCustom="px-0 py-[18px]"
                    title="Create Sales Order"
                    prefixIcon={IconFilleDocAdd}
                    onActive={() => {}}
                />
            ))}
        </div>
    );
}

export default TableFuture;
