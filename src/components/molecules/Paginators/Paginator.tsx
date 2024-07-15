// Paginator.tsx
"use client";

import React, {useEffect} from "react";

import ExpandLeftLight from "@/assets/svgs/Expand_left_light.svg";
import ExpandRightLight from "@/assets/svgs/Expand_right.svg";
import ExpandLeftDoubleLight from "@/assets/svgs/Expand_left_double_light.svg";
import ExpandRightDoubleLight from "@/assets/svgs/Expand_right_double_light.svg";

interface PaginatorProps {
    length: number;
    currentPage: number;
    buttonDouble?: boolean;
    onPageChange: (page: number) => void;
}

const Paginator = ({
    length,
    currentPage,
    buttonDouble,
    onPageChange
}: PaginatorProps) => {
    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    const pageNumbers = Array.from({length}, (_, i) => i + 1);

    const getPaginationButtons = () => {
        if (length <= 5) {
            return pageNumbers.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => onPageChange(page)}
                    className={`flex justify-center items-center text-input w-[25px] h-[25px] text-[13px] rounded-[3px] focus:outline-none ${
                        page === currentPage
                            ? "bg-blue-bold text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-100 dark:bg-neutral-600 dark:hover:bg-neutral-500"
                    }`}
                    aria-current={page === currentPage ? "page" : undefined}>
                    {page}
                </button>
            ));
        }

        const firstPages =
            currentPage > 3
                ? pageNumbers.slice(currentPage - 3, currentPage)
                : pageNumbers.slice(0, 3);
        const lastPages = pageNumbers.slice(-3);

        const middlePages = (
            <div className="hs-tooltip flex items-end">
                <span className="group-hover:hidden text-xs text-input">
                    •••
                </span>
            </div>
        );

        const shouldShowMiddlePages =
            lastPages[0] > firstPages[firstPages.length - 1] + 1;

        return (
            <>
                {firstPages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`flex justify-center items-center w-[25px] h-[25px] text-[13px] rounded-[3px] focus:outline-none ${
                            page === currentPage
                                ? "bg-blue-bold text-white"
                                : "bg-gray-200 text-input hover:bg-gray-100 dark:bg-neutral-600 dark:hover:bg-neutral-500"
                        }`}
                        aria-current={
                            page === currentPage ? "page" : undefined
                        }>
                        {page}
                    </button>
                ))}

                {shouldShowMiddlePages && middlePages}

                {lastPages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`flex justify-center items-center w-[25px] h-[25px] text-[13px] rounded-[3px] focus:outline-none ${
                            page === currentPage
                                ? "bg-blue-bold text-white"
                                : "bg-gray-200 text-input hover:bg-gray-100 dark:bg-neutral-600 dark:hover:bg-neutral-500"
                        }`}
                        aria-current={
                            page === currentPage ? "page" : undefined
                        }>
                        {page}
                    </button>
                ))}
            </>
        );
    };

    return (
        <div>
            <nav className="flex items-center gap-x-4">
                <div className="flex flex-row gap-x-2">
                    {buttonDouble && (
                        <button
                            type="button"
                            onClick={() => onPageChange(1)}
                            className="inline-flex justify-center items-center gap-x-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none">
                            <ExpandLeftDoubleLight className="" />
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none">
                        <ExpandLeftLight />
                    </button>
                </div>
                <div className="flex gap-x-2">{getPaginationButtons()}</div>
                <div className="flex gap-x-2">
                    <button
                        type="button"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === length}
                        className="inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none">
                        <ExpandRightLight />
                    </button>
                    {buttonDouble && (
                        <button
                            type="button"
                            onClick={() => onPageChange(length)}
                            className="inline-flex justify-center items-center gap-x-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none">
                            <ExpandRightDoubleLight />
                        </button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Paginator;
