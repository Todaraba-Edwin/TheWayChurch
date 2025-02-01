import { css, DefaultTheme } from 'styled-components';

const colors = {
  red: css`
    color: red;
  `
};

const fonts = {
  Pre_HeaderLink: css`
    font-family: 'Pretendard Variable';
    font-weight: 300;
    font-size: 12px;
    color: #000;
  `,
  Pre_HeaderMotto: css`
    font-family: 'Pretendard Variable';
    font-weight: 300;
    font-size: 10px;
  `,
  Pre_HeaderPaths: css`
    font-family: 'Pretendard Variable';
    font-weight: 400;
    font-size: 13px;
    color: #000;
  `,
  Pre_Footer: css`
    font-family: 'Philosopher', serif;
    font-weight: 400;
    font-size: 10px;
  `,
  Pre_400: css`
    font-family: 'Pretendard Variable';
    font-weight: 400;
  `,
  Philosopher_H1_Title: css`
    font-family: 'Philosopher', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
  `
};

const displayCSS = {
  FlexRow: {
    default: css`
      display: flex;
    `,
    centerCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    betweenCenter: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  },
  FlexColum: {
    default: css`
      display: flex;
      flex-direction: column;
    `,
    startCenter: css`
      display: flex;
      flex-direction: column;
      align-self: start;
    `,
    centerCenter: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  }
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    displayCSS: typeof displayCSS;
  }
}

export const theme: DefaultTheme = {
  colors,
  fonts,
  displayCSS
};
