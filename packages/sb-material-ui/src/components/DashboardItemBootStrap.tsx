import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuItemSingleBootStrap from './MenuItemSingleBootStrap';
import { useTranslate } from 'sb-core';
import { DashBoardProps } from '../types';

const useStyles = makeStyles({
  dashboard: {
    marginTop: '8px'
  }
});

const DashboardItemBootStrap = (props: DashBoardProps) => {
  const { registerIcons, ...rest } = props;
  const { translate } = useTranslate();

  const classes = useStyles();

  return (
    <Box>
      <MenuItemSingleBootStrap
        className={classes.dashboard}
        to={{
          pathname: '/',
          state: { _scrollToTop: true }
        }}
        primaryText={translate('resources.dashboard.name')}
        leftIcon="Dashboard"
        registerIcons={registerIcons}
        {...rest}
      />
    </Box>
  );
};

export default DashboardItemBootStrap;
