import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import { inputStyles } from './styles';

interface TextInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => (
  <Input
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
