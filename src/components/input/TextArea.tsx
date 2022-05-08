import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { inputStyles } from './styles';

interface TextAreaProps {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

const TextArea = ({ id, value, onChange, placeholder }: TextAreaProps) => (
  <Textarea
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextArea;

const Textarea = styled.textarea`
  ${inputStyles}
  resize:none;
  width: 80%;
  height: 150px;
  padding-top: 10px;
`;
