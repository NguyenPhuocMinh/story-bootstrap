import React, { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

/**
 * https://reactrouter.com/docs/en/v6/api#navlink
 */
const NavLinkRef = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  return <NavLink ref={ref} {...props} />;
});

NavLinkRef.displayName = 'NavLinkRef';

export default NavLinkRef;
