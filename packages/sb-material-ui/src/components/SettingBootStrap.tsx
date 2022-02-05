import { useTranslate } from 'sb-core';
// material ui
import { Box, Drawer, Divider, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroupHelper from './ButtonGroupBootStrap';
import { SettingProps } from '../types';

const SettingBootStrap = (props: SettingProps) => {
  const { open, anchor, toggleDrawer, changeTheme } = props;
  // hooks
  const { translate } = useTranslate();

  return (
    <Box>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 300,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2
          }}
        >
          <Typography variant="h6">
            {translate('appBar.toolbar.setting.title')}
          </Typography>
          <IconButton
            sx={{
              border: 'none',
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ padding: '0 16px' }}>
          <Typography
            sx={{ margin: '20px 0px 10px' }}
            variant="body1"
            gutterBottom
          >
            {translate('appBar.toolbar.setting.mode')}
          </Typography>
          <ButtonGroupHelper changeTheme={changeTheme} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default SettingBootStrap;
