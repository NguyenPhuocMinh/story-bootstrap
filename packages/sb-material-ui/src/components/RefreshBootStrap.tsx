import { useRefresh } from 'sb-core';
import { useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { defaultTheme } from '../utils';
import { ButtonRefreshProps } from '../types';

const useStyles = makeStyles(
  _ => ({
    refresh: {
      margin: 'auto'
    },
    spin: {
      margin: 'auto',
      animation: '$spin 1s 1'
    },
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  }),
  {
    name: 'SbIconButtonRefresh',
    defaultTheme
  }
);

const RefreshBootStrap = (props: ButtonRefreshProps) => {
  const { title } = props;
  // hooks
  const classes = useStyles();
  const refresh = useRefresh();

  const spin = useSelector(state => get(state, 'admin.spin'));

  return (
    <Tooltip title={title}>
      <IconButton color="inherit" onClick={refresh}>
        <RefreshIcon className={spin ? classes.spin : classes.refresh} />
      </IconButton>
    </Tooltip>
  );
};

export default RefreshBootStrap;
