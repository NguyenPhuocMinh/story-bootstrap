import React, { FC } from 'react';
import { BootStrapCoreUI, BootStrapCoreUIProps } from 'sb-core';
import { LayoutHelper, NotFoundHelper } from 'sb-material-ui';

const BootStrapStoryUI: FC<BootStrapCoreUIProps> = props => {
  return <BootStrapCoreUI {...props} />;
};

BootStrapStoryUI.defaultProps = {
  layout: LayoutHelper,
  catchAll: NotFoundHelper
};

BootStrapStoryUI.displayName = 'BootStrapStoryUI';

export default BootStrapStoryUI;
