import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface UsePaginationProps {
    initialPage?: number;
    totalPages: number;
}

export const usePagination = ({ initialPage = 1, totalPages }: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const router = useRouter();

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            router.push(`/page?page=${page}`);
        }
    };

    return {
        currentPage,
        handlePageChange,
    };
};