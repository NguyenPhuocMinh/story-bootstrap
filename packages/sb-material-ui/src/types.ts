import { ReactNode, PropsWithChildren, ReactElement } from 'react';
import {
  DashBoardComponentProps,
  TitleComponent,
  LoadingComponentProps,
  AnchorTypes,
  LayoutComponentProps
} from 'sb-core';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export interface TitleProps {
  className?: string;
  defaultTitle?: string;
  record?: any;
  title?: TitleComponent;
}

export type CreateIconProps = {
  icon?: string;
  registerIcons: RegisterIconProps;
};

type RegisterIconProps = ReturnType<() => JSX.Element>;

export type ClassesOverride<
  UseStyles extends (props: any) => Record<string, string>
> = Partial<Record<keyof ReturnType<UseStyles>, string>>;

export interface SbThemeOverrides extends OverridesStyleRules {
  [key: string]: any;
}

export interface PopupPropsHelperProps {
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

export interface LoadingHelperProps extends LoadingComponentProps {
  className: object | any;
}

export interface DashboardItemHelperProps extends DashBoardComponentProps {
  registerIcons: any;
  children: ReactNode;
  tooltipProps: any;
}

export interface ProfileHelperProps {
  open: boolean;
  anchorEl: Element;
  handleClose: () => void;
}

export interface ButtonGroupHelperProps {
  changeTheme: (theme: string) => void;
}

export interface LayoutHelperProps extends LayoutComponentProps {
  appBar: ReactElement;
  menu?: any;
  version?: string;
  drawerWidth: number;
}

export interface SettingHelperProps {
  open?: boolean;
  anchor?: AnchorTypes;
  toggleDrawer: () => void;
  changeTheme: () => void;
}
