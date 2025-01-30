export interface CityData {
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

export type Props = {
    resp: CityData;
};

export interface State {
    cityData: CityData[] | null;
    loading: boolean;
    error: string | null;
}

export interface WeatherData {
    data: CityData[];
}

export interface WeatherState {
    cityData: CityData[] | null;
    loading: boolean;
    error: string | null;
}