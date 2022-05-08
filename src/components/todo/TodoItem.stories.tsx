import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

export default {
  title: 'todo/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const eventHandlers = {
  onChange: () => {},
  onDeleteButtonClick: () => {},
  onTodoClick: () => {},
};

export const Overview: ComponentStory<typeof TodoItem> = () => (
  <Container>
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={new Date().toISOString()}
      {...eventHandlers}
    />
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={new Date(new Date().getTime() + 1000000000).toISOString()}
      {...eventHandlers}
    />
    <TodoItem
      id={1}
      checked={true}
      todo="todo"
      dueDate={new Date().toISOString()}
      {...eventHandlers}
    />
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={undefined}
      {...eventHandlers}
    />
    <TodoItem
      id={1}
      checked={true}
      todo="todo"
      dueDate={undefined}
      {...eventHandlers}
    />
  </Container>
);

export const Default: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

Default.args = {
  id: 1,
  todo: 'todo',
  onChange: () => {},
  checked: false,
  dueDate: new Date().toISOString(),
  onDeleteButtonClick: () => {},
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
