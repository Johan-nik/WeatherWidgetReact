import React from "react";
import { getWeatherForCities } from "../shared/config/getWeatherForCities";
import WeatherSwitch from "../features/WeatherSwich";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../shared/assets/styles/Carousel.css";

interface CityData {
    UTC: string;
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

interface State {
    cityData: CityData[] | null;
    loading: boolean;
    error: string | null;
}

export default class WeatherCarousel extends React.Component<{}, State> {
    state: State = {
        cityData: null,
        loading: true,
        error: null,
    };

    async componentDidMount() {
        try {
            const weatherData = await getWeatherForCities();
            if (weatherData.data.length === 0) {
                throw new Error("No weather data available");
            }
            this.setState({ cityData: weatherData.data, loading: false });
        } catch (error) {
            console.error("Error fetching weather data:", error);
            this.setState({
                loading: false,
                error: "Failed to load weather data",
            });
        }
    }

    render() {
        const { cityData, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!cityData) {
            return <div>No data available</div>;
        }

        return (
            <CarouselProvider
                naturalSlideWidth={325}
                naturalSlideHeight={285}
                totalSlides={cityData.length}
                infinite={true}
            >
                <Slider>
                    {cityData.map((city, index) => {
                        // Получение названия виджета
                        const widgetName = WeatherSwitch(city.weatherCode);

                        // Динамическое подключение компонента
                        const WeatherWidget = React.lazy(() =>
                            import(`./ui/${widgetName}`)
                        );

                        return (
                            <Slide key={index} index={index}>
                                <React.Suspense fallback={<div>Loading widget...</div>}>
                                    <WeatherWidget resp={city} />
                                </React.Suspense>
                            </Slide>
                        );
                    })}
                </Slider>
                <ButtonBack className="carouselButtonScroll buttonLeft">
                    <div className="widgetConteiner__buttonScroll">
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
                <ButtonNext className="carouselButtonScroll buttonRigth">
                    <div className="widgetConteiner__buttonScroll">
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
                <div className="caruselDotConteiner">
                    {cityData.map((_, index) => (
                        <Dot key={index} className="caruselDot" slide={index} />
                    ))}
                </div>
            </CarouselProvider>
        );
    }
}