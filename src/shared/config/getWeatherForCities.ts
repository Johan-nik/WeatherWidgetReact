import { httpClient } from "./http-client";

type ErrorMessage = {
    label: string;
    title: string;
} | null;

export interface GetWeatherForCitiesRequest {
    status: string;
    data: {
        UTC: string; //часовой пояс
        city: {
            name: string; //например:Москва
            nameP: string; //например: в Москве
        };
        temperature: number; //температура
        description: string; //описание погоды
        weatherCode: string; //код описания погоды
        windDirection: string; //направление ветра
        windSpeed: number; //скорость ветра
        humidity: number; //влажность
    }[];
    errors: ErrorMessage[];
}

export const getWeatherForCities = async () => {
    const response = await httpClient.get<GetWeatherForCitiesRequest>(
        "/api/getWeather.json"
    );
    return response.data;
};
