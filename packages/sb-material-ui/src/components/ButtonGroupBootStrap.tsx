import { useEffect, useState } from 'react';
// core
import { useTranslate } from 'sb-core';
// redux
import { useDispatch } from 'react-redux';
// material ui
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
// styles
import { makeStyles } from '@mui/styles';
import { defaultTheme } from '../utils';
import { ButtonGroupProps } from '../types';

const useStyles = makeStyles(
  theme => ({
    selected: {
      color: `${theme.palette.text.primary} !important`,
      borderColor: `${theme.palette.text.primary} !important`
    },
    rootIcon: {
      marginRight: '8px'
    }
  }),
  { name: 'SbButtonGroup', defaultTheme }
);

const ButtonGroupBootStrap = (props: ButtonGroupProps) => {
  const { changeTheme } = props;
  // hooks
  const dispatch = useDispatch();
  const { translate } = useTranslate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // func
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newTheme: string
  ) => {
    if (newTheme !== null) {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };
  // render
  useEffect(() => {
    dispatch(changeTheme(theme));
  }, [theme, dispatch, changeTheme]);

  const classes = useStyles({ theme });

  return (
    <ToggleButtonGroup
      color="primary"
      value={theme}
      exclusive
      onChange={handleChange}
      fullWidth
    >
      <ToggleButton
        sx={{
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 700,
          justifyContent: 'center'
        }}
        classes={{
          selected: classes.selected
        }}
        value="light"
      >
        <WbSunnyIcon className={classes.rootIcon} />
        <Typography variant="inherit">
          {translate('appBar.toolbar.setting.themes.light')}
        </Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 700,
          justifyContent: 'center'
        }}
        value="dark"
        classes={{
          selected: classes.selected
        }}
      >
        <NightsStayIcon className={classes.rootIcon} />
        <Typography variant="inherit">
          {translate('appBar.toolbar.setting.themes.dark')}
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ButtonGroupBootStrap;
