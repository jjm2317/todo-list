import React, { useEffect, useRef } from 'react';

import { WeatherViewProps } from 'model/weather';
import styled from 'styled-components';
import WeatherItem from './WeatherItem';

interface WeatherListProps {
  weatherList: Array<WeatherViewProps>;
  todayIndex: number;
}

export const ITEM_WIDTH = 100;

export const ITEM_GAP = 20;

const WeatherList = ({ weatherList, todayIndex }: WeatherListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.scrollTo(todayIndex * (ITEM_WIDTH + ITEM_GAP), 0);
  }, [todayIndex]);

  return (
    <Wrapper ref={containerRef} data-testid="scroll-wrapper">
      <List>
        {weatherList.map((weather, index) => (
          <WeatherItem
            key={index}
            {...weather}
            isToday={index === Math.min(todayIndex, 5)}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default WeatherList;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${ITEM_GAP}px;
  height: 170px;
  width: fit-content;
  box-sizing: content-box;
  padding-right: calc(100% - ${ITEM_WIDTH}px);
  margin: 0;
  padding-left: 0;
`;
