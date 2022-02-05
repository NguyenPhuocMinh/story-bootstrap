import { useState } from 'react';
// material ui
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Tooltip,
  ListItemIcon,
  Collapse,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createIcon } from '../dynamic';
import { defaultTheme } from '../utils';
import { SubMenuProps } from '../types';

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.text.primary,
        borderRadius: 10
      }
    }
  }),
  { name: 'SbSubMenu', defaultTheme }
);

const SubMenuBootStrap = (props: SubMenuProps) => {
  const { primaryText, dense, children, leftIcon, registerIcons } = props;

  // hooks
  const classes = useStyles();

  // states
  const [toggle, setToggle] = useState({});

  // func
  const handleToggle = newToggle => {
    setToggle(prevToggle => ({
      ...prevToggle,
      [newToggle]: !prevToggle[newToggle]
    }));
  };

  const header = (
    <ListItemButton
      key={primaryText}
      onClick={() => handleToggle(primaryText)}
      sx={{ px: 3 }}
      className={classes.root}
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
      {toggle[primaryText] ? (
        <KeyboardArrowDown sx={{ mr: -1 }} />
      ) : (
        <KeyboardArrowRightIcon sx={{ mr: -1 }} />
      )}
    </ListItemButton>
  );

  return (
    <Box>
      <Tooltip title={primaryText} placement="right">
        {header}
      </Tooltip>
      <Collapse in={toggle[primaryText]} timeout="auto" unmountOnExit>
        <List dense={dense} component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </Box>
  );
};

export default SubMenuBootStrap;
