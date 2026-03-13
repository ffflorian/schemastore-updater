/* eslint-disable */

/**
 * API responses from the OpenWeather Current Weather Data API from https://openweathermap.org/current
 */
export interface OpenWeatherCurrentWeatherDataAPI {
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
