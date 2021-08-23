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
  color: ${(props) => props.theme.palette.primary.pink};
  @media (${device.xs}) {
    font-size: 24px;
    line-height: normal;
  }
  @media (${device.sm}) {
    font-size: 36px;
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
  line-height: normal;
  width: 43%;
  @media (${device.xs}) {
    font-size: 10px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (${device.sm}) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (${device.md}) {
    font-size: 18px;
  }
  @media (${device.lg}) {
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
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
  color: ${(props) => props.theme.palette.primary.yellow};
  @media (${device.xs}) {
    font-size: 24px;
    line-height: normal;
    margin-bottom: 1rem;
  }
  @media (${device.sm}) {
    font-size: 36px;
    line-height: 50px;
    margin-bottom: 1.5rem;
  }
  @media (${device.md}) {
    margin-bottom: 2rem;
    font-size: 48px;
    line-height: 100px;
  }
  @media (${device.lg}) {
    margin-bottom: 3rem;
    font-size: 72px;
    line-height: 100px;
  }
  @media (${device.xl}) {
    margin-bottom: 3rem;
    font-size: 96px;
    line-height: 150px;
  }
`;
const LearnDesc = styled.span`
  margin: 0 auto;
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  @media (${device.xs}) {
    font-size: 10px;
    width: 80%;
  }
  @media (${device.sm}) {
    font-size: 12px;
    width: 100%;
  }
  @media (${device.md}) {
    font-size: 18px;
    width: 70%;
  }
  @media (${device.lg}) {
    font-size: 22px;
  }
  @media (${device.xl}) {
    font-size: 24px;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.xs}) {
    padding: 0;
    gap: 32px;
    margin-top: 60px;
    flex-direction: column;
  }
  @media (${device.sm}) {
    padding: 0;
    gap: 32px;
    margin-top: 60px;
  }
  @media (min-width: 1024px) {
    padding: 0 100px;
    gap: 75px;
    margin-top: 140px;
  }
  @media (${device.md}) {
    padding: 0 100px;
    gap: 100px;
    flex-direction: row;
    display: flex;
    margin-top: 100px;
  }
  @media (${device.lg}) {
    padding: 0 100px;
    gap: 160px;
    margin-top: 140px;
  }
  @media (${device.xl}) {
    padding: 0 100px;
    gap: 212px;
    margin-top: 140px;
  }`;

const CardsOutter = styled.div`
  background: ${(props: any) => props.theme.palette.cards[props.type]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-height: 300px;
  max-width: 300px;
  @media (${device.xs}) {
    width: 200px;
    max-width: 230px;
    height: 200px;
    padding: 1rem 0;
  }
  @media (${device.sm}) {
    width: 200px;
    max-width: 250px;
    height: 200px;
    padding: 1rem 0;
  }
  @media (min-width: 1024px) {
    width: 220px;
    height: 220px;
    padding: 1rem 0;
  }
  @media (${device.md}) {
    margin: 0;
    max-width: 300px;
    width: 220px;
    padding: 1.5rem 0;
    height: 220px;
  }
  @media (${device.lg}) {
    width: 300px;
    height: 300px;
    padding: 2rem 0;
  }
  @media (${device.xl}) {
    width: 300px;
    height: 300px;
    padding: 2rem 0;
  }
`;
const CardsTxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props: any) => props.type === 'important' ? '#fff' : '#42B7A0'};
  @media (${device.xs}) {
    font-size: 18px;
    line-height: normal;
    padding-bottom: 1rem;
  }
  @media (${device.sm}) {
    font-size: 20px;
    line-height: normal;
  }
  @media (min-width: 1024px) {
    padding-bottom: 0;
    font-size: 28px;
  }
  @media (${device.lg}) {
    padding-bottom: 0;
    font-size: 32px;
  }
  @media (${device.xl}) {
    font-size: 36px;
  }
`;

const ImgOutter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media (${device.xs}) {
    width: 100.93px;
    height: 100.65px;
    margin-bottom: 10px;
  }
  @media (${device.sm}) {
    width: 100.93px;
    height: 100.65px;
    margin-bottom: 10px;
  }
  @media (${device.md}) {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }
  @media (${device.lg}) {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }
  @media (${device.xl}) {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
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
    margin-top: 1.5rem;
  }
  @media (${device.sm}) {
    gap: 40px;
    margin-top: 1.5rem;
  }
  @media (${device.md}) {
    margin-top: 3rem;
    gap: 60px;
  }
  @media (${device.lg}) {
    margin-top: 4rem;
    gap: 72px;
  }
  @media (${device.xl}) {
    margin-top: 5rem;
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
};
