import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';

/**
 * Hook for navigate Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * redirect('/');
 * redirect('/home');
 *
 */
const useRedirect = () => {
  const navigate = useNavigate();
  return useCallback(
    (to: string, options?: any) => {
      if (!isEmpty(options)) {
        navigate(to, options);
      }
      navigate(to);
    },
    [navigate]
  );
};

export default useRedirect;
