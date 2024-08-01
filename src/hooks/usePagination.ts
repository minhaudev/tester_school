import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface UsePaginationProps {
    initialPage?: number;
    totalPages: number;
}

export const usePagination = ({ initialPage = 1, totalPages }: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const pageParam = Number(searchParams.get('page'));
        if (pageParam) {
            if (isNaN(pageParam) || pageParam < 1 || pageParam > totalPages) {
                router.push('/404');
            } else {
                setCurrentPage(pageParam);
            }
        } else {
            setCurrentPage(initialPage);
        }
    }, [searchParams, router, initialPage, totalPages]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            router.push(`?page=${page}`);
        }
    };

    return {
        currentPage,
        handlePageChange,
    };
};
