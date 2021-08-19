import React, { useMemo } from 'react';
import MyBtn from '@src/components/Button';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import JoinButton from '@src/components/Content/JoinButton';
import { useWidth } from '@src/themes/sizes';
import {
  ContentRoot,
  TXT1,
  TXT2,
  CenterMain,
  CenterDesc,
  CenterContainer,
  CenterContainerInner,
  LearnBlock,
  LearnTitle,
  LearnDesc,
  CardsBlock,
  CardsOutter,
  CardsTxT,
  ImgOutter,
  JoinUs,
  JoinUsInner,
  FooterDiv,
  FooterInner,
  FooterTxt,
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
      <TXT1>A Revolutionary</TXT1>
      <TXT1>DEX</TXT1>
      <TXT2>
        A trustful farming platform guaranteed by Ethereum validator staking.
      </TXT2>
      <MyBtn width={sizes.w} height={sizes.h} fontSize={sizes.f} radius="15px">
        {t('mainBtn')}
      </MyBtn>
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
          We are bulding a network in the global scale based on the mutual aid
          with a value put on trust and empathy
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
              <ImgOutter>
                <Image src={img} alt={title} width={size} height={size} />
              </ImgOutter>
              <CardsTxT>{title}</CardsTxT>
            </CardsOutter>
          </>
        ))}
      </CardsBlock>
      <LearnBlock>
        <LearnTitle
          style={{
            color: '#fff',
          }}
        >
          Our Community
        </LearnTitle>
        <LearnDesc>
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
