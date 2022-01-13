import React, { FC } from 'react';
import { BootStrapCoreUIRouter, BootStrapCoreUIRouterProps } from 'sb-core';

const BootStrapStoryRouter: FC<BootStrapCoreUIRouterProps> = props => (
  <BootStrapCoreUIRouter {...props} />
);

BootStrapStoryRouter.displayName = 'BootStrapStoryRouter';

export default BootStrapStoryRouter;
