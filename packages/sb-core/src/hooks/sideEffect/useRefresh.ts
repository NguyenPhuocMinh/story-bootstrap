import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSideBar, refreshPage } from '../../rootStore';
import { get } from 'lodash';

/**
 * Hook for refresh Side Effect
 *
 * @example
 *
 * const refresh = useRefresh();
 * redirect();
 *
 */
const useRedirect = () => {
  const dispatch = useDispatch();

  const sidebarIsOpen = useSelector(state => get(state, 'admin.sidebarIsOpen'));

  return useCallback(() => {
    dispatch(changeSideBar(!sidebarIsOpen));
    dispatch(refreshPage(true));
    setTimeout(() => {
      dispatch(changeSideBar(sidebarIsOpen));
      dispatch(refreshPage(false));
    }, 500);
  }, [dispatch, sidebarIsOpen]);
};

export default useRedirect;
