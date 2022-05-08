import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';
import styled from 'styled-components';

export default {
  title: 'atoms/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

export const Default: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

Default.args = {
  value: '',
  placeholder: '내용을 입력해주세요',
  onChange: () => {},
};
