import React, { FC, useCallback } from 'react';
// history
import { Location } from 'history';
// router dom
import { useLocation, useNavigate } from 'react-router-dom';
// core
import {
  useTranslate,
  useAuthProvider,
  useNotify,
  defaultAuthParams,
  clearState
} from 'sb-core';
// redux
import { useDispatch } from 'react-redux';
// material ui
import { ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import {
  PowerSettingsNew as PowerSettingsNewIcon,
  RecentActors as RecentActorsIcon
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { defaultTheme } from '../utils';
import { ProfileHelperProps } from '../types';

const useStyles = makeStyles(
  _ => ({
    selected: {
      background: 'rgb(0 0 0 / 12%) !important'
    }
  }),
  { name: 'SbProfile', defaultTheme }
);

const ProfileHelper: FC<ProfileHelperProps> = ({
  open,
  anchorEl,
  handleClose
}) => {
  // hooks
  const classes = useStyles();
  const { translate } = useTranslate();
  const authProvider = useAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = useNotify();
  const location = useLocation();

  const locationState = location.state as Location;
  const nextPathName = locationState && locationState.pathname;
  const nextSearch = locationState && locationState.search;

  const handleShowProfile = () => {};

  const handleLogout = useCallback(
    (params: any = {}) => {
      dispatch(clearState());
      authProvider.logout(params).then(() => {
        notify('users.notification.logout.success', 'success');
        const redirectUrl =
          nextPathName + nextSearch || defaultAuthParams.loginUrl;
        navigate(redirectUrl);
      });
    },
    [authProvider, dispatch, navigate, notify, nextPathName, nextSearch]
  );

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
      <MenuItem
        onClick={handleShowProfile}
        classes={{
          selected: classes.selected
        }}
      >
        <ListItemIcon>
          <RecentActorsIcon
            sx={{
              fontSize: '1.25rem',
              width: '1em',
              height: '1em'
            }}
          />
        </ListItemIcon>
        <Typography variant="caption">
          {translate('appBar.toolbar.profile.show_profile')}
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={handleLogout}
        classes={{
          selected: classes.selected
        }}
      >
        <ListItemIcon>
          <PowerSettingsNewIcon
            sx={{
              fontSize: '1.25rem',
              width: '1em',
              height: '1em'
            }}
          />
        </ListItemIcon>
        <Typography variant="caption">
          {translate('appBar.toolbar.profile.logout')}
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default ProfileHelper;
