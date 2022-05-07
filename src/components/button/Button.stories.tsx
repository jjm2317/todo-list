import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import styled from 'styled-components';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Overview: ComponentStory<typeof Button> = () => (
  <Container>
    <Button>추가하기</Button>
    <Button>저장하기</Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
