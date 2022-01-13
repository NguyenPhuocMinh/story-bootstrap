import React, { FC } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuItemSingleHelper from './MenuItemSingleHelper';
import { useTranslate } from 'sb-core';
import { DashboardItemHelperProps } from '../types';

const useStyles = makeStyles({
  dashboard: {
    marginTop: '8px'
  }
});

const DashboardItemHelper: FC<DashboardItemHelperProps> = props => {
  const { registerIcons, ...rest } = props;
  const { translate } = useTranslate();

  const classes = useStyles();

  return (
    <Box>
      <MenuItemSingleHelper
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

export default DashboardItemHelper;
