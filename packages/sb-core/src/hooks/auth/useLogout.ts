import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import { clearState } from '../../rootStore/actions';

type LogoutProps = (params?: any, redirectTo?: string) => Promise<any>;

/**
 * Get a callback for calling the authProvider.logout() method,
 * redirect to the login page, and clear the Redux state.
 *
 * @see useAuthProvider
 *
 * @returns {Function} logout callback
 *
 */
const useLogout = (): LogoutProps => {
  // hooks
  const authProvider = useAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // func
  const logout = useCallback(
    (params = {}, redirectTo = defaultAuthParams.afterLogout) =>
      authProvider.logout(params).then(redirectToFromProvider => {
        dispatch(clearState());
        navigate(redirectTo);
        return redirectToFromProvider;
      }),
    [authProvider, navigate, dispatch]
  );

  const logoutWithoutProvider = useCallback(
    _ => {
      navigate(
        { pathname: defaultAuthParams.loginUrl },
        {
          state: {
            nextPathname: location.pathname
          }
        }
      );
      dispatch(clearState());
      return Promise.resolve();
    },
    [dispatch, navigate, location.pathname]
  );

  return authProvider ? logout : logoutWithoutProvider;
};

export default useLogout;
