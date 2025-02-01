import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Layout = styled.header<{ $isHome: boolean }>`
  ${({ theme: { displayCSS } }) =>
    displayCSS.FlexColum.startCenter}
  padding-top: 30px;

  ${({ $isHome }) =>
    !$isHome
      ? css`
          background-image: url('./src/assets/theWayHeader2.jpg');
          background-position: center;
          background-size: cover;
        `
      : css`
          background: #fff;
        `}

  h1,
  .links {
    padding: 0 10px;
  }

  .links {
    ${({ theme: { displayCSS } }) =>
      displayCSS.FlexRow.betweenCenter}
  }

  .motto {
    ${({ theme: { displayCSS } }) =>
      displayCSS.FlexRow.centerCenter}
    ${({ theme: { fonts } }) => fonts.Pre_HeaderMotto}
    height: 30px;

    ${({ $isHome }) =>
      $isHome
        ? css`
            background-image: url('./src/assets/theWayHeader.jpg');
            background-position: center;
            background-size: cover;
          `
        : css`
            background: #fff;
          `}
  }

  .paths {
    height: 30px;
    * {
      text-decoration: none;
      ${({ theme: { fonts } }) => fonts.Pre_HeaderPaths}
    }
  }
`;

export const ChannelLinkBox = styled(Link)`
  ${({ theme: { displayCSS } }) =>
    displayCSS.FlexRow.centerCenter}
  gap: 4px;
  margin: 10px 0;
  ${({ theme: { fonts } }) => fonts.Pre_HeaderLink}
  text-decoration: none;
`;
