import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ThemesEnum } from '@src/slices/themeSlice';
import styled from 'styled-components';
import Image from 'next/image';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 30,
    padding: 0,
    marginTop: 7,
  },
  switchBase: {
    padding: 5,
    '&$checked': {
      transform: 'translateX(30px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: theme.palette.primary.primary,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: theme.palette.primary.primary,
      border: '6px solid #fff',
    },
  },
  thumb: ({ lite }) => ({
    width: 20,
    height: 20,
    background: lite ? theme.palette.primary.primary : '#fff',
  }),
  track: {
    borderRadius: 15,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({
  classes,
  ...props
}) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const LabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 14px;
  align-items: center;
  width: 40px;
`;

// eslint-disable-next-line react/prop-types
export default function ToggleTheme({ size }) {
  const { currentTheme } = useSelector(selectors.selectTheme);
  const dispatch = useDispatch();
  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);

  return (
    <FormControlLabel
      labelPlacement="top"
      control={(
        <IOSSwitch
          lite={currentTheme !== 'dark'}
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
          name="checkedB"
        />
      )}
      label={(
        <LabelDiv>
          <Image
            src="/sun.svg"
            alt="logo"
            width={size}
            height={size}
          />
          <Image
            src="/moon.svg"
            alt="logo"
            width={size}
            height={size}
          />
        </LabelDiv>
      )}
    />
  );
}
