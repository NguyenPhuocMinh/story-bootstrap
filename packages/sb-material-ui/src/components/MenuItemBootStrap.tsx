import { useCallback } from 'react';
import classnames from 'classnames';
// material ui
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  ListItemButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
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
      },
      marginTop: theme.spacing(0.625)
    },
    selected: {
      background: `${theme.palette.common.selected} !important`,
      color: theme.palette.text.primary,
      borderRadius: 10
    }
  }),
  { name: 'SbMenuItem', defaultTheme }
);

const MenuItemBootStrap = (props: MenuItemProps) => {
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

  const renderMenuItem = () => (
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
      {leftIcon ? (
        <ListItemIcon>
          {createIcon({ icon: leftIcon, registerIcons })}
        </ListItemIcon>
      ) : (
        <ListItemIcon />
      )}
      <ListItemText
        primary={primaryText}
        primaryTypographyProps={{
          variant: 'subtitle2',
          fontWeight: 'medium',
          marginLeft: !leftIcon ? '16px' : '0px',
          lineHeight: '1.5',
          mb: '2px'
        }}
        sx={{ my: 0 }}
      />
    </ListItemButton>
  );

  return (
    <Tooltip title={primaryText} placement="right" {...tooltipProps}>
      {renderMenuItem()}
    </Tooltip>
  );
};

export default MenuItemBootStrap;
