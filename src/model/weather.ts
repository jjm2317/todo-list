import React from 'react';

type Temp = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

export interface WeatherInfo {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { day: number; night: number; eve: number; morn: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: Temp | number;
  uvi: number;
  weather: { description: string; icon: string; id: number; main: string }[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeatherViewProps {
  datetime: number;
  iconSrc: string;
  temp: number;
}
