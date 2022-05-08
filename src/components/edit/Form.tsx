import Button from 'components/button/Button';
import TextArea from 'components/input/TextArea';
import TextInput from 'components/input/TextInput';
import Typography from 'components/typography/Typography';
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
      <Typography type="subtitle1" as="label">
        제목
      </Typography>
      <TextInput
        value={todo}
        onChange={onTodoChange}
        placeholder="제목을 입력해주세요"
      />
      <Typography type="subtitle1" as="label">
        내용
      </Typography>
      <TextArea
        value={content}
        onChange={onContentChange}
        placeholder="내용을 입력해주세요"
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
