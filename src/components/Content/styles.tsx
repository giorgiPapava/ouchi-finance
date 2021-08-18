import styled from 'styled-components';

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
  font-size: 96px;
  line-height: 150px;
  color: ${(props) => props.theme.palette.primary.primary};
`;
const TXT2 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150px;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
`;
const CenterMain = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props: any) => props.theme.palette.primary.primary};
  opacity: ${(props: any) => props.opacity || 1};
`;
const CenterDesc = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.primary};
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 340px;
  margin-top: 431px;
`;
const CenterContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LearnBlock = styled.div`
  margin-top: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LearnTitle = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.primary};
`;
const LearnDesc = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
`;

const CardsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  gap: 93px;
`;

const CardsOutter = styled.div`
  background: ${(props: any) => props.theme.palette.cards[props.type]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border-radius: ${(props: any) =>
    props.type === 'important' ? '15px' : '40px'};
  width: 492.99px;
  height: 496.22px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
  flex-direction: column;
`;
const CardsTxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const ImgOutter = styled.div`
  width: 262.93px;
  height: 264.65px;
  align-items: center;
  display: flex;
  justify-content: space-around;
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
  gap: 93px;
`;

const FooterDiv = styled.div`
  margin-top: 242px;
  margin-bottom: 108px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  font-size: 24px;
  line-height: 150px;
  display: flex;
  align-items: center;
  color: #ffffff;
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
