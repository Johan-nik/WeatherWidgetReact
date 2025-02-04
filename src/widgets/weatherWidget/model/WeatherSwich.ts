type WeatherCode = 'clear' | 'cloudy' | 'snow' | 'rain' | 'storm';

export default function WeatherSwitch(weatherCode: string, utcOffset: number): string {
    // Определяем границы времени для "ночи" (с 23:00 до 08:00)
    const NIGHT_START = 23; 
    const NIGHT_END = 8; 

    // Получаем текущее UTC-время
    const now = new Date();
    // Преобразуем время с учётом смещения часового пояса
    const localHours = (now.getUTCHours() + utcOffset + 24) % 24;

    // Проверяем, попадает ли время в ночной период
    const isNight = localHours >= NIGHT_START || localHours < NIGHT_END;

    // Определяем маппинг для времени суток
    const dayMapping: Record<WeatherCode, string> = {
        clear: "WeatherWidgetClearDay",
        cloudy: "WeatherWidgetCloudyDay",
        snow: "WeatherWidgetSnowDay",
        rain: "WeatherWidgetRainDay",
        storm: "WeatherWidgetStormDay",
    };

    const nightMapping: Record<WeatherCode, string> = {
        clear: "WeatherWidgetClearNight",
        cloudy: "WeatherWidgetCloudyNight",
        snow: "WeatherWidgetSnowNight",
        rain: "WeatherWidgetRainNight",
        storm: "WeatherWidgetStormNight",
    };

    // Выбираем маппинг в зависимости от времени суток
    const selectedMapping = isNight ? nightMapping : dayMapping;

    // Возвращаем виджет на основе кода погоды или виджет по умолчанию
    return selectedMapping[weatherCode as WeatherCode] || "WeatherWidgetDefault";
}