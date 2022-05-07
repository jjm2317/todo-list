import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

export default {
  title: 'todo/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

export const Overview: ComponentStory<typeof TodoItem> = () => (
  <Container>
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={new Date().toISOString()}
      onChange={() => {}}
    />
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={new Date(new Date().getTime() + 1000000000).toISOString()}
      onChange={() => {}}
    />
    <TodoItem
      id={1}
      checked={true}
      todo="todo"
      dueDate={new Date().toISOString()}
      onChange={() => {}}
    />
    <TodoItem
      id={1}
      checked={false}
      todo="todo"
      dueDate={undefined}
      onChange={() => {}}
    />
    <TodoItem
      id={1}
      checked={true}
      todo="todo"
      dueDate={undefined}
      onChange={() => {}}
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
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
