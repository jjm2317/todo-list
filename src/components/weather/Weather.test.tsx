import React from 'react';
import { render, screen, within, cleanup } from 'test-utils';
import { WeatherViewProps } from 'model/weather';
import WeatherItem from './WeatherItem';
import WEATHER_ICON from 'mock/images/weather.png';
import WeatherList, { ITEM_GAP, ITEM_WIDTH } from './WeatherList';

const weatherData: WeatherViewProps = {
  datetime: 1651892400000,
  iconSrc: WEATHER_ICON,
  temp: 35,
};

Element.prototype.scrollTo = jest.fn();

const mockScrollTo = Element.prototype.scrollTo;

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
      expect(temperature).toHaveTextContent('35도');
    });
  });

  describe('WeatherList 컴포넌트의 동작을 테스트합니다.', () => {
    let weatherList: Array<WeatherViewProps>;

    beforeEach(() => {
      weatherList = Array.from({ length: 7 }, () => weatherData);
    });

    it('전달된 날씨정보배열의 요소 개수만큼 자식컴포넌트를 렌더링합니다.', () => {
      render(<WeatherList todayIndex={0} weatherList={weatherList} />);
      const list = screen.getByRole('list');

      expect(list).toBeInTheDocument();

      const { getAllByRole } = within(list);
      const listItem = getAllByRole('listitem');

      expect(listItem.length).toBe(weatherList.length);
    });

    it('왼쪽 시작 위치에는 오늘 날짜의 날씨정보가 렌더링됩니다.', () => {
      render(<WeatherList todayIndex={0} weatherList={weatherList} />);
      const list = screen.getByRole('list');
      expect(list.scrollLeft).toBe(0);

      expect(mockScrollTo).toHaveBeenLastCalledWith(0, 0);

      cleanup();

      render(<WeatherList todayIndex={1} weatherList={weatherList} />);

      expect(mockScrollTo).toHaveBeenLastCalledWith(
        (ITEM_WIDTH + ITEM_GAP) * 1,
        0,
      );
      cleanup();

      render(<WeatherList todayIndex={3} weatherList={weatherList} />);

      expect(mockScrollTo).toHaveBeenLastCalledWith(
        (ITEM_WIDTH + ITEM_GAP) * 3,
        0,
      );
    });

    it('좌우로 스크롤 할 수 있습니다.', () => {
      render(<WeatherList todayIndex={3} weatherList={weatherList} />);
      const wrapper = screen.getByTestId('scroll-wrapper');
      expect(wrapper).toHaveStyle({ overflowX: 'scroll' });
    });
  });
});
