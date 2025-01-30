import React from "react";
import useCurrentTime from "../../../features/useCurrentTime";
import weatherLogo from "../../../shared/assets/image/weather-logo/moon.svg";
import windLogo from "../../../shared/assets/image/weather-item/wind.svg";
import dropLogo from "../../../shared/assets/image/weather-item/drop.svg";
import s from "../../../shared/assets/styles/WeatherWidget.module.css";
import sBack from "../../../shared/assets/styles/Carousel.module.css";
import { Props } from "../../types/typesWidget";
import { getUtcOffsetInHours } from "../../utils/getUtcOffsetInHours";

const WeatherWidgetClearNight: React.FC<Props> = ({ resp }) => {
    const utcOffset = getUtcOffsetInHours(resp.timeZoneOffset);
    const currentTime = useCurrentTime(utcOffset);

    return (
        <div className={`${s.widgetConteiner} ${sBack.clearBackgroundNight}`}>
            <div className={s.widgetConteiner__topBox}>
                <div className={s.widgetConteiner__infoConteiner}>
                    <div className={s.widgetConteiner__time}>
                        <p>{currentTime}</p>
                    </div>
                    <div className={s.widgetConteiner__infoPlace}>
                        <p>{resp.city.name}</p>
                    </div>
                </div>
                <div className={s.widgetConteiner__imageLogo}>
                    <img src={weatherLogo} alt="Clear Night" />
                </div>
            </div>
            <div className={s.widgetConteiner_bottomBox}>
                <p className={s.widgetConteiner__elemDayTitle}>
                    Общий прогноз на день {resp.city.nameP}
                </p>
                <div className={s.widgetConteiner__elemDayBox}>
                    <div>
                        <p className={s.widgetConteiner__elemDayTemperature}>
                            {resp.temperature}
                            <sup>o</sup>
                        </p>
                        <p className={s.widgetConteiner__elemDayWeather}>
                            {resp.description}
                        </p>
                    </div>
                    <div className={s.widgetConteiner__dayWeatherInfo}>
                        <div className={s.widgetConteiner__infoWindHumidity}>
                            <img src={windLogo} alt="Wind" />
                            <p>
                                {resp.windDirection}, {resp.windSpeed} м/с
                            </p>
                        </div>
                        <div className={s.widgetConteiner__infoWindHumidity}>
                            <img src={dropLogo} alt="Humidity" />
                            <p>{resp.humidity} мм</p>
                        </div>
                    </div>
                </div>
                <div className={s.widgetConteiner__sourceWeather}>
                    <p>
                        По данным <span>Gismeteo</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidgetClearNight;
