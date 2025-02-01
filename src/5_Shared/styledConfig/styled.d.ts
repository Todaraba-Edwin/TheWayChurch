import 'styled-components';
import * as ThemeTypes from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
