import PropTypes from 'prop-types';
// router dom
import { Route, Routes } from 'react-router-dom';
import { ResourceCoreContext } from '../contexts';
import { WithPermissions } from '../hoc';
import { ResourceCoreProps } from '../types';

const ResourceCore = (props: ResourceCoreProps) => {
  const { name, component, match } = props;

  const basePath = match ? match.path : '';

  return (
    <ResourceCoreContext.Provider value={name}>
      <Routes>
        <Route
          path={`${basePath}`}
          element={(routeProps: any) => (
            <WithPermissions
              component={component}
              basePath={basePath}
              {...routeProps}
            />
          )}
        />
      </Routes>
    </ResourceCoreContext.Provider>
  );
};

ResourceCore.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired
};

export default ResourceCore;
