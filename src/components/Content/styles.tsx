import styled from 'styled-components';
import { device } from '@src/themes/sizes';

const ContentRoot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (${device.xs}) {
    margin-top: 50px;
  }
  @media (${device.sm}) {
    margin-top: 114px;
  }

  & > * {
    z-index: 2;
  }
`;

const TXT1 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.xs}) {
    font-size: 24px;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 32px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 72px;
    line-height: normal;
  }
  @media (${device.xl}) {
    font-size: 96px;
    line-height: 150px;
  }
`;
const TXT2 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  @media (${device.xs}) {
    font-size: 10px;
    line-height: normal;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 72px;
  }
  @media (${device.lg}) {
    font-size: 22px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 24px;
    line-height: 150px;
  }
`;
const CenterMain = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props: any) => props.theme.palette.primary.primary};
  opacity: ${(props: any) => props.opacity || 1};
  @media (${device.xs}) {
    font-size: 48px;
    line-height: 72px;
  }
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 72px;
  }
  @media (${device.lg}) {
    font-size: 72px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 96px;
    line-height: 100px;
  }
`;
const CenterDesc = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.xs}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 22px;
    line-height: 72px;
  }
  @media (${device.xl}) {
    font-size: 24px;
    line-height: 100px;
  }
`;
const CenterContainer = styled.div`
  display: flex;
  width: 100%;
  @media (${device.xs}) {
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
  }
  @media (${device.sm}) {
    padding: 0 200px;
    margin-top: 150px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  @media (${device.md}) {
    padding: 0 240px;
    margin-top: 200px;
  }
  @media (${device.lg}) {
    padding: 0 280px;
    margin-top: 220px;
  }
  @media (${device.xl}) {
    padding: 0 340px;
    margin-top: 431px;
  }
`;
const CenterContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LearnBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (${device.xs}) {
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: center;
  }
  @media (${device.sm}) {
    margin-top: 100px;
  }
  @media (${device.md}) {
    margin-bottom: 0;
    margin-top: 180px;
  }
  @media (${device.lg}) {
    margin-top: 220px;
  }
  @media (${device.xl}) {
    margin-top: 320px;
  }
`;
const LearnTitle = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.xs}) {
    font-size: 24px;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 100px;
  }
  @media (${device.lg}) {
    font-size: 72px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 96px;
    line-height: 150px;
  }
`;
const LearnDesc = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  @media (${device.xs}) {
    font-size: 10px;
    width: 90%;
    margin: 0 16px;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 12px;
    margin: 0;
    width: 100%;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 50px;
  }
  @media (${device.lg}) {
    font-size: 22px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 24px;
    line-height: 150px;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    padding: 0;
    gap: 32px;
    display: none;
  }
  @media (${device.sm}) {
    padding: 0;
    gap: 32px;
    display: none;
  }
  @media (${device.md}) {
    padding: 0 100px;
    gap: 20px;
    flex-direction: row;
    display: flex;
  }
  @media (min-width: 1024px) {
    padding: 0 100px;
    gap: 60px;
  }
  @media (${device.lg}) {
    padding: 0 100px;
    gap: 72px;
  }
  @media (${device.xl}) {
    padding: 0 100px;
    gap: 93px;
  }`;

const MobileCards = styled.div`
  width: 100%;
  margin: 10px auto;
  @media (${device.xs}) {
    padding: 0;
    gap: 32px;
    display: block;
  }
  @media (${device.sm}) {
    padding: 0;
    gap: 32px;
    display: block;
  }
  @media (${device.md}) {
    padding: 0 100px;
    gap: 20px;
    flex-direction: row;
    display: none;
  }
  & .swiper-pagination {
    bottom: -5px;
  }
}`;

const CardsOutter = styled.div`
  background: ${(props: any) => props.theme.palette.cards[props.type]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media (${device.xs}) {
    width: 80%;
    max-width: 230px;
    margin: 20px auto 25px;
    height: 230px;
    gap: 32px;
  }
  @media (${device.sm}) {
    width: 80%;
    max-width: 250px;
    margin: 20px auto 25px;
    height: 250px;
    gap: 32px;
  }
  @media (${device.md}) {
    width: 272px;
    height: 272px;
    gap: 24px;
  }
  @media (min-width: 1024px) {
    width: 300.99px;
    height: 300.22px;
    gap: 12px;
  }
  @media (${device.lg}) {
    width: 360px;
    height: 360px;
  }
  @media (${device.xl}) {
    width: 492.99px;
    height: 496.22px;
  }
`;
const CardsTxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media (${device.xs}) {
    font-size: 24px;
    line-height: normal;
    padding-bottom: 1rem;
  }
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 0;
    font-size: 40px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 72px;
    line-height: 150px;
  }
`;

const ImgOutter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media (${device.xs}) {
    width: 100.93px;
    height: 100.65px;
  }
  @media (${device.sm}) {
    width: 100.93px;
    height: 100.65px;
  }
  @media (${device.md}) {
    width: 130.93px;
    height: 130.65px;
  }
  @media (${device.lg}) {
    width: 160px;
    height: 160px;
  }
  @media (${device.xl}) {
    width: 262.93px;
    height: 264.65px;
  }
`;

const JoinUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const JoinUsInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    gap: 40px;
  }
  @media (${device.sm}) {
    gap: 40px;
  }
  @media (${device.md}) {
    gap: 60px;
  }
  @media (${device.lg}) {
    gap: 72px;
  }
  @media (${device.xl}) {
    gap: 93px;
  }
`;

const FooterDiv = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (${device.xs}) {
    margin-top: 50px;
    margin-bottom: 10px;
  }
  @media (${device.sm}) {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  @media (${device.md}) {
    margin-top: 160px;
    margin-bottom: 40px;
  }
  @media (${device.lg}) {
    margin-top: 180px;
    margin-bottom: 50px;
  }
  @media (${device.xl}) {
    margin-top: 242px;
    margin-bottom: 108px;
  }
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;

const FooterTxt = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (${device.xs}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 72px;
  }
  @media (${device.lg}) {
    font-size: 22px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    font-size: 24px;
    line-height: 150px;
  }
`;

export {
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
  MobileCards,
};
