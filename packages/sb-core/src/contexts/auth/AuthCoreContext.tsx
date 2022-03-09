import { createContext } from 'react';
import { AuthProvider, UserProps } from '../../types';

const defaultUser: UserProps = {
  id: '',
  fullName: 'Admin'
};

const defaultProvider: AuthProvider = {
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  loginWithFacebook: () => Promise.resolve(),
  getIdentity: () => Promise.resolve(defaultUser),
  checkExpiredToken: () => Promise.resolve()
};

const AuthCoreContext = createContext<AuthProvider>(defaultProvider);

AuthCoreContext.displayName = 'AuthCoreContext';

export default AuthCoreContext;
