export const getUtcOffsetInHours = (timeZoneOffset: string): number => {
    return parseInt(timeZoneOffset, 10) / 60;
};