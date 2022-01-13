import { createElement, useEffect, useState } from 'react';
import { useAuthenticated, useGetPermissions } from '../../hooks';
import { WithPermissionProps } from '../../types';
import { isEmpty } from 'lodash';

const WithPermissions = (props: WithPermissionProps): any => {
  const { authParams, component, ...rest } = props;

  const [permissions, setPermissions] = useState(null);

  useAuthenticated(authParams);
  const getPermissions = useGetPermissions();

  useEffect(() => {
    const getPermissionsUser = async () => {
      const permissions = await getPermissions();
      if (!isEmpty(permissions)) {
        setPermissions(permissions);
      }
    };
    getPermissionsUser();
  }, [getPermissions]);

  if (component) {
    return createElement(component, {
      permissions,
      ...rest
    });
  }
};

export default WithPermissions;
