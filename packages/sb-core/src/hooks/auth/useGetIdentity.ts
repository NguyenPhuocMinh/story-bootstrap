import { useEffect } from 'react';
import useAuthProvider from './useAuthProvider';
import useSafeSetState from '../utils/useSafeSetState';
import { UserProps } from '../../types';

const defaultIdentity: UserProps = {
  id: '',
  fullName: '',
  photoURL: ''
};

type GetIdentityProps = () => Promise<UserProps>;

/**
 * Get a callback for calling the authProvider.getIdentity() method,
 * redirect to the login page, and clear the Redux state.
 *
 * @see useAuthProvider
 *
 * @returns {Object} states
 *
 */

const useGetIdentity = (): GetIdentityProps => {
  const [state, setState] = useSafeSetState({
    loading: true,
    loaded: false
  });

  const authProvider = useAuthProvider();

  useEffect(() => {
    const callGetIdentity = async () => {
      try {
        const identity = await authProvider.getIdentity();
        setState({
          loading: false,
          loaded: true,
          identity: identity || defaultIdentity
        });
      } catch (err) {
        setState({
          loading: false,
          loaded: true,
          error: err
        });
      }
    };
    callGetIdentity();
  }, [authProvider, setState]);

  return state;
};

export default useGetIdentity;
