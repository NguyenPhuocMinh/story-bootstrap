import { useCallback } from 'react';

import useAuthProvider from './useAuthProvider';

type GetPermissions = (params?: any) => Promise<any>;

const getPermissionsWithoutProvider = () => Promise.resolve([]);

/**
 * Get a callback for calling the authProvider.getPermissions() method.
 *
 * @see useAuthProvider
 *
 * @returns {Function} getPermissions callback
 *
 * This is a low level hook. See those more specialized hooks
 * offering state handling.
 *
 */
const useGetPermissions = (): GetPermissions => {
  const authProvider = useAuthProvider();
  const getPermissions = useCallback(
    (params = {}) => authProvider.getPermissions(params),
    [authProvider]
  );

  return authProvider ? getPermissions : getPermissionsWithoutProvider;
};

export default useGetPermissions;
