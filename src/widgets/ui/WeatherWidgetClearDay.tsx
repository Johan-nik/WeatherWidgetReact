import weatherLogo from "../../shared/assets/image/weather-logo/sunny.svg";
import windLogo from "../../shared/assets/image/weather-item/wind.svg";
import dropLogo from "../../shared/assets/image/weather-item/drop.svg";
import IndicatorListButton from "../../features/IndicatorListButton";
import "../../shared/assets/styles/WeatherWidget.css";
import "../../shared/assets/styles/WeatherWidgetBackground.css"

function WeatherWidgetClearDay() {
    return (
        <>
            <div className="widgetConteiner clearBackgroundDay">
                <div className="widgetConteiner__topBox">
                    <div className="widgetConteiner__infoConteiner">
                        <div className="widgetConteiner__time">
                            <p>14:00</p>
                        </div>
                        <div className="widgetConteiner__infoPlace">
                            <p>Москва</p>
                        </div>
                    </div>
                    <div className="widgetConteiner__imageLogo">
                        <img src={weatherLogo} alt="" />
                    </div>
                </div>
                <div className="widgetConteiner_bottomBox">
                    <p className="widgetConteiner__elemDayTitle">
                        Общий прогноз на день в Москве
                    </p>
                    <div className="widgetConteiner__elemDayBox">
                        <div>
                            <p className="widgetConteiner__elemDayTemperature">
                                18<sup>o</sup>
                            </p>
                            <p className="widgetConteiner__elemDayWeather">
                                ясно
                            </p>
                        </div>
                        <div className="widgetConteiner__dayWeatherInfo">
                            <div className="widgetConteiner__infoWindHumidity">
                                <img src={windLogo} alt="" />
                                <p>ЮЗ, 3 м/с</p>
                            </div>
                            <div className="widgetConteiner__infoWindHumidity">
                                <img src={dropLogo} alt="" />
                                <p>13 мм</p>
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
}

export default WeatherWidgetClearDay;
