import styled from 'styled-components';
import { device } from '@src/themes/sizes';

const ContentRoot = styled.div`
  margin-top: 114px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const TXT1 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.primary};
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 50px;
  }
  @media (${device.lg}) {
    font-size: 96px;
    line-height: 150px;
  }
`;
const TXT2 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 100px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 100px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 24px;
    line-height: 100px;
  }
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (${device.sm}) {
    padding: 0 200px;
    margin-top: 150px;
  }
  @media (${device.md}) {
    padding: 0 240px;
    margin-top: 231px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    margin-top: 100px;
  }
  @media (${device.md}) {
    margin-top: 180px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    font-size: 32px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 100px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 100px;
  }
  @media (${device.lg}) {
    font-size: 24px;
    line-height: 150px;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${device.sm}) {
    padding: 0;
    gap: 40px;
    flex-direction: column;
  }
  @media (${device.md}) {
    padding: 0 100px;
    gap: 60px;
    flex-direction: row;
  }
  @media (${device.lg}) {
    padding: 0 100px;
    gap: 93px;
  }`;

const CardsOutter = styled.div`
  background: ${(props: any) => props.theme.palette.cards[props.type]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props: any) =>
    props.type === 'important' ? '15px' : '40px'};

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media (${device.sm}) {
    width: 250.99px;
    height: 250.22px;
    gap: 32px;
  }
  @media (${device.md}) {
    width: 300.99px;
    height: 300.22px;
    gap: 12px;
  }
  @media (${device.lg}) {
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
    line-height: 150px;
  }
`;

const ImgOutter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  @media (${device.sm}) {
    width: 100.93px;
    height: 100.65px;
  }
  @media (${device.md}) {
    width: 130.93px;
    height: 130.65px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    gap: 40px;
  }
  @media (${device.md}) {
    gap: 60px;
  }
  @media (${device.lg}) {
    gap: 93px;
  }
`;

const FooterDiv = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (${device.sm}) {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  @media (${device.md}) {
    margin-top: 160px;
    margin-bottom: 50px;
  }
  @media (${device.lg}) {
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
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 18px;
    line-height: 100px;
  }
  @media (${device.lg}) {
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
