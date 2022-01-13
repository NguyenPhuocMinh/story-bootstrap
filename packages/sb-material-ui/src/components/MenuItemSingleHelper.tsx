import React, { useCallback } from 'react';
// router dom
import { useLocation } from 'react-router-dom';
// material ui
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import NavLinkRef from './NavLinkRef';
import { createIcon } from '../dynamic';
import { defaultTheme } from '../utils';
import { MenuItemProps } from '../types';

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.text.primary,
        borderRadius: 10
      }
    },
    selected: {
      background: `${theme.palette.text.secondary} !important`,
      color: theme.palette.text.primary,
      borderRadius: 10
    }
  }),
  { name: 'SbMenuItemSingle', defaultTheme }
);

const MenuItemSingleHelper = (props: MenuItemProps) => {
  const {
    className,
    primaryText,
    leftIcon,
    registerIcons,
    onClick,
    tooltipProps,
    ...rest
  } = props;

  // hooks
  const classes = useStyles(props);
  const location = useLocation();
  // func
  const handleMenuTap = useCallback(e => onClick && onClick(e), [onClick]);

  return (
    <Tooltip title={primaryText} placement="right" {...tooltipProps}>
      <ListItemButton
        className={classnames(classes.root, className)}
        component={NavLinkRef}
        tabIndex={0}
        {...rest}
        onClick={handleMenuTap}
        sx={{ px: 3 }}
        classes={{
          selected: classes.selected
        }}
        selected={props.to.pathname === location.pathname}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          {createIcon({ icon: leftIcon, registerIcons })}
        </ListItemIcon>
        <ListItemText
          primary={primaryText}
          primaryTypographyProps={{
            variant: 'subtitle2',
            fontWeight: 'medium',
            lineHeight: '1.5',
            mb: '2px'
          }}
          sx={{ my: 0 }}
        />
      </ListItemButton>
    </Tooltip>
  );
};

MenuItemSingleHelper.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.string,
  onClick: PropTypes.func,
  primaryText: PropTypes.node
};

export default MenuItemSingleHelper;
