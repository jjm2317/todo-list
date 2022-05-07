import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Overview: ComponentStory<typeof Typography> = () => (
  <>
    <Typography type="h1" fontFamily="Noto Sans KR">
      대제목
    </Typography>
    <Typography type="h2">중제목</Typography>
    <Typography type="subtitle1">부제목</Typography>
    <Typography type="b1">본문1</Typography>
    <Typography type="b2">본문2</Typography>
    <Typography type="caption">캡션</Typography>
  </>
);
