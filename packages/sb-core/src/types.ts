import { FC, ReactElement, ComponentType, ReactNode } from 'react';
import { RouterProps } from 'react-router-dom';
import { History } from 'history';
import { i18n } from 'i18next';
import { ThemeOptions } from '@mui/material';
import { AUTH_TYPES } from './constants';

/**
 * i18nProvider types
 */

export interface I18nProvider extends i18n {}

export interface TranslateProps {
  translate: any;
  i18n: i18n;
}

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

export type InitialState = object | (() => object);

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
  authParams: any;
  children: any;
  render: any;
  component: any;
}

/**
 * Root Store Params
 */

export interface RootStoreParams {
  history: History;
  customReducers: any;
  initialState?: InitialState;
}

/**
 * Resource Core Props
 */
export interface ResourceCoreProps {
  name: string | any;
  component: ComponentType;
  match?: any;
}

/**
 * Common component props
 */

export type TitleComponent = string | ReactElement<any> | any;

export type ResourceElement = ReactElement<ResourceProps>;

export type ResolveResourceFunction = (
  permissions: any
) => ResourceElement[] | Promise<ResourceElement[]>;

export type BootStrapChildren = ResolveResourceFunction | ReactNode;

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
  theme: ThemeOptions;
};

export type LayoutComponent = ComponentType<LayoutComponentProps>;

export type LoadingComponentProps = {
  theme?: object;
  className?: any;
};

export type LoadingComponent = FC<LoadingComponentProps>;

export interface LoginComponentProps extends RouterProps {
  title?: TitleComponent;
  theme?: object;
}

export interface RegisterComponentProps extends RouterProps {
  title?: TitleComponent;
  theme?: object;
}

export type LoginComponent = ComponentType<LoginComponentProps>;

export type RegisterComponent = ComponentType<RegisterComponentProps>;

export type LogoutComponentProps = {
  title?: TitleComponent;
  theme?: ThemeOptions;
};

export type LogoutComponent = ComponentType<LogoutComponentProps>;

/**
 * BootStrap Props
 */

export interface BootStrapProps {
  title?: TitleComponent;
  dashboard?: DashboardComponent;
  layout?: LayoutComponent;
  loading?: LoadingComponent;
  catchAll?: CatchAllComponent;
  loginPage?: LoginComponent;
  registerPage?: RegisterComponent;
  logoutButton?: LogoutComponent;
  authProvider?: AuthProvider;
  i18nProvider: I18nProvider;
  customReducers?: object;
  history?: History;
  initialState?: InitialState;
  theme?: ThemeOptions;
  children?: BootStrapChildren;
}

/**
 * BootStrap Core UI Props
 */

export interface BootStrapCoreUIProps {
  title?: TitleComponent;
  dashboard?: DashboardComponent;
  layout?: LayoutComponent;
  loading?: LoadingComponent;
  catchAll?: CatchAllComponent;
  loginPage?: LoginComponent;
  registerPage?: RegisterComponent;
  logout?: LogoutComponent;
  children?: BootStrapChildren;
  theme?: object;
}

/**
 * BootStrap Core UI Router Props
 */

export interface BootStrapCoreUIRouterProps {
  title?: TitleComponent;
  layout: LayoutComponent;
  dashboard?: DashboardComponent;
  catchAll: CatchAllComponent;
  loading: LoadingComponent;
  logout?: LogoutComponent;
  children?: BootStrapChildren;
  theme?: object;
}

/**
 * BootStrap Core Context Props
 */

export interface BootStrapCoreContextProps {
  authProvider?: AuthProvider | any;
  i18nProvider: I18nProvider;
  children?: BootStrapChildren;
  history?: History;
  customReducers?: object;
  initialState?: InitialState;
}

/**
 * Routes With Layout Props
 */

export interface RoutesWithLayoutProps {
  title: TitleComponent;
  dashboard: DashboardComponent;
  catchAll: CatchAllComponent;
  children: BootStrapChildren;
}

/**
 * Redirection Props
 */

export interface RedirectionProps {
  to: string;
}
