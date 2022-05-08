import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  bgColor?: string;
  textColor?: string;
}

const Button = styled.button<ButtonProps>`
  min-width: 100px;
  width: ${({ width }) => width || '70%'};
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${({ theme, textColor }) => theme.color[textColor || 'white']};
  background-color: ${({ theme, bgColor }) =>
    theme.color[bgColor || 'bg_dark']};
  ${({ theme }) => theme.typography.b1}
  font-weight: 500;
  font-family: Noto Sans KR;
  cursor: pointer;
`;

export default Button;
