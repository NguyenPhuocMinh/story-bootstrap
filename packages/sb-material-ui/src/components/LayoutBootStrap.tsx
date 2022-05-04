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
import DrawerHeaderBootStrap from './DrawerHeaderBootStrap';
import ErrorBootStrap from './ErrorBootStrap';
import LoadingBootStrap from './LoadingBootStrap';
import MainBootStrap from './MainBootStrap';
import NavBarBootStrap from './NavBarBootStrap';
import BreadCrumbsBootStrap from './BreadcrumbsBootStrap';
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
    location,
    routes,
    registerIcons
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
    <Suspense fallback={LoadingBootStrap}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorBootStrap}>
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
              <DrawerHeaderBootStrap>
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
              </DrawerHeaderBootStrap>
              <Divider />
              {createElement(menu, {
                logout,
                hasDashboard: !!dashboard,
                navigate,
                location
              })}
            </Drawer>
            <MainBootStrap open={open} drawerwidth={drawerWidth}>
              <NavBarBootStrap style={{ display: 'flex' }} />
              <BreadCrumbsBootStrap
                routes={routes}
                registerIcons={registerIcons}
              />
              <Box
                sx={{ height: 'auto', maxHeight: '100vh', overflowY: 'scroll' }}
              >
                {children}
              </Box>
            </MainBootStrap>
          </Box>
        </ErrorBoundary>
      </ThemeProvider>
    </Suspense>
  );
};

export default LayoutBootStrap;
