import { useState, useEffect } from "react";
import { getWeatherForCities } from "../../shared/config/getWeatherForCities";
import { WeatherState } from "../types/typesWidget";

export const useWeatherData = (): WeatherState => {
    const [state, setState] = useState<WeatherState>({
        cityData: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const weatherData = await getWeatherForCities();
                if (weatherData.data.length === 0) {
                    throw new Error("No weather data available");
                }
                setState({ cityData: weatherData.data, loading: false, error: null });
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setState({ cityData: null, loading: false, error: "Failed to load weather data" });
            }
        };

        fetchData();
    }, []);

    return state;
};