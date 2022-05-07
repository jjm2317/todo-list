import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from 'components/typography/Typography';
import { WeatherInfo, WeatherViewProps } from 'model/weather';
import { useState } from 'react';
import styled from 'styled-components';
import WeatherList from './WeatherList';

const SEOUL_LAT = 37.53;
const SEOUL_LON = 127.02;
// const APP_KEY2 = '74f4897205eee715f905ac72f67d2d7f';
const APP_KEY = '6854e4c1298f3e243e87a1b9c2051b83';
// useless response fields
const excludes = ['current', 'minutely', 'hourly', 'alerts'];

// fetch daily weather infos
const fetchHistories = async (time: number) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${SEOUL_LAT}&lon=${SEOUL_LON}&dt=${time}&appid=${APP_KEY}&units=metric`,
  );
  return data;
};

const fetchForecasts = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${SEOUL_LAT}&lon=${SEOUL_LON}&exclude=${excludes.join(
      ',',
    )}&appid=${APP_KEY}&units=metric`,
  );
  return data;
};
const msToSec = (time: number) => Math.floor(time / 1000);

const processForecasts = (
  forecasts: { daily: Array<WeatherInfo> },
  cnt: number,
): Array<WeatherInfo> => forecasts.daily.filter((_, index) => index < cnt);

const processHistories = (
  histories: { current: WeatherInfo }[],
): Array<WeatherInfo> => histories.map((history) => history.current);

const convertToWeatherViewProps = (weatherInfos: Array<WeatherInfo>) =>
  weatherInfos.map(({ dt, weather, temp }) => ({
    datetime: dt * 1000,
    iconSrc: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    temp: typeof temp === 'number' ? temp : temp.day,
  }));

const date = new Date();
const dayIndex = (date.getDay() + 6) % 7;

const Weather = () => {
  const [weathers, setWeathers] =
    useState<Array<WeatherViewProps> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      setIsLoading(true);
      try {
        const previousDayList = Array.from(
          { length: Math.min(dayIndex, 5) },
          (_, index) => dayIndex - index,
        ).map((day) => new Date().setDate(date.getDate() - day));

        const [forecasts, ...histories] = await Promise.all([
          fetchForecasts(),
          ...previousDayList.map((time) => fetchHistories(msToSec(time))),
        ]);

        setWeathers(
          convertToWeatherViewProps([
            ...processHistories(histories),
            ...processForecasts(forecasts, 7 - dayIndex),
          ]),
        );
        setIsLoading(false);
      } catch (error) {}
    };
    fetchWeatherInfo();
  }, []);

  return (
    <Container>
      <Typography as="h2" type="h2" fontFamily="Noto Sans KR">
        이번주 날씨
      </Typography>
      <Wrapper>
        {isLoading || !weathers ? (
          <div>데이터를 받아오고 있어요.</div>
        ) : (
          <WeatherList
            weatherList={weathers}
            todayIndex={Math.min(dayIndex, 6)}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Weather;

export const WeatherView = () => {};

const Container = styled.section``;
const Wrapper = styled.div`
  height: 150px;
`;
