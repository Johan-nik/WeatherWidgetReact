import React from "react";
import useCurrentTime from "../../../widgets/weatherWidget/model/useCurrentTime";
import weatherLogo from "../../../shared/assets/image/weather-logo/snow.svg";
import windLogo from "../../../shared/assets/image/weather-item/wind.svg";
import dropLogo from "../../../shared/assets/image/weather-item/drop.svg";
import s from "./WeatherWidget.module.css";
import sBack from "../../../widgets/weatherWidget/ui/Carousel.module.css";
import { Props } from "../../../shared/types/typesWidget";
import { utcOffsetInHours } from "../../../widgets/weatherWidget/model/utils/utcOffsetInHours";

const WeatherWidgetSnowNight: React.FC<Props> = ({ resp }) => {
    const utcOffset = utcOffsetInHours(resp.timeZoneOffset);
    const currentTime = useCurrentTime(utcOffset);

    return (
        <div className={`${s.widgetConteiner} ${sBack.snowBackgroundNight}`}>
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
                    <img src={weatherLogo} alt="Snow at night" />
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

export default WeatherWidgetSnowNight;
