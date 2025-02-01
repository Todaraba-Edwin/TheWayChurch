'use client';

import { Link, useLocation } from 'react-router-dom';
import * as S from './styled';
import * as A from '@/5_Shared/atoms';

export const OutletHeaderWidg = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const channels = [
    {
      name: 'Instagram',
      icons: <A.FiInstagram />,
      link: 'https://www.instagram.com/theway.ch_/'
    },
    {
      name: 'Youtube',
      icons: <A.FiYoutube />,
      link: 'https://www.youtube.com/@THEWAYCHURCH더웨이처치'
    },
    {
      name: 'Kakao',
      icons: <A.SlBubble />,
      link: 'https://pf.kakao.com/_wKMxbn'
    },
    {
      name: 'Blog',
      icons: <A.IoChatboxOutline />,
      link: 'https://blog.naver.com/thewaychurch_'
    }
  ];

  const paths = [
    {
      name: '더웨이처치',
      link: '/'
    },
    {
      name: '목회자',
      link: '/pastor'
    },
    {
      name: '소개',
      link: '/introduce'
    },
    {
      name: '등록',
      link: '/registration'
    }
  ];

  return (
    <S.Layout $isHome={isHome}>
      <A.H1_Title>THE WAY CHURCH</A.H1_Title>
      <figure>
        <div className="links">
          {channels.map((list) => (
            <S.ChannelLinkBox
              to={list.link}
              target="_blank"
              key={list.name}
            >
              {list.icons}
              {list.name}
            </S.ChannelLinkBox>
          ))}
        </div>
        <div className="motto">
          좋은 길 보다 옳은 길을 따라 함께 걷는 교회
        </div>
      </figure>
      <figure>
        <div className="links paths">
          {paths.map((list) => (
            <Link
              to={list.link}
              key={list.link}
              children={list.name}
            />
          ))}
        </div>
      </figure>
    </S.Layout>
  );
};
