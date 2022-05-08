import { css } from 'styled-components';

export const inputStyles = css`
  ${({ theme }) => theme.typography.b1};
  font-family: Noto Sans KR;
  color: ${({ theme }) => theme.color.bg_dark};
  font-weight: 500;
  padding: 0 10px;
  border-radius: 3px;
  border: solid 2px ${({ theme }) => theme.color.lightgrey};

  &::placeholder {
    color: ${({ theme }) => theme.color.lightgrey};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.grey};
  }
`;
