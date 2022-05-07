import React from 'react';
import { render, screen, cleanup } from 'test-utils';
import TodoItem from './TodoItem';

describe('Todo 섹션의 동작을 테스트합니다.', () => {
  describe('TodoItem 컴포넌트의 동작을 테스트합니다.', () => {
    it('체크박스와 투두 내용을 렌더링합니다.', () => {
      render(
        <TodoItem
          id={1}
          checked={false}
          todo="todo"
          dueDate={undefined}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      const todo = screen.getByTestId('todo');
      expect(todo).toBeInTheDocument();
    });

    it('due date 값이 있는 경우 yyyy.mm.dd 형태로 렌더링합니다.', () => {
      render(
        <TodoItem
          id={1}
          checked={false}
          todo="todo"
          dueDate={new Date().toISOString()}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );
      const dueDate = screen.getByTestId('due-date');
      expect(dueDate).toBeInTheDocument();

      const yyyyMmDd = /\d{4}.(0[1-9]|1[0-2]).(0[1-9]|[12][0-9]|3[01])$/;
      expect(dueDate).toHaveTextContent(yyyyMmDd);
    });

    it('체크된 경우에는 투두 내용이 strike 처리됩니다.', () => {
      render(
        <TodoItem
          id={1}
          checked
          todo="todo"
          dueDate={new Date().toISOString()}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );

      const todo = screen.getByTestId('todo');
      expect(todo).toHaveStyle({ textDecoration: 'line-through' });
    });
    it('완료되지 않은 투두 항목의 due date이 오늘이거나 그 이전인 경우 red 를 폰트컬러로 갖습니다.', () => {
      render(
        <TodoItem
          id={1}
          checked={false}
          todo="todo"
          dueDate={new Date().toISOString()}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );
      const todo = screen.getByTestId('todo-wrapper');
      expect(todo).toHaveStyle({ color: '#FF0000' });

      cleanup();

      const previousDay = new Date().setDate(new Date().getDate() - 2);
      render(
        <TodoItem
          id={1}
          checked={false}
          todo="todo"
          dueDate={new Date(previousDay).toISOString()}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );

      const previousTodo = screen.getByTestId('todo-wrapper');
      expect(previousTodo).toHaveStyle({ color: '#FF0000' });
    });

    it('x 버튼을 렌더링합니다.', () => {
      render(
        <TodoItem
          id={1}
          checked={false}
          todo="todo"
          dueDate={new Date().toISOString()}
          onChange={() => {}}
          onDeleteButtonClick={() => {}}
        />,
      );
      const deleteButton = screen.getByRole('button', { name: 'X' });

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
