import { BootStrapCoreUI, BootStrapCoreUIProps } from 'sb-core';
import {
  LayoutBootStrap,
  NotFoundBootStrap,
  LoadingBootStrap
} from 'sb-material-ui';

const BootStrapStoryUI = (props: BootStrapCoreUIProps) => {
  return <BootStrapCoreUI {...props} />;
};

BootStrapStoryUI.defaultProps = {
  layout: LayoutBootStrap,
  catchAll: NotFoundBootStrap,
  loading: LoadingBootStrap
};

BootStrapStoryUI.displayName = 'BootStrapStoryUI';

export default BootStrapStoryUI;
