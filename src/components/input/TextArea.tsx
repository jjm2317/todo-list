import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { inputStyles } from './styles';

interface TextAreaProps {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

const TextArea = ({ value, onChange, placeholder }: TextAreaProps) => (
  <Textarea value={value} placeholder={placeholder} onChange={onChange} />
);

export default TextArea;

const Textarea = styled.textarea`
  ${inputStyles}
  resize:none;
  width: 80%;
  height: 150px;
  padding-top: 10px;
`;
