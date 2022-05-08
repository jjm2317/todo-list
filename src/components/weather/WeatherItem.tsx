import React from 'react';
import { WeatherViewProps } from 'model/weather';
import styled, { css } from 'styled-components';
import Typography from 'components/typography/Typography';

const weekDays: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];

const timeFormat = (datetime: number): string => {
  const date = new Date(datetime);
  return `${date.getMonth() + 1}/${date.getDate()}(${weekDays[date.getDay()]})`;
};

interface WeatherItemProps extends WeatherViewProps {
  isToday?: boolean;
}

const WeatherItem = ({
  datetime,
  iconSrc,
  temp,
  isToday,
}: WeatherItemProps) => (
  <Wrapper isToday={isToday}>
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
      <b>{Math.floor(temp)}도</b>
    </Typography>
  </Wrapper>
);

export default WeatherItem;

interface WrapperProps {
  isToday?: boolean;
}

const Wrapper = styled.li<WrapperProps>`
  box-sizing: border-box;
  width: 100px;
  padding: 25px 15px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  ${({ isToday }) =>
    isToday
      ? css`
          border: 2px solid ${({ theme }) => theme.color.black};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.color.lightgrey};
        `}
`;

const Icon = styled.img`
  margin-top: -10px;
`;
