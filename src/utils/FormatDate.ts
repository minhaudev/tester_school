export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function calculateDate({
    startDate,
    endDate
}: {
    startDate?: any;
    endDate: any;
}) {
    const milliSecondTimeAble = convertToTimeStamp(endDate) - Date.now();
    const timeAble = milliSecondTimeAble / (1000 * 60 * 60);
    const day = Math.floor(timeAble / 24);
    const hours = Math.floor(timeAble) - day * 24;
    const minutes =
        Math.floor(milliSecondTimeAble / (1000 * 60)) -
        (hours * 60 + day * 24 * 60);
    const secondTime = Math.floor(
        milliSecondTimeAble / 1000 -
            (minutes * 60 + hours * 60 * 60 + day * 24 * 60 * 60)
    );
    return {day, hours, minutes, secondTime};
}

export const convertToTimeStamp = (date: Date) => {
    const timeZone = new Date().getTimezoneOffset() / 60;
    return date.getTime() + timeZone * 60 * 60 * 1000;
};
