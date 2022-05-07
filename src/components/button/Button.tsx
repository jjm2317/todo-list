import styled from 'styled-components';

interface ButtonProps {}

const Button = styled.button<ButtonProps>`
  min-width: 200px;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.bg_dark};
  ${({ theme }) => theme.typography.b1}
  font-weight: 500;
  font-family: Noto Sans KR;
`;

export default Button;
