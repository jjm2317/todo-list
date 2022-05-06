import { css } from 'styled-components';

const color = Object.freeze({
  black: '#252A31',
});

const typography = Object.freeze({
  h1: css`
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
  `,
  h2: css`
    font-size: 30px;
    font-weight: 700;
    line-height: 45px;
  `,
  subtitle1: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
  `,
  b1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  b2: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
  `,
  caption: css`
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
  `,
});

export const theme = {
  color,
  typography,
};
