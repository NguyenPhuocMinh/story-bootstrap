import { createElement } from 'react';

/**
 * Dynamic create icon material
 * @param {String} icon
 * @param {Object} registerIcons
 */
const createIcon = ({ icon, registerIcons }) => {
  return createElement(registerIcons[icon]);
};

export default createIcon;
