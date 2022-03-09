import { createElement, useEffect, useState } from 'react';
import {
  useAuthenticated,
  useGetPermissions,
  useCheckExpiredToken
} from '../../hooks';
import { isEmpty } from 'lodash';
import { WithPermissionProps } from '../../types';

const WithPermissions = (props: WithPermissionProps): any => {
  const { authParams, component, ...rest } = props;

  const [permissions, setPermissions] = useState(null);

  useAuthenticated(authParams);
  useCheckExpiredToken();
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
