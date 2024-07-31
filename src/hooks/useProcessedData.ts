import { useCallback } from 'react';
import useValidateTime from './useValidateTime';

// Utility functions
const isValidDate = (dateString: string): boolean => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
};

const convertToTimeStamp = (date: Date): number => {
    return date.getTime();
};

const useProcessedData = () => {
    const processRow = useCallback((row: any) => {
        let startDate = new Date();
        let endDate = new Date();

        if (isValidDate(row.serviceTime.startDate) && isValidDate(row.serviceTime.endDate)) {
            startDate = new Date(Date.parse(row.serviceTime.startDate));
            endDate = new Date(Date.parse(row.serviceTime.endDate));
        } else {
            console.log("Invalid date");
        }

        // Call useValidateTime with actual arguments
        const validateService = useValidateTime({ endDate, startDate });

        return {
            ...row,
            createdDateTimestamp: convertToTimeStamp(new Date(Date.parse(row.createdDate))),
            validateService: validateService.timeAble,
            startDate,
            endDate,
        };
    }, []);

    const processData = useCallback((data: any[]) => {
        return data.map(processRow);
    }, [processRow]);

    return { processData };
};

export default useProcessedData;
