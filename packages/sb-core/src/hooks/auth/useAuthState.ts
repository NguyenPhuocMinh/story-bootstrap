import { useEffect } from 'react';

import useCheckAuth from './useCheckAuth';
import useSafeSetState from '../utils/useSafeSetState';
import { isEmpty, get } from 'lodash';

const emptyParams = {};

interface AuthState {
  loading: boolean;
  loaded: boolean;
  authenticated?: boolean;
  accessToken: string;
}

/**
 * Hook for getting the authentication status
 *
 * Calls the authProvider.checkAuth() method asynchronously.
 *
 * The return value updates according to the authProvider request state:
 *
 * - loading: true just after mount, while the authProvider is being called. false once the authProvider has answered.
 * - loaded: the opposite of loading.
 * - authenticated: true while loading. then true or false depending on the authProvider response.
 *
 * To avoid rendering a component and force waiting for the authProvider response, use the useAuthState() hook
 * instead of the useAuthenticated() hook.
 *
 * You can render different content depending on the authenticated status.
 *
 * @see useAuthenticated
 * @see useCheckAuth
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { authenticated, error, loading, loaded, token }.
 *
 */
const useAuthState = (params: any = emptyParams): AuthState => {
  const [state, setState] = useSafeSetState({
    loading: true,
    loaded: false,
    authenticated: true, // optimistic
    token: null
  });
  const checkAuth = useCheckAuth();
  useEffect(() => {
    checkAuth(params, false)
      .then(data => {
        if (!isEmpty(data)) {
          setState({
            loading: false,
            loaded: true,
            authenticated: true,
            token: get(data, 'accessToken')
          });
        }
      })
      .catch(() =>
        setState({ loading: false, loaded: true, authenticated: false })
      );
  }, [checkAuth, params, setState]);
  return state;
};

export default useAuthState;
