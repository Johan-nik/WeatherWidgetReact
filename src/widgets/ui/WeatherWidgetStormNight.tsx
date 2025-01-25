import React from "react";
import useCurrentTime from "../../features/useCurrentTime";
import weatherLogo from "../../shared/assets/image/weather-logo/storm.svg";
import windLogo from "../../shared/assets/image/weather-item/wind.svg";
import dropLogo from "../../shared/assets/image/weather-item/drop.svg";
import "../../shared/assets/styles/WeatherWidget.css";
import "../../shared/assets/styles/WeatherWidgetBackground.css";

interface CityData {
    timeZoneOffset: string;
    city: {
        name: string;
        nameP: string;
    };
    temperature: number;
    description: string;
    weatherCode: string;
    windDirection: string;
    windSpeed: number;
    humidity: number;
}

type Props = {
    resp: CityData;
};

const WeatherWidgetStormNight: React.FC<Props> = ({ resp }) => {
    // Преобразуем смещение времени из строкового формата в числовое значение в часах
    const utcOffset = parseInt(resp.timeZoneOffset, 10) / 60;

    // Получаем текущее время для города с учётом смещения
    const currentTime = useCurrentTime(utcOffset);

    return (
        <>
            <div className="widgetConteiner stormBackgroundNight">
                <div className="widgetConteiner__topBox">
                    <div className="widgetConteiner__infoConteiner">
                        <div className="widgetConteiner__time">
                            <p>{currentTime}</p>
                        </div>
                        <div className="widgetConteiner__infoPlace">
                            <p>{resp.city.name}</p>
                        </div>
                    </div>
                    <div className="widgetConteiner__imageLogo">
                        <img src={weatherLogo} alt="" />
                    </div>
                </div>
                <div className="widgetConteiner_bottomBox">
                    <p className="widgetConteiner__elemDayTitle">
                        Общий прогноз на день {resp.city.nameP}
                    </p>
                    <div className="widgetConteiner__elemDayBox">
                        <div>
                            <p className="widgetConteiner__elemDayTemperature">
                                {resp.temperature}
                                <sup>o</sup>
                            </p>
                            <p className="widgetConteiner__elemDayWeather">
                                {resp.description}
                            </p>
                        </div>
                        <div className="widgetConteiner__dayWeatherInfo">
                            <div className="widgetConteiner__infoWindHumidity">
                                <img src={windLogo} alt="" />
                                <p>
                                    {resp.windDirection}, {resp.windSpeed} м/с
                                </p>
                            </div>
                            <div className="widgetConteiner__infoWindHumidity">
                                <img src={dropLogo} alt="" />
                                <p>{resp.humidity} мм</p>
                            </div>
                        </div>
                    </div>
                    <div className="widgetConteiner__sourceWeather">
                        <p>
                            По данным <span>Gismeteo</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherWidgetStormNight;
