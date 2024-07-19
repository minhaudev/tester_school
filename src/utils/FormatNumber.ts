export const number_format = (value: number): string => {
    return parseFloat(value.toFixed(2)).toString();
};
