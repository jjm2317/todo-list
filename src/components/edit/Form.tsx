import Button from 'components/button/Button';
import DateInput from 'components/input/DateInput';
import TextArea from 'components/input/TextArea';
import TextInput from 'components/input/TextInput';
import Typography from 'components/typography/Typography';
import useLocalStorage from 'hooks/useLocalStorage';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface FormProps {
  todo: string;
  onTodoChange: ChangeEventHandler<HTMLInputElement>;
  content: string;
  onContentChange: ChangeEventHandler<HTMLTextAreaElement>;
  dueDate: string;
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
        제목
      </Typography>
      <TextInput
        id="todo-title"
        value={todo}
        onChange={onTodoChange}
        placeholder="제목을 입력해주세요"
      />
      <Typography type="subtitle1" as="label" htmlFor="todo-content">
        내용
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
        onChange={() => {}}
        placeholder="날짜를 입력해주세요(클릭)"
      />
      <SaveButton onClick={onSaveButtonClick}>저장하기</SaveButton>
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
`;

export const ModifyForm = () => {};
