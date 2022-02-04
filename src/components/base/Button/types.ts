import { Colors } from 'core/CssVariables';
import { ButtonProps } from 'antd';

export enum TButtonTypes {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
  Danger = 'danger',
  Primary = 'primary',
  Default = 'default',
}

export type TButtonColors = {
  color: Colors;
  hoverColor: Colors;
};

export type TButtonColorProp = {
  color?: TButtonTypes;
  outline?: boolean;
};

export type TButtonStyles = { [key in TButtonTypes]: TButtonColors };
export type TButtonProps = ButtonProps & TButtonColorProp;
