import { map } from 'lodash';

type CheckRoles = {
  permissions: Array<string>;
  roles: Array<string>;
};

/**
 * This is a function check roles when using AuthProvider
 * @returns {Boolean}
 */

const useCheckRoles = ({
  permissions = [],
  roles = []
}: CheckRoles): boolean => {
  return map(roles, role => permissions.includes(role)).includes(true);
};

export default useCheckRoles;
