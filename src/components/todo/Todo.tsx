import Button from 'components/button/Button';
import Typography from 'components/typography/Typography';
import useLocalStorage from 'hooks/useLocalStorage';
import { TodoInfo } from 'model/todo';
import { useCallback } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todoList, setTodoList] = useLocalStorage('todo', []);

  const handleChange = useCallback(
    (id: number) => () => {
      setTodoList((todoList: Array<TodoInfo>) =>
        todoList.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [setTodoList],
  );

  const handleDeletButtonClick = useCallback(
    (id: number) => () => {
      setTodoList((todoList: Array<TodoInfo>) =>
        todoList.filter((todo) => todo.id !== id),
      );
    },
    [setTodoList],
  );

  return (
    <Wrapper>
      <Typography as="h2" type="h2">
        이번주 To-Do
      </Typography>
      <FlexBox>
        <Button>추가하기</Button>
        <List>
          {todoList.map((todo: TodoInfo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onChange={handleChange(todo.id)}
              onDeleteButtonClick={handleDeletButtonClick(todo.id)}
            />
          ))}
        </List>
      </FlexBox>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.section``;

const List = styled.ul`
  width: 80%;
  margin-top: 30px;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
