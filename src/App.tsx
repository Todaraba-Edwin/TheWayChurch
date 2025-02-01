import * as P from './1_Pages';
import * as W from './2_Widgets';
import * as S from './5_Shared';
import * as SC from 'styled-components';

export default function App() {
  return (
    <W.QueryClientTemplate>
      <SC.ThemeProvider theme={S.theme}>
        <W.GlobalStylesTemplate />
        <P.RootRoutes />
      </SC.ThemeProvider>
    </W.QueryClientTemplate>
  );
}
