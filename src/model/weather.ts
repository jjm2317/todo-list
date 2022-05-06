import React from 'react';

export interface WeatherViewProps {
  datetime: number;
  iconSrc: string;
  minTemp: number;
  maxTemp: number;
}
