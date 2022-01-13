import { EnhancerOptions } from 'redux-devtools-extension';
import { ReduxLoggerOptions } from 'redux-logger';

export const optionDevTools: EnhancerOptions = {
  trace: true,
  traceLimit: 25
};

export const optionsLogger: ReduxLoggerOptions = {
  level: 'info',
  collapsed: true,
  diff: true
};
