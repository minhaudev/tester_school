import { useState, useEffect, useCallback } from 'react';

const getStoredPaginationState = (tableId: string) => {
    const stored = localStorage.getItem(`paginationState-${tableId}`);
    return stored ? JSON.parse(stored) : { currentPage: 1, recordsPerPage: 5 };
};

const useTablePagination = (tables: { [key: string]: { totalRecords: number, initialPage: number, initialRecordsPerPage: number } }) => {
    const [paginationStates, setPaginationStates] = useState<{ [key: string]: { currentPage: number, recordsPerPage: number } }>(
        Object.fromEntries(Object.keys(tables).map(tableId => [tableId, getStoredPaginationState(tableId)]))
    );

    useEffect(() => {
        Object.keys(paginationStates).forEach(tableId => {
            localStorage.setItem(`paginationState-${tableId}`, JSON.stringify(paginationStates[tableId]));
        });
    }, [paginationStates]);

    const handlePageChange = (tableId: string, newPage: number) => {
        setPaginationStates(prev => ({
            ...prev,
            [tableId]: { ...prev[tableId], currentPage: newPage }
        }));
    };

    const handleRecordsPerPageChange = (tableId: string, newRecordsPerPage: number) => {
        setPaginationStates(prev => ({
            ...prev,
            [tableId]: { ...prev[tableId], recordsPerPage: newRecordsPerPage }
        }));
    };

    const paginatedData = (tableId: string, data: any[]) => {
        const { currentPage, recordsPerPage } = paginationStates[tableId];
        const start = (currentPage - 1) * recordsPerPage;
        const end = start + recordsPerPage;
        return data.slice(start, end);
    };

    const totalPages = (tableId: string) => {
        const { totalRecords } = tables[tableId];
        const { recordsPerPage } = paginationStates[tableId];
        return Math.ceil(totalRecords / recordsPerPage);
    };

    const handlePreviousPage = useCallback((tableId: string) => {
        setPaginationStates(prev => {
            const { currentPage } = prev[tableId];
            const newPage = Math.max(1, currentPage - 1);
            handlePageChange(tableId, newPage);
            return prev;
        });
    }, [handlePageChange]);

    const handleNextPage = useCallback((tableId: string) => {
        setPaginationStates(prev => {
            const { currentPage } = prev[tableId];
            const newPage = Math.min(totalPages(tableId), currentPage + 1);
            handlePageChange(tableId, newPage);
            return prev;
        });
    }, [handlePageChange, totalPages]);

    const handleRecordsPerPage = useCallback((tableId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        handleRecordsPerPageChange(tableId, Number(event.target.value));
    }, [handleRecordsPerPageChange]);

    return {
        paginationStates,
        totalPages,
        handlePageChange,
        handleRecordsPerPageChange,
        paginatedData,
        handlePreviousPage,
        handleNextPage,
        handleRecordsPerPage
    };
};

export default useTablePagination;
