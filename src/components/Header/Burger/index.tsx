import styled from 'styled-components';
import { device } from '@src/themes/sizes';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface StyleProp {
  open: boolean
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props: any) => props.theme.palette.gradients.body};
  transform: ${({ open }: StyleProp) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (${device.xs}) {
      width: 100%;
    }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${(props: any) => props.theme.palette.primary.main};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (${device.xs}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open }: StyleProp) => {
  const { t } = useTranslation('common');
  return (
    <StyledMenu open={open}>
      {['app', 'mission', 'git', 'docs'].map((title: string) => (
        <a href="/">
          <span>{t(title)}</span>
        </a>
      ))}
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props: any) => props.theme.palette.primary.main};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }:StyleProp) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }:StyleProp) => open ? '0' : '1'};
      transform: ${({ open }:StyleProp) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }:StyleProp) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

interface MainT extends StyleProp{
  setOpen: (_arg0: boolean) => void
}

export const Burger = ({ open, setOpen }: MainT) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Menu;
