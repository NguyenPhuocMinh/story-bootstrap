import { ThemeOptions } from '@mui/material';
import { FC, ReactElement, ComponentType, ReactNode, Component } from 'react';
import { NavigateOptions, Location, NavigateFunction } from 'react-router-dom';
import { AUTH_TYPES } from './constants';

/**
 * authProvider types
 */

export type Identifier = string | number;

export interface UserProps {
  id: Identifier;
  fullName?: string;
  photoURL?: string;
  [key: string]: any;
}

export type AuthProvider = {
  register: (params: any) => Promise<any>;
  login: (params: any) => Promise<any>;
  logout: (params: any) => Promise<void | false | string>;
  checkAuth: (params: any) => Promise<any>;
  checkError: (error: any) => Promise<void>;
  getPermissions: (params: any) => Promise<any>;
  getIdentity: () => Promise<UserProps>;
  loginWithGoogle?: () => Promise<any>;
  loginWithFacebook?: () => Promise<any>;
  [key: string]: any;
};

export type InitialState = any;

export type AuthTypes =
  | typeof AUTH_TYPES.AUTH_REGISTER
  | typeof AUTH_TYPES.AUTH_LOGIN
  | typeof AUTH_TYPES.AUTH_LOGOUT
  | typeof AUTH_TYPES.AUTH_CHECK
  | typeof AUTH_TYPES.AUTH_ERROR
  | typeof AUTH_TYPES.AUTH_GET_PERMISSIONS;

/**
 * WithPermission Props
 */
export interface WithPermissionProps {
  authParams?: {
    route: string;
  };
  component: any;
  location: any;
  navigate: any;
}

/**
 * Root Store Params
 */

export interface RootStoreParams {
  customReducers: any;
  initialState?: InitialState;
}

/**
 * Resource Core Props
 */
export interface ResourceCoreProps {
  name: string | any;
  component: ComponentType;
  location: Location;
  navigate?: NavigateOptions;
}

/**
 * Common component props
 */

export type TitleComponent = string | ReactElement<any> | any;

export type ResourceElement = ReactElement<ResourceProps>;

export type ResolveResourceFunction = (
  permissions: any
) => ResourceElement[] | Promise<ResourceElement[]>;

export type BootStrapChildren = ReactNode;

export type ResourceProps = {
  intent?: 'route' | 'registration';
  name?: string;
};

export type CatchAllComponentProps = {
  title?: TitleComponent;
};

export type CatchAllComponent = ComponentType<CatchAllComponentProps> | any;

export type DashBoardComponentProps = {
  title?: TitleComponent;
};

export type DashboardComponent = ComponentType<DashBoardComponentProps> | any;

export type LayoutComponentProps = {
  title?: TitleComponent;
  dashboard?: DashboardComponent;
  children?: ReactNode;
  logout?: ReactNode;
  theme: any;
};

export type LayoutComponent = ComponentType<LayoutComponentProps>;

export type LoadingComponentProps = {
  theme?: object;
  className?: any;
};

export type LoadingComponent = FC<LoadingComponentProps>;

export interface LoginComponentProps extends Component {}

export interface RegisterComponentProps {
  title?: TitleComponent;
  theme?: object;
}

export type LoginComponent = ComponentType<LoginComponentProps>;

export type RegisterComponent = ComponentType<RegisterComponentProps>;

export type LogoutComponentProps = {
  title?: TitleComponent;
  theme?: any;
};

export type LogoutComponent = ComponentType<LogoutComponentProps>;

/**
 * BootStrap Props
 */

export interface BootStrapCoreProps {
  title?: ReactNode;
  dashboard?: ReactNode;
  layout?: ReactNode;
  loading?: ReactNode;
  catchAll?: ReactNode;
  loginPage?: ReactNode;
  registerPage?: ReactNode;
  logoutButton?: ReactNode;
  authProvider?: AuthProvider;
  i18nProvider: any;
  customReducers?: object;
  initialState?: InitialState;
  theme: ThemeOptions;
  children?: ReactNode;
}

/**
 * BootStrap Core UI Props
 */

export interface BootStrapCoreUIProps {
  title?: any;
  dashboard?: any;
  layout?: any;
  loading?: any;
  catchAll?: any;
  loginPage?: any;
  registerPage?: any;
  logout?: any;
  children?: any;
  theme?: ThemeOptions;
}

/**
 * BootStrap Core UI Router Props
 */

export interface BootStrapCoreUIRouterProps {
  title?: any;
  layout: any;
  dashboard?: any;
  catchAll: any;
  loading: any;
  logout?: any;
  children?: any;
  theme?: ThemeOptions;
  location: Location;
  navigate: NavigateFunction;
}

/**
 * BootStrap Core Context Props
 */

export interface BootStrapCoreContextProps {
  authProvider?: AuthProvider | any;
  i18nProvider: any;
  children?: ReactElement;
  customReducers?: any;
  initialState?: InitialState;
}

/**
 * Routes With Layout Props
 */

export interface RoutesWithLayoutProps {
  title: TitleComponent;
  dashboard: DashboardComponent;
  catchAll: CatchAllComponent;
  children: any;
  location: Location;
  navigate: NavigateFunction;
}

/**
 * Redirection Props
 */

export interface RedirectionProps {
  to: string;
}

/**
 * Translate Props
 */

export interface TranslateProps {
  translate: any;
  i18n: any;
}
