import { AppBar, AppBarProps as MuiAppBarProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 300;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBarHelper = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

export default AppBarHelper;
