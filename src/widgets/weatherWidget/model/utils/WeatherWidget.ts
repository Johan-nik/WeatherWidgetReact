import React from "react";
import WeatherSwitch from "../WeatherSwich";

export const weatherWidget = (weatherCode: string, timeZoneOffset: string) => {
    const widgetName = WeatherSwitch(
        weatherCode,
        parseInt(timeZoneOffset, 10) / 60
    );
    return React.lazy(
        () => import(`../../../../features/optionsWeatherWidget/ui/${widgetName}`)
    );
};
