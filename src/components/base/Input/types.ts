import { Colors } from 'core/CssVariables';
import { InputProps } from 'antd';
import {
  GroupProps,
  PasswordProps,
  TextAreaProps,
  SearchProps,
} from 'components/antd/Input';

export enum TInputTypes {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
  Danger = 'danger',
}

export type TInputColors = {
  color: Colors;
  hoverColor: Colors;
};

export type TInputColorProp = {
  color?: TInputTypes;
};

export type TInputStyles = { [key in TInputTypes]: TInputColors };
export type TInputProps = InputProps & TInputColorProp;
export type TPasswordProps = TInputProps & PasswordProps;
export type TGroupProps = TInputProps & GroupProps;
export type TTextAreaProps = TInputProps & TextAreaProps;
export type TSearchProps = TInputProps & SearchProps;
