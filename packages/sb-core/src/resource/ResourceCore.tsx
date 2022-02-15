import { Route, Routes } from 'react-router-dom';
import { ResourceCoreContext } from '../contexts';
import { WithPermissions } from '../hoc';
import { ResourceCoreProps } from '../types';

const ResourceCore = (props: ResourceCoreProps) => {
  const { name, component, location, navigate } = props;

  return (
    <ResourceCoreContext.Provider value={name}>
      <Routes>
        <Route
          path="*"
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
