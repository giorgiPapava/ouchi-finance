import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Image from 'next/image';
import { device, useWidth } from '@src/themes/sizes';

const MyButton = styled(Button)`
  background: ${(props) => props.theme.palette.cards.ordinary};
  box-shadow: ${(props) => props.theme.palette.cards.shadow};
  border-radius: 40px;
  @media (${device.sm}) {
    width: 250.99px;
    height: 75.51px;
  }
  @media (${device.md}) {
    width: 300.99px;
    height: 100.51px;
  }
  @media (${device.lg}) {
    width: 492.99px;
    height: 168.51px;
  }
`;

const TxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.grey};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: 50px;
  }
  @media (${device.md}) {
    font-size: 48px;
    line-height: 150px;
  }
  @media (${device.lg}) {
    font-size: 72px;
    line-height: 150px;
  }
`;

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return 0;
    case 'sm':
      return 24;
    case 'md':
      return 40;
    case 'lg':
      return 60;
    default:
      return 100;
  }
};

const JoinButton = ({
  children,
  icon,
  ...props
}: any) => {
  const width = useWidth();

  const size = useMemo(() => chooseSize(width), [width]);

  return (
    <MyButton
      {...props}
      startIcon={<Image src={icon} alt="icon" width={size} height={size} />}
    >
      <TxT>{children}</TxT>
    </MyButton>
  );
};

export default JoinButton;
