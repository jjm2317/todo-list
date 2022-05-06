import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: 'THIS WEEK',
  subtitle: '신나는 일주일을 계획합시다!',
};

export const Edit = Template.bind({});
Edit.args = {
  title: 'To-Do',
};
