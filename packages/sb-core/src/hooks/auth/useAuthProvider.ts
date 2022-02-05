import { useContext } from 'react';
import { AuthCoreContext } from '../../contexts';
import { AuthProvider } from '../../types';

const useAuthProvider = (): AuthProvider => useContext(AuthCoreContext);

export const defaultAuthParams = {
  loginUrl: '/login',
  afterLoginUrl: '/',
  afterRegisterUrl: '/login',
  afterLogout: '/login'
};

export default useAuthProvider;
