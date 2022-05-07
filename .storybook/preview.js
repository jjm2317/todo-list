import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme.ts';
import '../src/index.css';
import GlobalStyles from 'styles/GlobalStyles.ts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
