import { ChangeEventHandler } from 'react';
import Typography from 'components/typography/Typography';
import styled, { css } from 'styled-components';
import CHECK from 'images/icon-check.svg';
import { a11yHidden } from 'styles/a11y';

interface TodoItemProps {
  id: number;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  dueDate?: string;
  todo: string;
}

const dateFormat = (date: Date) => {
  const month = date.getMonth() + 1;
  const dateNum = date.getDate();
  const tenFormat = (num: number): string => (num >= 10 ? '' : '0') + num;

  return `${date.getFullYear()}.${tenFormat(month)}.${tenFormat(dateNum)}`;
};

const isExpired = (dueDate: Date) => {
  const date = new Date();
  // shoud compare daily (yyyy.mm.dd).
  return dateFormat(date) >= dateFormat(dueDate);
};

const TodoItem = ({ id, checked, onChange, dueDate, todo }: TodoItemProps) => (
  <Wrapper>
    <Input
      name={`${id}`}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <Label htmlFor={`${id}`} />
    <Todo
      as="label"
      type="b1"
      data-testid="todo-wrapper"
      color={
        dueDate && !checked && isExpired(new Date(dueDate)) ? 'red' : 'black'
      }
      fontFamily="Noto Sans KR"
      fontWeight={500}
      htmlFor={`${id}`}
    >
      <TodoText hasStrike={checked} data-testid="todo">
        {todo}
      </TodoText>
      {'\n'}
      {dueDate && (
        <DueDate data-testid="due-date">
          due date {dateFormat(new Date(dueDate))}
        </DueDate>
      )}
    </Todo>
  </Wrapper>
);

export default TodoItem;

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: inline-block;
  height: 30px;
  font-family: Noto Sans KR;
  width: 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  cursor: pointer;
`;

const Input = styled.input`
  ${a11yHidden}
  &:checked + label {
    background: ${({ theme }) => theme.color.blue};
    background-image: url(${CHECK});
    background-size: 16.5px 13px;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
  }

  &:checked + label + label {
    color: ${({ theme }) => theme.color.grey};
  }
`;

const Todo = styled(Typography)`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  cursor: pointer;
  margin-left: 15px;
  white-space: pre-wrap;
`;

interface TodoTextProps {
  hasStrike: boolean;
}
const TodoText = styled.span<TodoTextProps>`
  ${({ hasStrike }) =>
    hasStrike &&
    css`
      text-decoration: line-through;
    `}
`;

const DueDate = styled.strong`
  ${({ theme }) => theme.typography.caption}
  font-family: Poppins;
`;