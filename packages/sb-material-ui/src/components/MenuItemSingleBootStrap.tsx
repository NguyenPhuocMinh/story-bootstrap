import { useCallback } from 'react';
// material ui
import {
  Tooltip,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import { createIcon } from '../dynamic';
import { defaultTheme } from '../utils';
import { MenuItemProps } from '../types';

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.common.text,
      '&:hover': {
        color: theme.palette.text.primary,
        borderRadius: 10
      }
    },
    selected: {
      background: `${theme.palette.common.selected} !important`,
      color: theme.palette.text.primary,
      borderRadius: 10
    }
  }),
  { name: 'SbMenuItemSingle', defaultTheme }
);

const MenuItemSingleBootStrap = (props: MenuItemProps) => {
  const {
    className,
    primaryText,
    leftIcon,
    registerIcons,
    onClick,
    tooltipProps,
    location,
    ...rest
  } = props;

  // hooks
  const classes = useStyles(props);
  // func
  const handleMenuTap = useCallback(e => onClick && onClick(e), [onClick]);

  return (
    <Tooltip title={primaryText} placement="right" {...tooltipProps}>
      <ListItemButton
        className={classnames(classes.root, className)}
        // component={NavLinkRef}
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

export default MenuItemSingleBootStrap;
