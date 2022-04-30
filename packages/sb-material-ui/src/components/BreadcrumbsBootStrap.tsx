import { Box, Breadcrumbs, Typography, Link } from '@mui/material';
import { useTranslate } from 'sb-core';
import { useLocation } from 'react-router-dom';
import { createIcon } from '../dynamic';
import { BreadCrumbsProps, RouteProps } from '../types';
import { isEmpty } from 'lodash';

const BreadCrumbsBootStrap = (props: BreadCrumbsProps) => {
  const { routes, registerIcons } = props;
  const { translate } = useTranslate();

  const location = useLocation();
  const pathName = location.pathname;
  const pathNames = pathName.split('/').filter(x => x);

  const childBreadcrumbs = routes.filter(
    e => e.pathName === pathName
  ) as Array<any>;

  let breadcrumbs = [];

  for (let i = 0; i < childBreadcrumbs.length; i++) {
    const { parent } = childBreadcrumbs[i];
    if (!isEmpty(parent)) {
      breadcrumbs = routes.filter(e => e.pathName === parent.pathName) as [];
    }
  }

  return (
    <Box sx={{ padding: theme => theme.spacing(1) }}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs
          .concat(childBreadcrumbs as [])
          .map((route: RouteProps, index) => {
            const { parent, leftIcon, routerName } = route;
            const to = `/${pathNames.slice(0, index + 1).join('/')}`;

            return isEmpty(parent) ? (
              <Box display="flex" flexWrap="wrap" alignItems="center" key={to}>
                {leftIcon
                  ? createIcon({ icon: route.leftIcon, registerIcons })
                  : ''}
                <Typography
                  variant="body2"
                  fontSize="small"
                  fontWeight={500}
                  key={to}
                  marginLeft="5px"
                >
                  {translate(routerName)}
                </Typography>
              </Box>
            ) : (
              <Box display="flex" flexWrap="wrap" alignItems="center" key={to}>
                {leftIcon
                  ? createIcon({ icon: route.leftIcon, registerIcons })
                  : ''}
                <Link
                  variant="body2"
                  fontSize="small"
                  fontWeight={500}
                  underline="hover"
                  color="inherit"
                  marginLeft="5px"
                  key={to}
                  href={to}
                >
                  {translate(route.routerName)}
                </Link>
              </Box>
            );
          })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbsBootStrap;
