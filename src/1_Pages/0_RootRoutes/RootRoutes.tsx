import * as RD from 'react-router-dom';
import { Home } from '../Home/Home';
import { OutletHeader } from './OutletHeader';

export const RootRoutes = () => {
  return (
    <RD.BrowserRouter>
      <RD.Routes>
        <RD.Route path="/" element={<OutletHeader />}>
          <RD.Route index element={<Home />} />
          <RD.Route
            path="/pastor"
            element={<div children="pastor" />}
          />
          <RD.Route
            path="/introduce"
            element={<div children="introduce" />}
          />
          <RD.Route
            path="/registration"
            element={<div children="registration" />}
          />
        </RD.Route>
      </RD.Routes>
    </RD.BrowserRouter>
  );
};
