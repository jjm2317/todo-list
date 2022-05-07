import React from 'react';
import { WeatherViewProps } from 'model/weather';
import styled from 'styled-components';
import Typography from 'components/typography/Typography';
import { ITEM_WIDTH } from './WeatherList';

const weekDays: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];

const timeFormat = (datetime: number): string => {
  const date = new Date(datetime);
  return `${date.getMonth() + 1}/${date.getDate()}(${weekDays[date.getDay()]})`;
};

const WeatherItem = ({
  datetime,
  iconSrc,
  minTemp,
  maxTemp,
}: WeatherViewProps) => {
  return (
    <Wrapper>
      <Typography
        as="time"
        type="b2"
        fontFamily="Noto Sans KR"
        data-testid="datetime"
      >
        {timeFormat(datetime)}
      </Typography>
      <Icon src={iconSrc} alt="weather status" width="90%" height="auto" />
      <Typography as="p" type="b2" data-testid="temperature">
        <b>{maxTemp}도</b>
        <span>/</span>
        <b>{minTemp}도</b>
      </Typography>
    </Wrapper>
  );
};

export default WeatherItem;

const Wrapper = styled.li`
  box-sizing: border-box;
  width: ${ITEM_WIDTH}px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const Icon = styled.img`
  margin-top: -10px;
`;
