import { styled } from '@mui/material/styles';

interface MainProps {
  open?: boolean;
  drawerwidth?: number;
}

const MainBootStrap = styled('main', {
  shouldForwardProp: prop => prop !== 'open'
})<MainProps>(({ theme, open, drawerwidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(1.25),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerwidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }),
  maxWidth: '100vh',
  overflowY: 'scroll'
}));

export default MainBootStrap;
