import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Image from 'next/image';

const MyButton = styled(Button)`
  width: 492.99px;
  height: 168.51px;
  background: ${(props) => props.theme.palette.cards.ordinary};
  box-shadow: ${(props) => props.theme.palette.cards.shadow};
  border-radius: 40px;
`;

const TxT = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.grey};
`;

const JoinButton = ({ children, icon, ...props }: any) => {
  return (
    <MyButton
      {...props}
      startIcon={<Image src={icon} alt="icon" width={100} height={100} />}
    >
      <TxT>{children}</TxT>
    </MyButton>
  );
};

export default JoinButton;
