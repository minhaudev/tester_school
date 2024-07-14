import Link from "next/link";
import React, {ReactNode} from "react";

interface IBreadcrumbItem {
    url: string;
    label: string;
    prefixIcon?: ReactNode;
}

interface Props {
    separator?: ReactNode;
    breadcrumbs: IBreadcrumbItem[];
}

const Breadcrumb = ({breadcrumbs, separator = ">"}: Props) => {
    const renderBreadcrumbs = () => {
        const length = breadcrumbs.length;
        if (length <= 4) {
            return breadcrumbs.map((breadcrumb, index) =>
                BreadcrumbItem(breadcrumb, index)
            );
        } else {
            return (
                <>
                    {BreadcrumbItem(breadcrumbs[0], 0)}
                    {BreadcrumbItem(breadcrumbs[length - 3], length - 3)}
                    <span className="pointer-events-none text-input">
                        .....
                    </span>
                    {separator}
                    {BreadcrumbItem(breadcrumbs[length - 2], length - 2)}
                    <span className="text-primary font-semibold">
                        {breadcrumbs[length - 1].prefixIcon &&
                            breadcrumbs[length - 1].prefixIcon}
                        {breadcrumbs[length - 1].label}
                    </span>
                </>
            );
        }
    };

    const BreadcrumbItem = (breadcrumb: IBreadcrumbItem, index: number) => (
        <span className="inline-flex items-center " key={index}>
            {breadcrumb.prefixIcon && breadcrumb.prefixIcon}
            {index !== breadcrumbs.length - 1 ? (
                <>
                    <Link href={breadcrumb.url}>
                        <span className="px-1 text-[16px] text-input">
                            {breadcrumb.label}
                        </span>
                    </Link>
                    {separator}
                </>
            ) : (
                <span className="text-primary font-semibold">
                    {breadcrumb.label}
                </span>
            )}
        </span>
    );

    return <nav className="flex items-center">{renderBreadcrumbs()}</nav>;
};

export default Breadcrumb;
