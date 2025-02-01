'use client';

import { OutletHeaderWidg } from '@/2_Widgets';
import * as RD from 'react-router-dom';
import styled from 'styled-components';

export const OutletHeader = () => {
  return (
    <RootLayout>
      <OutletHeaderWidg />
      <RootBody>
        <RD.Outlet />
      </RootBody>
      <RootFeater>
        <div className="logo" /> THE WAY CHURCH
      </RootFeater>
    </RootLayout>
  );
};

const RootLayout = styled.main`
  max-width: 600px;
  margin: 0 auto;
  height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const RootBody = styled.div`
  overflow: auto;
`;

const RootFeater = styled.footer`
  height: 30px;
  background-image: url('./src/assets/theWayHeader.jpg');
  background-position: center;
  background-size: cover;
  ${({ theme: { displayCSS } }) =>
    displayCSS.FlexRow.centerCenter}
  gap: 4px;
  ${({ theme: { fonts } }) => fonts.Pre_Footer}

  .logo {
    width: 15px;
    height: 15px;
    background-image: url('./src/5_Shared/images/churchLogo.png');
    background-position: center;
    background-size: cover;
  }
`;
