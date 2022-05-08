import React from 'react';
import Typography from 'components/typography/Typography';
import styled from 'styled-components';
import WeatherList from './WeatherList';
import { useWeatherListQuery } from 'hooks/query/weather';

const date = new Date();
const dayIndex = (date.getDay() + 6) % 7;

const Weather = () => {
  const { data: weathers, isLoading } = useWeatherListQuery();

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
