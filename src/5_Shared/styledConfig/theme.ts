import { css, DefaultTheme } from 'styled-components';

const colors = {};
const fonts = {
  Pre_400: css`
    font-family: 'Pretendard Variable';
    font-weight: 400;
    color: blue;
  `
};

export type ThemeTypes = {
  colors: typeof colors;
  fonts: typeof fonts;
};

export const theme: DefaultTheme = {
  colors,
  fonts
};
