import React, { useState, useLayoutEffect } from 'react';
import { Router, HistoryRouterProps } from 'react-router-dom';

const ConnectedRouter = ({
  basename,
  children,
  history
}: HistoryRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default ConnectedRouter;
