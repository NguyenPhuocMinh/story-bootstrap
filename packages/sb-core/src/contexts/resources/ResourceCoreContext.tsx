import { createContext } from 'react';
import { ResourceProps } from '../../types';

const defaultResource: ResourceProps = {
  intent: 'route',
  name: ''
};

const ResourceCoreContext = createContext(defaultResource);

ResourceCoreContext.displayName = 'ResourceCoreContext';

export default ResourceCoreContext;
