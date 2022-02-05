import { createElement, Suspense } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// core
import { useTranslate, changeSideBar } from 'sb-core';
// material ui
import {
  Box,
  Drawer,
  Typography,
  Divider,
  useMediaQuery,
  CssBaseline
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// error boundary
import { ErrorBoundary } from 'react-error-boundary';
// helpers
import DrawerHeaderHelper from './DrawerHeaderBootStrap';
import ErrorHelper from './ErrorBootStrap';
import LoadingHelper from './LoadingBootStrap';
import MainHelper from './MainBootStrap';
import NavBarHelper from './NavBarBootStrap';
// lodash
import { get } from 'lodash';
import { LayoutProps } from '../types';

const LayoutBootStrap = (props: LayoutProps) => {
  const {
    theme,
    appBar,
    dashboard,
    logout,
    menu,
    title,
    version,
    drawerWidth,
    children,
    navigate,
    location
  } = props;

  // hooks
  const { translate } = useTranslate();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();
  // store
  const open = useSelector(state => get(state, 'admin.sidebarIsOpen'));
  // func
  const toggleSidebar = () => dispatch(changeSideBar(!open));

  return (
    <Suspense fallback={LoadingHelper}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorHelper}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <CssBaseline />
            {createElement(appBar, {
              title,
              isOpen: open,
              toggleSidebar,
              logout,
              navigate,
              location
            })}
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box'
                }
              }}
              variant={isXSmall ? 'temporary' : 'persistent'}
              anchor="left"
              open={open}
            >
              <DrawerHeaderHelper>
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize="small"
                  fontWeight={500}
                >
                  {translate(title)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  fontSize="small"
                  fontWeight={500}
                >
                  {`v${version}`}
                </Typography>
              </DrawerHeaderHelper>
              <Divider />
              {createElement(menu, {
                logout,
                hasDashboard: !!dashboard,
                navigate,
                location
              })}
            </Drawer>
            <MainHelper open={open} drawerwidth={drawerWidth}>
              <NavBarHelper style={{ display: 'flex' }} />
              {children}
            </MainHelper>
          </Box>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
};

export default LayoutBootStrap;
