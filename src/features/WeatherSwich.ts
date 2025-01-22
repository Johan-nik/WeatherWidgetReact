type WeatherCode = 'clear' | 'cloudy' | 'snow' | 'rain' | 'storm';

export default function WeatherSwitch(weatherCode: string): string {
    const weatherMapping: Record<WeatherCode, string> = {
        clear: "WeatherWidgetClearDay",
        cloudy: "WeatherWidgetCloudyDay",
        snow: "WeatherWidgetSnowDay",
        rain: "WeatherWidgetRainDay",
        storm: "WeatherWidgetStormDay",
    };

    // Попытка найти соответствие, возвращается виджет или "WeatherWidgetDefault".
    return weatherMapping[weatherCode as WeatherCode] || "WeatherWidgetDefault";
}