import React from 'react';
import { render, screen } from 'test-utils';
import { WeatherViewProps } from 'model/weather';
import WeatherItem from './WeatherItem';
import WEATHER_ICON from 'mock/images/weather.png';

const weatherData: WeatherViewProps = {
  datetime: 1651892400000,
  iconSrc: WEATHER_ICON,
  minTemp: 20,
  maxTemp: 35,
};

describe('날씨 섹션의 동작을 테스트합니다.', () => {
  describe('WeatherItem 컴포넌트의 동작을 테스트합니다.', () => {
    it('날짜정보를 렌더링합니다.', () => {
      render(<WeatherItem {...weatherData} />);
      const datetime = screen.getByTestId('datetime');
      expect(datetime).toHaveTextContent('5/7(토)');
    });

    it('날씨 icon을 렌더링합니다.', () => {
      render(<WeatherItem {...weatherData} />);
      const icon = screen.getByAltText('weather status');
      expect(icon).toBeInTheDocument();
    });

    it('기온 정보를 렌더링합니다.', () => {
      render(<WeatherItem {...weatherData} />);
      const temperature = screen.getByTestId('temperature');
      expect(temperature).toHaveTextContent('35도/20도');
    });
  });
});
