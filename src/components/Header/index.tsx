import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ThemesEnum } from '@src/slices/themeSlice';
import MyBtn from '@src/components/Button';
import useTranslation from 'next-translate/useTranslation';
import { device, useWidth } from '@src/themes/sizes';
import Menu, { Burger } from '@src/components/Header/Burger';

const Mobile = styled.div`
  @media (${device.xs}) {
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid ${(props) => props.theme.palette.primary.lightGrey};
  }
  @media (${device.sm}) {
    display: none;
  }

  & > * {
    z-index: 3;
  }
`;

const ThemeAndBurger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  gap: 20px;
`;
const MobileMenu = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRoot = styled.div`
  grid-template-columns: 1fr 3fr;
  border-bottom: 2px solid ${(props) => props.theme.palette.primary.lightGrey};
  @media (${device.xs}) {
    display: none;
    height: 80px;
  }
  @media (${device.sm}) {
    display: grid;
    height: 120px;
  }
  @media (${device.md}) {
    height: 169px;
  }
  @media (${device.lg}) {
    height: 218px;
  }
`;
const First = styled.div`
  padding-left: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (${device.sm}) {
    height: 120px;
    gap: 14px;
  }
  @media (${device.md}) {
    height: 169px;
    gap: 18px;
  }
  @media (${device.lg}) {
    height: 218px;
    gap: 21px;
  }
`;
const Last = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 27px;
  align-items: center;
  @media (${device.sm}) {
    height: 120px;
    gap: 32px;
  }
  @media (${device.md}) {
    height: 169px;
    gap: 35px;
  }
  @media (${device.lg}) {
    height: 218px;
    gap: 45px;
  }
`;

const HeaderLinks = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;

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
    line-height: 30px;
  }
`;
const Title = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.palette.primary.blue};
  @media (${device.sm}) {
    font-size: 12px;
    line-height: normal;
  }
  @media (${device.md}) {
    font-size: 24px;
    line-height: normal;
  }
  @media (${device.lg}) {
    font-size: 36px;
    line-height: 30px;
  }
`;
const ThemeImg = styled(Image)`
  cursor: pointer;
`;

const chooseSize = (size: string) => {
  switch (size) {
    case 'xs':
      return {
        icon: 24,
        main: 72,
      };
    case 'sm':
      return {
        icon: 18,
        main: 72,
      };
    case 'md':
      return {
        icon: 22,
        main: 100,
      };
    case 'lg':
      return {
        icon: 25,
        main: 112,
      };
    default:
      return {
        icon: 25,
        main: 112,
      };
  }
};

const Header = () => {
  const width = useWidth();
  const size = useMemo(() => chooseSize(width), [width]);

  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectors.selectTheme);
  const { t } = useTranslation('common');

  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <HeaderRoot>
        <First>
          <Image src="/img.png" alt="logo" width={size.main} height={size.main} />
          <Title>{t('title')}</Title>
        </First>
        <Last>
          {['app', 'mission', 'git', 'docs'].map((title: string) => (
            <HeaderLinks>{t(title)}</HeaderLinks>
          ))}
          <ThemeImg
            onClick={toggleTheme}
            src={currentTheme === 'dark' ? '/sun.svg' : '/moon.svg'}
            alt="logo"
            width={size.icon}
            height={size.icon}
          />
          <MyBtn>{t('mainBtn')}</MyBtn>
        </Last>
      </HeaderRoot>
      <Mobile>
        <Image src="/img.png" alt="logo" width={size.main} height={size.main} />
        <MobileMenu>
          <ThemeAndBurger>
            <ThemeImg
              onClick={toggleTheme}
              src={currentTheme === 'dark' ? '/sun.svg' : '/moon.svg'}
              alt="logo"
              width={size.icon}
              height={size.icon}
            />
            <div>
              <Menu open={open} />
              <Burger open={open} setOpen={setOpen} />
            </div>
          </ThemeAndBurger>
        </MobileMenu>
      </Mobile>
    </>
  );
};

export default Header;
