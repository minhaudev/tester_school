export const formatNotice = (number: number): string => {
    if (!number) return "";
    if (number >= 1000) {
        return "999+";
    } else if (number >= 100) {
        return "99+";
    } else if (number >= 10) {
        return "9+";
    }
    return number.toString();
};
