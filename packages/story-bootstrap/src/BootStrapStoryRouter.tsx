import { BootStrapCoreUIRouter, BootStrapCoreUIRouterProps } from 'sb-core';
import { LoadingBootStrap } from 'sb-material-ui';

const BootStrapStoryRouter = (props: BootStrapCoreUIRouterProps) => (
  <BootStrapCoreUIRouter {...props} />
);

BootStrapStoryRouter.defaultProps = {
  loading: LoadingBootStrap
};

BootStrapStoryRouter.displayName = 'BootStrapStoryRouter';

export default BootStrapStoryRouter;
