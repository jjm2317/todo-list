import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WeatherItem from './WeatherItem';
import WEATHER_ICON from 'mock/images/weather.png';

export default {
  title: 'weather/WeatherItem',
  component: WeatherItem,
} as ComponentMeta<typeof WeatherItem>;

const Template: ComponentStory<typeof WeatherItem> = (args) => (
  <WeatherItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  datetime: 1000,
  iconSrc: WEATHER_ICON,
  temp: 32,
};
