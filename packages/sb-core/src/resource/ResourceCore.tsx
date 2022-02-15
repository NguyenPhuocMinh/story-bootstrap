import { Route, Routes } from 'react-router-dom';
import { ResourceCoreContext } from '../contexts';
import { WithPermissions } from '../hoc';
import { ResourceCoreProps } from '../types';

const ResourceCore = (props: ResourceCoreProps) => {
  const { name, component, location, navigate } = props;

  const basePath = '';

  return (
    <ResourceCoreContext.Provider value={name}>
      <Routes>
        <Route
          path={`${basePath}`}
          element={
            <WithPermissions
              component={component}
              location={location}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </ResourceCoreContext.Provider>
  );
};

export default ResourceCore;
