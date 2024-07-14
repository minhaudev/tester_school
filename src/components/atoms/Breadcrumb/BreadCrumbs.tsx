import Link from "next/link";
import React, {ReactNode} from "react";

interface IBreadcrumbItem {
    url: string;
    label: string;
    prefixIcon?: ReactNode;
}

interface Props {
    separator?: string;
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
                    <span>...</span>
                    {separator}
                    {BreadcrumbItem(breadcrumbs[length - 2], length - 2)}
                    <span className="text-primary">
                        {breadcrumbs[length - 1].prefixIcon &&
                            breadcrumbs[length - 1].prefixIcon}
                        {breadcrumbs[length - 1].label}
                    </span>
                </>
            );
        }
    };

    const BreadcrumbItem = (breadcrumb: IBreadcrumbItem, index: number) => (
        <span className="inline-flex" key={index}>
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
                <span className="text-primary">{breadcrumb.label}</span>
            )}
        </span>
    );

    return <nav>{renderBreadcrumbs()}</nav>;
};

export default Breadcrumb;
