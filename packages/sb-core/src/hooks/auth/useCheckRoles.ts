import { map } from 'lodash';

/**
 *
 * This is a function check roles when using AuthProvider
 *
 * @returns {Boolean}
 */

const useCheckRoles = (permissions: string[] = [], roles: string[] = []) => {
  return map(roles, role => permissions.includes(role)).includes(true);
};

export default useCheckRoles;
