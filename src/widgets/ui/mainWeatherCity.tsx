import React, { Suspense } from "react";
import { useWeatherData } from "../../shared/lib/useWeatherData";
import { getWeatherWidget } from "../../shared/lib/utils/getWeatherWidget";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import s from "./Carousel.module.css";

const WeatherCarousel: React.FC = () => {
    const { cityData, loading, error } = useWeatherData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!cityData) return <div>No data available</div>;

    return (
        <CarouselProvider
            naturalSlideWidth={325}
            naturalSlideHeight={285}
            totalSlides={cityData.length}
            infinite
            className={s.carousel}
        >
            <Slider>
                {cityData.map((city, index) => {
                    const WeatherWidget = getWeatherWidget(
                        city.weatherCode,
                        city.timeZoneOffset
                    );

                    return (
                        <Slide key={index} index={index}>
                            <Suspense fallback={<div>Loading widget...</div>}>
                                <WeatherWidget resp={city} />
                            </Suspense>
                        </Slide>
                    );
                })}
            </Slider>
            <ButtonBack className={`${s.carouselButtonScroll} ${s.buttonLeft}`}>
                <div className={s.widgetConteiner__buttonScroll}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="white"
                            fillOpacity="0.4"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.29285 12L13.2677 8.02515L13.9748 8.73225L10.7071 12L13.9748 15.2678L13.2677 15.9749L9.29285 12Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </ButtonBack>
            <ButtonNext
                className={`${s.carouselButtonScroll} ${s.buttonRigth}`}
            >
                <div className={s.widgetConteiner__buttonScroll}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="white"
                            fillOpacity="0.4"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.9748 12L11 15.9749L10.2928 15.2678L13.5606 12L10.2928 8.73225L11 8.02515L14.9748 12Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </ButtonNext>
            <div className={s.caruselDotConteiner}>
                {cityData.map((_, index) => (
                    <Dot key={index} className={s.caruselDot} slide={index} />
                ))}
            </div>
        </CarouselProvider>
    );
};
export default WeatherCarousel;
