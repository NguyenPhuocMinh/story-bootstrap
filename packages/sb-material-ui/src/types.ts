import { ReactNode, PropsWithChildren, ComponentType } from 'react';
import {
  DashBoardComponentProps,
  TitleComponent,
  LoadingComponentProps,
  LayoutComponentProps,
  AnchorTypes
} from 'sb-core';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

/**
 * Layout Props
 */
export interface LayoutProps extends LayoutComponentProps {
  appBar: any;
  menu?: any;
  version?: string;
  drawerWidth: number;
  location: any;
  navigate: any;
}

/**
 * Dashboard Props
 */
export interface DashBoardProps {
  registerIcons: object | any;
  location: any;
}

/**
 * Button group Props
 */
export interface ButtonGroupProps {
  changeTheme: (theme: string) => void;
}

/**
 * Sub menu Props
 */

export interface SubMenuProps {
  primaryText: string;
  dense: boolean;
  children: ReactNode;
  leftIcon: string;
  registerIcons: object | any;
}

/**
 * Title Props
 */
export interface TitleProps {
  className?: string;
  defaultTitle?: string;
  record?: any;
  title?: TitleComponent;
}

/**
 * Create Icon Mui Props
 */
export type CreateIconProps = {
  icon: string | any;
  registerIcons: RegisterIconProps;
};

type RegisterIconProps = ReturnType<() => JSX.Element>;

export type ClassesOverride<
  UseStyles extends (props: any) => Record<string, string>
> = Partial<Record<keyof ReturnType<UseStyles>, string>>;

export interface SbThemeOverrides extends OverridesStyleRules {
  [key: string]: any;
}

/**
 * Popup Mui Props
 */
export interface PopupProps {
  open: boolean;
  anchorEl: Element;
  languages: Array<{
    name: string;
    countryCode: string;
    [key: string]: string;
  }>;
  handleClose: () => void;
  changeLanguage: (language: any) => void;
}

/**
 * Menu Item Mui Props
 */
export type MenuItemProps = PropsWithChildren<{
  className?: object | any;
  primaryText: ReactNode;
  leftIcon?: string;
  registerIcons: any;
  onClick?: (e: any) => void;
  tooltipProps?: any;
  to: ToProps;
  location: any;
}>;

export interface ToProps {
  pathname?: string;
  state?: any;
}

export interface LoadingProps extends LoadingComponentProps {
  className: object | any;
  loadingHelperPrimary: string;
  loadingHelperSecondary: string;
}

export interface DashboardItemProps extends DashBoardComponentProps {
  registerIcons: any;
  children: ReactNode;
  tooltipProps: any;
}

/**
 * Profile Mui Props
 */
export interface ProfileProps {
  open: boolean;
  anchorEl: Element;
  handleClose: () => void;
  location?: any;
  navigate?: any;
}

/**
 * Setting Mui Props
 */
export interface SettingProps {
  open?: boolean;
  anchor?: AnchorTypes;
  toggleDrawer: () => void;
  changeTheme: () => void;
}

/**
 * Simple Form Props
 */

export type InitialValues = object | any;
export interface SimpleFormBootStrapProps {
  initialValues: InitialValues;
  onSubmit: () => void;
  validationSchema: any;
  formContent: ComponentType<any>;
}

/**
 * NotFound Props
 */
export interface NotFoundProps {
  className: object | any;
  title: TitleComponent;
  location: any;
  navigate: any;
  match: any;
}
