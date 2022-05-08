import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from './Form';
import styled from 'styled-components';

export default {
  title: 'edit/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = (args) => (
  <Form {...args} />
);

Default.args = {
  todo: '',
  onTodoChange: () => {},
  content: '',
  onContentChange: () => {},
  dueDate: '',
  onDueDateChange: () => {},
  onSaveButtonClick: () => {},
};
