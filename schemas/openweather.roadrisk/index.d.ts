/* eslint-disable */

/**
 * API responses from the OpenWeather Road Risk API from https://openweathermap.org/api/road-risk
 */
export type OpenWeatherRoadRiskAPI = {
  dt: number;
  coord: number[];
  weather: {
    temp?: number;
    wind_speed?: number;
    wind_deg?: number;
    precipitation_intensity?: number;
    dew_point?: number;
  };
  alerts: {
    sender_name: string;
    event: string;
    event_level: number;
  }[];
}[];
