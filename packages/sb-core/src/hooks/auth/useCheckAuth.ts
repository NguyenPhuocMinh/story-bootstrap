import { useCallback } from 'react';

import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import useLogout from './useLogout';
import { getErrorMessage } from '../../index';
import useNotify from '../sideEffect/useNotify';

type CheckAuthProps = (
  params?: any,
  logoutOnFailure?: boolean,
  redirectTo?: string,
  disableNotification?: boolean
) => Promise<void>;

/**
 * Get a callback for calling the authProvider.checkAuth() method.
 * In case of rejection, redirects to the login page, displays a notification,
 * and throws an error.
 *
 * This is a low level hook. See those more specialized hooks
 * for common authentication tasks, based on useCheckAuth.
 *
 * @see useAuthenticated
 * @see useAuthState
 *
 * @returns {Function} checkAuth callback
 */
const useCheckAuth = (): CheckAuthProps => {
  const authProvider = useAuthProvider();
  const notify = useNotify();
  const logout = useLogout();

  const checkAuth = useCallback(
    (
      params: any = {},
      logoutOnFailure,
      redirectTo: string = defaultAuthParams.loginUrl,
      disableNotification
    ) =>
      authProvider.checkAuth(params).catch(error => {
        if (logoutOnFailure) {
          logout({}, error && error.redirectTo ? error.redirectTo : redirectTo);
          const shouldSkipNotify =
            disableNotification || (error && error.message === false);

          !shouldSkipNotify &&
            notify(getErrorMessage(error, 'auth.auth_check_error'), 'warning');
        }
        throw error;
      }),
    [authProvider, logout, notify]
  );

  return authProvider ? checkAuth : checkAuthWithoutAuthProvider;
};

const checkAuthWithoutAuthProvider = () => Promise.resolve();

export default useCheckAuth;
