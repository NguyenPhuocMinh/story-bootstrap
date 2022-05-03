import { createElement } from 'react';
import { CreateIconProps } from '../types';

/**
 * Dynamic create icon material
 * @param {String} icon
 * @param {Object} registerIcons
 */
const createIcon = ({ icon, registerIcons }: CreateIconProps) => {
  return createElement(registerIcons[icon]);
};

export default createIcon;
