import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../rootStore/actions';
import { NotificationType, NotificationOptions } from '../../rootStore';
import { VerticalType, HorizontalType } from '../../constants';
import { warning } from '../../utils';

/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * notify('Level complete');
 * notify('A problem occurred', 'warning');
 * notify('Deleted %{count} elements', 'info', { smart_count: 23 });
 * notify('Post renamed', 'info', {}, true)
 */
const useNotify = () => {
  const dispatch = useDispatch();
  return useCallback(
    (
      message: string,
      type:
        | NotificationType
        | (NotificationOptions & { type: NotificationType }),
      messageArgs: any = {},
      undoable?: boolean,
      autoHideDuration?: number,
      multiLine?: boolean,
      vertical: VerticalType = 'bottom',
      horizontal: HorizontalType = 'center'
    ) => {
      if (typeof type === 'string') {
        warning(
          true,
          'This way of calling useNotify callback is deprecated. Please use the new syntax passing notify("[Your message]", { ...restOfArguments })'
        );
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
