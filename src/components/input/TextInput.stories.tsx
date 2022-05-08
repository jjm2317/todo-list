import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';
import styled from 'styled-components';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

Default.args = {
  value: '',
  placeholder: '제목을 입력해주세요',
  onChange: () => {},
};
