import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../rootStore/actions';
import { NotificationType, NotificationOptions } from '../../rootStore';
import { VerticalType, HorizontalType } from '../../constants';

/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * notify('Level complete');
 * notify('A problem occurred', 'warning');
 */
const useNotify = () => {
  const dispatch = useDispatch();
  return useCallback(
    (
      message: string,
      type:
        | NotificationType
        | (NotificationOptions & { type: NotificationType }),
      messageArgs?: object,
      undoable?: false,
      autoHideDuration?: number,
      multiLine?: boolean,
      vertical: VerticalType = 'bottom',
      horizontal: HorizontalType = 'center'
    ) => {
      if (typeof type === 'string') {
        dispatch(
          showNotification(message, (type || 'info') as NotificationType, {
            messageArgs,
            undoable,
            autoHideDuration,
            multiLine,
            vertical,
            horizontal
          })
        );
      } else {
        const { type: messageType, ...options } = type || {};
        dispatch(showNotification(message, messageType, options));
      }
    },
    [dispatch]
  );
};

export default useNotify;
