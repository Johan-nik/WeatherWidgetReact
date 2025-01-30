import React from "react";
import WeatherSwitch from "../../features/WeatherSwich";

export const getWeatherWidget = (weatherCode: string, timeZoneOffset: string) => {
    const widgetName = WeatherSwitch(weatherCode, parseInt(timeZoneOffset, 10) / 60);
    return React.lazy(() => import(`../ui/uiWeatherWidget/${widgetName}`));
};