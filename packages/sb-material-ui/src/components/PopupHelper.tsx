import React, { FC } from 'react';
// core
import { useTranslate } from 'sb-core';
// redux
import { useDispatch, useSelector } from 'react-redux';
// material ui
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// country flag
import ReactCountryFlag from 'react-country-flag';
import { defaultTheme } from '../utils';
import { get } from 'lodash';
import { PopupPropsHelperProps } from '../types';

const useStyles = makeStyles(
  _ => ({
    selected: {
      background: 'rgb(0 0 0 / 12%) !important'
    }
  }),
  { name: 'SbPopup', defaultTheme }
);

const PopupHelper: FC<PopupPropsHelperProps> = ({
  open,
  anchorEl,
  handleClose,
  languages,
  changeLanguage
}) => {
  // hooks
  const classes = useStyles();
  const { translate, i18n } = useTranslate();
  const dispatch = useDispatch();
  // func
  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    dispatch(changeLanguage(language));
  };
  // store
  const language = useSelector(state => get(state, 'language'));

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {languages.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => handleChangeLanguage(item.name)}
          selected={language === item.name}
          classes={{
            selected: classes.selected
          }}
          disabled={language === item.name}
        >
          <ListItemIcon>
            <ReactCountryFlag
              svg
              countryCode={item.countryCode}
              style={{
                fontSize: '1.25rem',
                width: '1em',
                height: '1em'
              }}
            />
          </ListItemIcon>
          <Typography variant="caption">
            {translate(`appBar.toolbar.language.${item.name}`)}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

PopupHelper.defaultProps = {
  open: false,
  anchorEl: undefined,
  languages: [
    {
      name: 'en',
      countryCode: 'US'
    }
  ],
  handleClose: () => ({}),
  changeLanguage: () => ({})
};

export default PopupHelper;
