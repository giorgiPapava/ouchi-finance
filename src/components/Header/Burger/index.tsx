import styled from 'styled-components';
import React from 'react';
import MyBtn from '@src/components/Button';
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
  text-align: left;
  padding: 2rem;
  position: absolute;
  width: 100%;
  top: -1rem;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

const Link = styled.a`
  text-align: left;
  font-size: 1.125rem;
  padding: .5rem 0;
  color: ${(props: any) => props.theme.palette.primary.main};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: #343078;
  }

  margin-right: 0.25rem;
`;

const Title = styled.span`
  margin-right: 0.25rem;
  font-size: 1.15rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Developers = [
  {
    label: 'V3 Documentation',
    link: '#',
  },
  {
    label: 'V3 Whitepaper',
    link: '#',
  },
  {
    label: 'GitHub',
    link: '#',
  },
  {
    label: 'Bug Bounty',
    link: '#',
  },
];

export const Governance = [
  {
    label: 'UNI Token',
    link: '#',
  },
  {
    label: 'Governance Forum',
    link: '#',
  },
  {
    label: 'Sybil (Delegates)',
    link: '#',
  },
  {
    label: 'Voting Portal',
    link: '#',
  },
  {
    label: 'Documentation',
    link: '#',
  },
];
export const Community = [
  {
    label: 'Discord',
    link: '#',
  },
  {
    label: 'Twitter',
    link: '#',
  },
  {
    label: 'Reddit',
    link: '#',
  },
];
export const More = [
  {
    label: 'Blog',
    link: '#',
  },
  {
    label: 'About',
    link: '#',
  },
  {
    label: 'FAQ',
    link: '#',
  },
  {
    label: 'Help & Tutorials',
    link: '#',
  },
  {
    label: 'Logo & Brand',
    link: '#',
  },
];

const Links = [
  {
    title: 'Developers',
    values: Developers,
  },
  {
    title: 'Governance',
    values: Governance,
  },
  {
    title: 'Community',
    values: Community,
  },
  {
    title: 'More',
    values: More,
  },
];

const Menu = ({ open }: StyleProp) => {
  const { t } = useTranslation('common');
  return (
    <StyledMenu open={open}>
      {Links.map(({
        title,
        values,
      }) => (
        <>
          <Title>{title}</Title>
          {
            values.map(({
              label,
              link,
            }) => (
              <Link href={link} target="_blank" rel="noreferrer">
                {label}
              </Link>
            ))
          }
        </>
      ))}
      <div style={{
        marginTop: '1rem',
        alignSelf: 'flex-end',
      }}
      >
        <MyBtn width="125" height="48" fontSize="12" radius="5px">
          {t('mainBtn')}
        </MyBtn>
      </div>
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
      transform: ${({ open }: StyleProp) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: StyleProp) => open ? '0' : '1'};
      transform: ${({ open }: StyleProp) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: StyleProp) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

interface MainT extends StyleProp {
  setOpen: (_arg0: boolean) => void
}

export const Burger = ({
  open,
  setOpen,
}: MainT) => {
  return (
    <StyledBurger
      style={open ? {
        position: 'fixed',
        right: '1rem',
        top: '1.5rem',
      } : {}}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Menu;
