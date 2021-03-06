import Button from 'components/button/Button';
import DateInput from 'components/input/DateInput';
import TextArea from 'components/input/TextArea';
import TextInput from 'components/input/TextInput';
import Typography from 'components/typography/Typography';
import useLocalStorage from 'hooks/useLocalStorage';
import useTodoForm from 'hooks/useTodoForm';
import { TodoInfo } from 'model/todo';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface FormProps {
  todo: string;
  onTodoChange: ChangeEventHandler<HTMLInputElement>;
  content: string;
  onContentChange: ChangeEventHandler<HTMLTextAreaElement>;
  dueDate?: Date;
  onDueDateChange: ChangeEventHandler<HTMLInputElement>;
  onSaveButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Form = ({
  todo,
  onTodoChange,
  content,
  onContentChange,
  dueDate,
  onDueDateChange,
  onSaveButtonClick,
}: FormProps) => {
  return (
    <Wrapper>
      <Typography type="subtitle1" as="label" htmlFor="todo-title">
        제목(필수)
      </Typography>
      <TextInput
        id="todo-title"
        value={todo}
        onChange={onTodoChange}
        placeholder="제목을 입력해주세요"
      />
      <Typography type="subtitle1" as="label" htmlFor="todo-content">
        내용(필수)
      </Typography>
      <TextArea
        id="todo-content"
        value={content}
        onChange={onContentChange}
        placeholder="내용을 입력해주세요"
      />
      <Typography type="subtitle1" as="label" htmlFor="due-date">
        마감 일자(선택)
      </Typography>
      <DateInput
        id="due-date"
        onChange={onDueDateChange}
        placeholder="날짜를 입력해주세요(클릭)"
        selectedDate={dueDate}
      />
      <SaveButton
        disabled={todo === '' || content === ''}
        onClick={onSaveButtonClick}
      >
        저장하기
      </SaveButton>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled(Button)`
  margin-top: 15px;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.color.lightgrey};
    color: ${({ theme }) => theme.color.grey};
  }
`;

interface ModifyFormProps {
  todoId: number;
}
export const ModifyForm = ({ todoId }: ModifyFormProps) => {
  const [todoList, setTodoList] = useLocalStorage('todo', []);
  const curTodo = todoList.find((todo: TodoInfo) => todo?.id === todoId);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const {
    todoTitle,
    content,
    dueDate,
    handleTodoChange,
    handleContentChange,
    handleDueDateChange,
  } = useTodoForm(curTodo);

  const handleSaveButtonClick = useCallback(
    (e) => {
      e.preventDefault();
      setTodoList((todos: Array<TodoInfo>) =>
        todos.map((todo) =>
          todo.id === todoId
            ? { ...todo, todo: todoTitle, content, dueDate }
            : todo,
        ),
      );
      setIsClicked(true);
    },
    [todoId, setTodoList, todoTitle, content, dueDate],
  );

  useEffect(() => {
    if (isClicked) {
      navigate('/');
    }
  }, [isClicked, navigate]);

  return (
    <Form
      todo={todoTitle}
      onTodoChange={handleTodoChange}
      content={content}
      onContentChange={handleContentChange}
      dueDate={dueDate ? new Date(dueDate) : undefined}
      onDueDateChange={handleDueDateChange}
      onSaveButtonClick={handleSaveButtonClick}
    />
  );
};

export const CreateForm = () => {
  const [todoList, setTodoList] = useLocalStorage('todo', []);
  const todoId = useRef(
    todoList.length
      ? Math.max(...todoList.map((todo: TodoInfo) => todo.id)) + 1
      : 1,
  );
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const {
    todoTitle,
    content,
    dueDate,
    handleTodoChange,
    handleContentChange,
    handleDueDateChange,
  } = useTodoForm(undefined);

  const handleSaveButtonClick = useCallback(
    (e) => {
      e.preventDefault();
      setTodoList((todos: Array<TodoInfo>) =>
        todos.concat({
          id: todoId.current,
          todo: todoTitle,
          content,
          dueDate,
          checked: false,
        }),
      );
      setIsClicked(true);
    },
    [todoId, setTodoList, todoTitle, content, dueDate],
  );

  useEffect(() => {
    if (isClicked) {
      navigate('/');
    }
  }, [isClicked, navigate]);
  return (
    <Form
      todo={todoTitle}
      onTodoChange={handleTodoChange}
      content={content}
      onContentChange={handleContentChange}
      dueDate={dueDate ? new Date(dueDate) : undefined}
      onDueDateChange={handleDueDateChange}
      onSaveButtonClick={handleSaveButtonClick}
    />
  );
};
