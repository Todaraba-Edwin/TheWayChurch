import * as RD from 'react-router-dom';
import styled from 'styled-components';

export const RootRoutes = () => {
  return (
    <RD.BrowserRouter>
      <RD.Routes>
        <RD.Route
          path="/"
          element={
            <Styled>
              New Project, 새로운 프로젝트
            </Styled>
          }
        />
      </RD.Routes>
    </RD.BrowserRouter>
  );
};

const Styled = styled.div`
  ${({ theme: { fonts } }) => fonts.Pre_400}
`;
