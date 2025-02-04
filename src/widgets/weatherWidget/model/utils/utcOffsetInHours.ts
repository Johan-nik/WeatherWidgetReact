export const utcOffsetInHours = (timeZoneOffset: string): number => {
    return parseInt(timeZoneOffset, 10) / 60;
};