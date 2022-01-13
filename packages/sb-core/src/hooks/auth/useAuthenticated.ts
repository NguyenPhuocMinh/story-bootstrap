import { useEffect } from 'react';
import useCheckAuth from './useCheckAuth';

const emptyParams = {};

const useAuthenticated = (params: any = emptyParams) => {
  const checkAuth = useCheckAuth();
  useEffect(() => {
    checkAuth(params).catch(() => {});
  }, [checkAuth, params]);
};

export default useAuthenticated;
