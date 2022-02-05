import { BootStrapCoreContext, BootStrapCoreContextProps } from 'sb-core';

const BootStrapStoryContext = (props: BootStrapCoreContextProps) => {
  return <BootStrapCoreContext {...props} />;
};

BootStrapStoryContext.displayName = 'BootStrapStoryContext';

export default BootStrapStoryContext;
