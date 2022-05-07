import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WeatherList from './WeatherList';
import WEATHER_ICON from 'mock/images/weather.png';

export default {
  title: 'weather/WeatherList',
  component: WeatherList,
} as ComponentMeta<typeof WeatherList>;

const Template: ComponentStory<typeof WeatherList> = (args) => (
  <WeatherList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  weatherList: Array.from({ length: 7 }, () => ({
    datetime: 1000,
    iconSrc: WEATHER_ICON,
    temp: 32,
  })),
  todayIndex: 0,
};
