export function timeToTimestamp(time: string) {
    const [hours, minutes, seconds] = time.split(":").map(Number);

    // Get the current date
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    // Create a new date with the current date and the specified time
    const dateWithTime = new Date(year, month, day, hours, minutes, seconds);

    return dateWithTime.getTime();
}
