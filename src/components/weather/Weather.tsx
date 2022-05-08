import React from 'react';
import Typography from 'components/typography/Typography';
import styled from 'styled-components';
import WeatherList from './WeatherList';
import { useWeatherListQuery } from 'hooks/query/weather';

const date = new Date();
const dayIndex = (date.getDay() + 6) % 7;

const Weather = () => {
  const { data: weathers, isLoading, isError } = useWeatherListQuery();

  return (
    <Container>
      <Typography as="h2" type="h2">
        이번주 날씨
      </Typography>
      <Wrapper>
        {isLoading || !weathers ? (
          <LoadingWrapper>
            <Typography type="b1" textAlign="center">
              {!isError
                ? `데이터를 불러오는데 실패했습니다. \n새로고침하거나 잠시 후 다시 시도해주세요.`
                : 'Loading....'}
            </Typography>
          </LoadingWrapper>
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

const Container = styled.section`
  margin: 20px 0;
`;
const Wrapper = styled.div`
  height: 180px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  white-space: pre-wrap;
`;
