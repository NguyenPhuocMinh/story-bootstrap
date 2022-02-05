import PropTypes from 'prop-types';
import { VerticalType, HorizontalType } from '../../constants';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const RESET_NOTIFICATION = 'RESET_NOTIFICATION';

/**
 * notification types
 */
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationOptions {
  autoHideDuration?: number;
  messageArgs?: any;
  multiLine?: boolean;
  undoable?: boolean;
  vertical: VerticalType;
  horizontal: HorizontalType;
}

export interface NotificationPayload {
  readonly message: string;
  readonly type: NotificationType;
  readonly notificationOptions?: NotificationOptions;
}

export interface ShowNotification {
  readonly type: typeof SHOW_NOTIFICATION;
  readonly payload: NotificationPayload;
}

/**
 * Shows a snackbar/toast notification on the screen
 *
 * @see {@link https://mui.com/api/snackbar/}
 */
export const showNotification = (
  message: string,
  type: NotificationType = 'info',
  notificationOptions: NotificationOptions
): ShowNotification => ({
  type: SHOW_NOTIFICATION,
  payload: {
    ...notificationOptions,
    type,
    message
  }
});

showNotification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  notificationOptions: PropTypes.shape({
    autoHideDuration: PropTypes.number,
    messageArgs: PropTypes.any,
    multiLine: PropTypes.bool,
    undoable: PropTypes.bool,
    vertical: PropTypes.oneOf(['bottom', 'top']),
    horizontal: PropTypes.oneOf(['center', 'right', 'left'])
  })
};

export interface HideNotification {
  readonly type: typeof HIDE_NOTIFICATION;
}

export const hideNotification = (): HideNotification => ({
  type: HIDE_NOTIFICATION
});

export interface ResetNotification {
  readonly type: typeof RESET_NOTIFICATION;
}

export const resetNotification = (): ResetNotification => ({
  type: RESET_NOTIFICATION
});
