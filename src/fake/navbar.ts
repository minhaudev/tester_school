import IconFilleDocAdd from "@/assets/svgs/File_dock_add_fill.svg";
import FileDocFill from "@/assets/svgs/File_dock_fill.svg";
import GroupUser from "@/assets/svgs/manage_user-group.svg";
import ChevronDown from "@/assets/svgs/Expand_down.svg";
interface NavbarProps {
    id: number;
    prefixIcon?: any;
    leadingIcon?: any;
    title: string;
    href: string;
    subMenu?: NavbarProps[];
}
const navbarData: NavbarProps[] = [
    {
        id: 1,
        prefixIcon: IconFilleDocAdd,
        title: "Sales Order Management",
        href: "/home"
    },
    {
        id: 2,
        prefixIcon: FileDocFill,
        title: "Create Sales Order",
        href: "#",
        subMenu: [
            {
                id: 2.1,
                leadingIcon: ChevronDown,
                title: "Approved Orders",
                href: "#",
                subMenu: [
                    {
                        id: 2.12,
                        title: "Pending Delivery",
                        href: "#"
                    },
                    {id: 2.13, title: "Works in progress", href: "#"},
                    {id: 2.14, title: "Complete & Denied", href: "#"}
                ]
            },
            {id: 2.2, title: "Pending Approvals", href: "#"},
            {id: 2.3, title: "Drafts", href: "#"},
            {id: 2.4, title: "Canceled & Denied", href: "#"}
        ]
    },
    {
        id: 3,
        prefixIcon: GroupUser,
        title: "Create Sales Order",
        href: "#"
    }
];

export default navbarData;
