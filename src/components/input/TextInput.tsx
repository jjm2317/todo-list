import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { inputStyles } from './styles';

interface TextInputProps {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const TextInput = ({ id, value, onChange, placeholder }: TextInputProps) => (
  <Input
    id={id}
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextInput;

const Input = styled.input`
  ${inputStyles}
  width: 80%;
  height: 50px;
`;
