import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Calender from './Calender';

export default {
  title: 'edit/Calender',
  component: Calender,
} as ComponentMeta<typeof Calender>;

export const Default: ComponentStory<typeof Calender> = (args) => (
  <Calender {...args} />
);

Default.args = {
  onConfirm: () => {},
  onCancle: () => {},
  selectedDate: new Date(),
};
