import { useEffect } from 'react';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import useLogout from './useLogout';
import { getErrorMessage } from '../../utils';
import useNotify from '../sideEffect/useNotify';
import useSafeSetState from '../utils/useSafeSetState';
import { isEmpty, get } from 'lodash';

const useCheckExpiredToken = () => {
  const [state, setState] = useSafeSetState({
    expireAt: 0,
    expiresIn: 0
  });

  const authProvider = useAuthProvider();
  const notify = useNotify();
  const logout = useLogout();

  useEffect(() => {
    const callCheckExpired = async () => {
      try {
        const getExpired = await authProvider.checkExpiredToken();
        if (!isEmpty(getExpired)) {
          setState({
            expireAt: get(getExpired, 'expireAt'),
            expiresIn: get(getExpired, 'expiresIn')
          });
        }
      } catch (err) {
        return Promise.reject(err);
      }
    };
    callCheckExpired();
  }, [authProvider, setState]);

  useEffect(() => {
    const { expireAt, expiresIn } = state;
    const timeFromGetLastToken = Math.floor((Date.now() - expireAt) / 1000);

    const refreshTokenHandlerInterval = setInterval(() => {
      if (expiresIn - timeFromGetLastToken < 30) {
        logout({}, defaultAuthParams.afterLogout);

        notify(getErrorMessage({}, 'auth.auth_check_expired'), {
          type: 'warning',
          vertical: 'bottom',
          horizontal: 'center'
        });
      }
    }, 1000);
    return () => clearInterval(refreshTokenHandlerInterval);
  }, [state, logout, notify]);
};

export default useCheckExpiredToken;
