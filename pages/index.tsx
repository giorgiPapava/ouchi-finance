import Header from '@src/components/Header';
import React from 'react';
import Content from '@src/components/Content';
import styled from 'styled-components';
import Image from 'next/image';

const Main = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: ${(props: any) => props.theme.palette.gradients.body};
`;

interface ImageDivTypes {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
}

const Img = styled.div`
  position: absolute;
  left: ${(props: ImageDivTypes) => props.left || ''};
  top: ${(props: ImageDivTypes) => props.top || ''};
  right: ${(props: ImageDivTypes) => props.right || ''};
  bottom: ${(props: ImageDivTypes) => props.bottom || ''};
  width: ${(props: ImageDivTypes) => props.width || ''};
  height: ${(props: ImageDivTypes) => props.height || ''};
  z-index: 1;
`;

interface BlurredDotsTypes extends ImageDivTypes {
  src: string;
  alt: string;
}

const blurredDots: BlurredDotsTypes[] = [
  {
    src: '/green-circles/circle-1.svg',
    alt: 'circle-1',
    width: '465.92px',
    height: '468.93px',
    left: '-112.52px',
    top: '567.09px',
  },
  {
    src: '/green-circles/circle-2.svg',
    alt: 'circle-2',
    width: '637.52px',
    height: '640.11px',
    left: '-331.06pxn',
    top: '663.78px',
  },
  {
    src: '/green-circles/circle-3.svg',
    alt: 'circle-3',
    width: '637.52px',
    height: '640.11px',
    right: '-100px',
    top: '663.78px',
  },
  {
    src: '/green-circles/circle-4.svg',
    alt: 'circle-4',
    width: '320.92px',
    height: '321.6px',
    left: '569.27px',
    top: '1459.14px',
  },
  {
    src: '/green-circles/circle-5.svg',
    alt: 'circle-5',
    width: '638.07px',
    height: '639.57px',
    right: '0px',
    bottom: '-10px',
  },
];

function MainPage() {
  return (
    <Main>
      {blurredDots.map(
        ({ src, alt, width, height, left, top, bottom, right }) => (
          <Img
            top={top}
            bottom={bottom}
            left={left}
            width={width}
            height={height}
            right={right}
          >
            <Image layout="fill" src={src} alt={alt} />
          </Img>
        ),
      )}
      <Header />
      <Content />
    </Main>
  );
}

export default MainPage;
