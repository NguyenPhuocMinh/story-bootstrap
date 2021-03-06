import { ReactNode, PropsWithChildren, ComponentType } from 'react';
import {
  DashBoardComponentProps,
  TitleComponent,
  LoadingComponentProps,
  LayoutComponentProps,
  AnchorType,
  VariantType,
  MarginType
} from 'sb-core';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export interface RouteProps {
  parent: {
    pathName: string;
    routerName: string;
  };
  pathName: string;
  leftIcon: string;
  routerName: string;
}

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
  routes: Array<RouteProps>;
  registerIcons: object | any;
}

/**
 * Dashboard Props
 */
export interface DashBoardProps {
  registerIcons: object | any;
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
    name: string; // see react-country-flag
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
  menus: Array<{
    id: string;
    name: string;
    title: string;
    icon: string;
    onClick: (params: any) => void;
    divider: boolean;
  }>;
  registerIcons: object | any;
}

/**
 * Setting Mui Props
 */
export interface SettingProps {
  open?: boolean;
  anchor?: AnchorType;
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

export interface CommonInputProps {
  label: string;
  placeholder: string;
  source: string;
  values: any;
  type: any;
  variant?: VariantType;
  margin: MarginType;
  handleChange: () => void;
  handleBlur: () => void;
  errors: any;
  touched: boolean;
  required: boolean;
  multiline: boolean;
  rows: number | string;
  className: any;
  disabled: boolean;
  size: 'medium' | 'small';
  startAdornment: any;
  endAdornment: any;
  sx: object | any;
}

export interface TextInputBootStrapProps extends CommonInputProps {}

export interface NumberInputBootStrapProps extends CommonInputProps {}

export interface NumberFormatBootStrapProps {
  onChange: (event: { target: { name: string; value: number } }) => void;
  name: string;
}

export interface SwitchInputBootStrapProps extends CommonInputProps {
  value: any;
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  defaultChecked: boolean;
  disabled: boolean;
  disableRipple: boolean;
}

export interface SelectInputBootStrapProps extends CommonInputProps {
  value?: any;
  choices?: Array<{
    id?: string;
    name?: string;
  }>;
}

export interface SearchInputBootStrapProps extends CommonInputProps {
  value: any;
  handleReset: () => void;
}

export interface ButtonRefreshProps {
  title?: TitleComponent;
}

export interface BreadCrumbsProps {
  registerIcons: object | any;
  routes: Array<RouteProps>;
}

export interface CountryFlagProps {
  style: object | any;
  countryCode: string;
}
