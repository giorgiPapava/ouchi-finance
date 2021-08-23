import React, { useMemo } from 'react';
import MyBtn from '@src/components/Button';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import JoinButton from '@src/components/Content/JoinButton';
import { useWidth } from '@src/themes/sizes';

import {
  CardsBlock,
  CardsOutter,
  CardsTxT,
  CenterContainer,
  CenterContainerInner,
  CenterDesc,
  CenterMain,
  ContentRoot,
  FooterDiv,
  FooterInner,
  FooterTxt,
  ImgOutter,
  JoinUs,
  JoinUsInner,
  LearnBlock,
  LearnDesc,
  LearnTitle,
  TXT1,
  TXT2,
} from './styles';

const centerTexts = [
  {
    title: '$302B',
    desc: 'All Time Volume',
  },
  {
    title: '75K',
    desc: 'Liquidity Providers',
  },
  {
    title: '58K',
    desc: 'All Time Trades',
  },
];

const cards = [
  {
    title: 'Our Mission',
    img: '/cards/our-mission.svg',
    type: 'ordinary',
    size: 196,
  },
  {
    title: 'Application',
    img: '/cards/application.svg',
    type: 'important',
    size: 262,
  },
  {
    title: 'Ouchi Token',
    img: '/cards/ouchi-token.svg',
    type: 'ordinary',
    size: 234,
  },
];

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return {
        w: '200px',
        h: '50px',
        f: '12px',
      };
    case 'sm':
      return {
        w: '250px',
        h: '60px',
        f: '14px',
      };
    case 'md':
      return {
        w: '300px',
        h: '70px',
        f: '18px',
      };
    case 'lg':
      return {
        w: '420px',
        h: '90px',
        f: '32px',
      };
    default:
      return {
        w: '493px',
        h: '128px',
        f: '48px',
      };
  }
};

const Content = () => {
  const { t } = useTranslation('common');
  const width = useWidth();
  const sizes = useMemo(() => chooseSize(width), [width]);

  return (
    <ContentRoot>
      <TXT1>A Revolutionary DEX</TXT1>
      <TXT2>
        {`A trustful farming platform guaranteed by 
        Ethereum validator staking You don't 
        need to wait for the end of Ethereum validator staking 
        any more Enjoy Defi activities with Ouchi Finance!`}
      </TXT2>
      <div style={{
        marginTop: '2rem',
      }}
      >
        <MyBtn width={sizes.w} height={sizes.h} fontSize={sizes.f} radius="15px">
          {t('mainBtn')}
        </MyBtn>
      </div>
      <CenterContainer>
        {centerTexts.map(({
          title,
          desc,
        }) => (
          <CenterContainerInner key={title}>
            <CenterMain>
              {title}
              {/* @ts-ignore */}
              <CenterMain opacity={0.4}>+</CenterMain>
            </CenterMain>
            <CenterDesc>{desc}</CenterDesc>
          </CenterContainerInner>
        ))}
      </CenterContainer>
      <LearnBlock>
        <LearnTitle>Learn Ouchi Finance</LearnTitle>
        <LearnDesc>
          {
            `We are building a network in the global scale based on the mutual aid with a value put on trust and 
            empathy Our community is "an Ouchi (a safe house)" for you in the digital world`
          }
        </LearnDesc>
        <LearnDesc>
          We will be a platform for you to deal in rights, guaranteed with NFT, to live in an Ouchi even in the real
          world in the future.
        </LearnDesc>
      </LearnBlock>
      <CardsBlock>
        {cards.map(({
          title,
          img,
          type,
          size,
        }) => (
          <>
            {/* @ts-ignore */}
            <CardsOutter type={type} key={title}>
              {/* @ts-ignore */}
              <CardsTxT type={type}>{title}</CardsTxT>
              <ImgOutter>
                <Image src={img} alt={title} width={size} height={size} />
              </ImgOutter>
            </CardsOutter>
          </>
        ))}
      </CardsBlock>
      <LearnBlock>
        <LearnTitle
          style={{
            color: '#EDC39B',
          }}
        >
          Our Community
        </LearnTitle>
        <LearnDesc style={{
          width: '100%',
        }}
        >
          Feel free to contact the team, Enjoy chatting with others in the
          community.
        </LearnDesc>
      </LearnBlock>
      <JoinUs>
        <JoinUsInner>
          <JoinButton link="https://twitter.com/OuchiFinance" icon="/twitter.svg">Twitter</JoinButton>
          <JoinButton link="https://t.me/OuchiFinance" icon="/telegram.svg">Telegram</JoinButton>
        </JoinUsInner>
      </JoinUs>
      <FooterDiv>
        <FooterInner>
          <Image
            src="/copy-rights.svg"
            alt="copy-rights"
            width={29}
            height={29}
          />
          <FooterTxt>2021 Ouchi Finance</FooterTxt>
        </FooterInner>
      </FooterDiv>
    </ContentRoot>
  );
};

export default Content;
