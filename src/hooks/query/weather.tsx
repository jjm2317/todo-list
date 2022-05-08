import { useQuery } from 'react-query';

import { QueryKeys } from 'queryKeys';
import axios from 'axios';
import { WeatherInfo } from 'model/weather';

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

// fetch previous weather infos
const fetchForecasts = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${SEOUL_LAT}&lon=${SEOUL_LON}&exclude=${excludes.join(
      ',',
    )}&appid=${APP_KEY}&units=metric`,
  );
  return data;
};

const msToSec = (time: number) => Math.floor(time / 1000);

const fetchWeatherInfo = async (curDate: Date, dayIndex: number) => {
  const previousDayList = Array.from(
    // 5 previouse days fetching is available
    { length: Math.min(dayIndex, 5) },
    (_, index) => Math.min(dayIndex, 5) - index,
  ).map((day) => new Date().setDate(curDate.getDate() - day));
  const results = await Promise.all([
    fetchForecasts(),
    ...previousDayList.map((time) => fetchHistories(msToSec(time))),
  ]);

  //[forecasts, ...histories]
  return results;
};

const selectWeatherInfosFromForecasts = (
  forecasts: { daily: Array<WeatherInfo> },
  cnt: number,
): Array<WeatherInfo> => forecasts.daily.filter((_, index) => index < cnt);

const selectWeatherInfosFromHistories = (
  histories: { current: WeatherInfo }[],
): Array<WeatherInfo> => histories.map((history) => history.current);

const selectWeatherViewPropsFromInfos = (weatherInfos: Array<WeatherInfo>) =>
  weatherInfos.map(({ dt, weather, temp }) => ({
    datetime: dt * 1000,
    iconSrc: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    temp: typeof temp === 'number' ? temp : temp.day,
  }));

export const useWeatherListQuery = () => {
  const date = new Date();

  const dayIndex = (date.getDay() + 6) % 7;

  return useQuery(
    QueryKeys.weather.list(),
    () => fetchWeatherInfo(date, dayIndex),
    {
      select: ([forecasts, ...histories]) => {
        return selectWeatherViewPropsFromInfos([
          ...selectWeatherInfosFromHistories(histories),
          ...selectWeatherInfosFromForecasts(forecasts, 7 - dayIndex),
        ]);
      },
      // enable caching for 10hours
      staleTime: 36000000,
      cacheTime: 36000000,
    },
  );
};
