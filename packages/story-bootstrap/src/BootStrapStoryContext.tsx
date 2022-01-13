import React, { FC } from 'react';
import { BootStrapCoreContext, BootStrapCoreContextProps } from 'sb-core';

const BootStrapStoryContext: FC<BootStrapCoreContextProps> = props => {
  return <BootStrapCoreContext {...props} />;
};

BootStrapStoryContext.defaultProps = {};

BootStrapStoryContext.displayName = 'BootStrapStoryContext';

export default BootStrapStoryContext;
