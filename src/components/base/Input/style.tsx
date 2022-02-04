import { Input } from 'components/antd';
import styled, { ThemeProps } from 'styled-components';
import { Colors } from 'core/CssVariables';
import {
  TGroupProps,
  TInputProps,
  TInputStyles,
  TInputTypes,
  TPasswordProps,
  TSearchProps,
  TTextAreaProps,
} from 'components/base/Input/types';
import {} from 'components/base/Input/index';

const { Password, Search, TextArea, Group } = Input;
const inputStyles: TInputStyles = {
  [TInputTypes.Info]: {
    color: Colors.InfoColor,
    hoverColor: Colors.InfoColorHover,
  },
  [TInputTypes.Warning]: {
    color: Colors.WarningColor,
    hoverColor: Colors.WarningColorHover,
  },
  [TInputTypes.Success]: {
    color: Colors.SuccessColor,
    hoverColor: Colors.SuccessColorHover,
  },
  [TInputTypes.Danger]: {
    color: Colors.ErrorColor,
    hoverColor: Colors.ErrorColorHover,
  },
};

const createInputStyles = (color?: TInputTypes, theme?: any) => `
  padding: 8px 12px;
  background-color:  ${theme.input.backgroundColor};
  color: ${theme.input.placeholder};
  border-color:  ${color ? inputStyles[color].color : Colors.InputBorderColor};
  &:hover {
     box-shadow: ${
       color
         ? `0px 0px 7px 0px ${inputStyles[color].color}21`
         : `0px 0px 7px 0px ${Colors.PrimaryColor}21`
     };
     border-color:  ${
       color ? inputStyles[color].color : Colors.InputBorderColor
     };
  };
  &:active, &:focus,  {
     border-color:  ${color ? inputStyles[color].color : Colors.PrimaryColor};
     box-shadow: none;
  };
  &:disabled, &:disabled:hover, &:disabled:focus, &:disabled:active  {
     cursor: not-allowed;
     border-color:  ${
       color ? inputStyles[color].color : Colors.InputBorderColor
     };
     &::placeholder { 
       color: ${theme.input.disabledPlaceholder};
  };
  &:-webkit-autofill,  &:-internal-autofill-selected  {
        background-color:  ${theme.input.backgroundColor};
  }

  
`;
export const SInput = styled(Input)`
  ${(props: TInputProps & ThemeProps<any>) => {
    return createInputStyles(props.color, props.theme);
  }}
`;

export const SPassword = styled(Password)`
  ${(props: TPasswordProps & ThemeProps<any>) => {
    return createInputStyles(props.color, props.theme);
  }}
`;

export const STextArea = styled(TextArea)`
  ${(props: TTextAreaProps & ThemeProps<any>) => {
    return createInputStyles(props.color, props.theme);
  }}
`;

export const SGroup = styled(Group)`
  ${(props: TGroupProps & ThemeProps<any>) => {
    return createInputStyles(props.color, props.theme);
  }}
`;

export const SSearch = styled(Search)`
  ${(props: TSearchProps & ThemeProps<any>) => {
    return createInputStyles(props.color, props.theme);
  }}
`;
