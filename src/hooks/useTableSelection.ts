// hooks/useTableSelection.ts
import { useState, useCallback } from 'react';
import { ProductData, ProductApprovalsData } from '@/faker/ProductData';

type TablesType = {
    [key: string]: {
        id: string;
        data: { id: string }[]; // Adjust the type as needed
    }
};

const tables: TablesType = {
    "table1": {
        "id": "926fa0f3-674e-4838-b4be-fb5d69e2b2c6",
        "data": ProductData
    },
    "table2": {
        "id": "46aeeea5-bc89-4b61-bfc5-63792ad0034d",
        "data": ProductApprovalsData
    },
    "table3": {
        "id": "0ee92f36-9205-4e88-a986-7de10048420d",
        "data": ProductApprovalsData
    }
};

type TableKey = keyof typeof tables;

interface UseTableSelectionResult {
    selectedItems: Record<string, string[]>;
    selectAll: Record<string, boolean>;
    isAllSelected: (tableId: string) => boolean;
    handleSelectAll: (tableId: string) => void;
    handleCheckboxChange: (tableId: string, id: string) => void;
}

const useTableSelection = (tables: TablesType): UseTableSelectionResult => {
    const [selectAll, setSelectAll] = useState<Record<string, boolean>>({
        "table1": false,
        "table2": false,
        "table3": false
    });
    const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});
    const isAllSelected = useCallback((tableId: string): boolean => {
        const table = tables[tableId];
        if (table && Array.isArray(table.data)) {
            const selectedIds = selectedItems[tableId] || [];
            return table.data.every((item) => selectedIds.includes(item.id));
        }
        console.error("Table data is not an array or tableId is incorrect:", table);
        return false;
    }, [selectedItems, tables]);
    const handleSelectAll = useCallback((tableId: string) => {
        const table = tables[tableId];
        if (table && Array.isArray(table.data)) {
            const allIds = table.data.map((item) => item.id);
            const isCurrentlySelected = selectAll[tableId] ?? false;
            setSelectedItems((prev) => ({
                ...prev,
                [tableId]: isCurrentlySelected ? [] : allIds
            }));
            setSelectAll((prev) => ({ ...prev, [tableId]: !isCurrentlySelected }));
        } else {
            console.error("Table data is not an array or tableId is incorrect:", table);
        }
    }, [selectAll, tables]);

    const handleCheckboxChange = useCallback((tableId: string, id: string) => {
        setSelectedItems((prev) => {
            const currentSelection = prev[tableId] || [];
            const isSelected = currentSelection.includes(id);
            const updatedSelection = isSelected
                ? currentSelection.filter((item) => item !== id)
                : [...currentSelection, id];
            return {
                ...prev,
                [tableId]: updatedSelection
            };
        });

        const table = tables[tableId];
        if (table && Array.isArray(table.data)) {
            const allIds = table.data.map((item) => item.id);
            const allSelected = allIds.length === selectedItems[tableId]?.length;
            setSelectAll((prev) => ({ ...prev, [tableId]: allSelected }));
        }
    }, [selectedItems, tables]);

    return {
        selectedItems,
        selectAll,
        isAllSelected,
        handleSelectAll,
        handleCheckboxChange
    };
};

export default useTableSelection;
