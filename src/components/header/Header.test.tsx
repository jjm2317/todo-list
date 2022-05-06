import { render, screen } from 'test-utils';
import React from 'react';
import Header from './Header';

describe('Header 컴포넌트의 동작을 테스트합니다.', () => {
  it('대제목을 렌더링합니다.', () => {
    render(<Header title="This week" />);

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('This week');
  });

  it('부제목이 없으면 렌더링하지 않습니다.', () => {
    render(<Header title="This week" />);

    const subtitle = screen.queryByTestId('subtitle');
    expect(subtitle).toBe(null);
  });

  it('부제목을 렌더링합니다.', () => {
    render(<Header title="This week" subtitle="신나는 일주일을 계획합시다" />);

    const subtitle = screen.getByTestId('subtitle');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent('신나는 일주일을 계획합시다');
  });
});
