import { Button } from 'components/antd';
import styled from 'styled-components';
import {
  TButtonProps,
  TButtonStyles,
  TButtonTypes,
} from 'components/base/Button/types';
import { Colors } from 'core/CssVariables';

const btnStyles: TButtonStyles = {
  [TButtonTypes.Info]: {
    color: Colors.InfoColor,
    hoverColor: Colors.InfoColorHover,
  },
  [TButtonTypes.Warning]: {
    color: Colors.WarningColor,
    hoverColor: Colors.WarningColorHover,
  },
  [TButtonTypes.Success]: {
    color: Colors.SuccessColor,
    hoverColor: Colors.SuccessColorHover,
  },
  [TButtonTypes.Danger]: {
    color: Colors.ErrorColor,
    hoverColor: Colors.ErrorColorHover,
  },
  [TButtonTypes.Primary]: {
    color: Colors.PrimaryColor,
    hoverColor: Colors.SecondaryColor,
  },
  [TButtonTypes.Default]: {
    color: Colors.White,
    hoverColor: Colors.SecondaryColor,
  },
};

const createButtonStyles = (color: TButtonTypes, outline?: boolean) => `
  background-color:  ${outline ? 'transparent' : btnStyles[color].color};
  color: ${outline ? btnStyles[color].color : Colors.White};
  border-color:  ${outline ? btnStyles[color].color : 'transparent'};
    &:disabled, &:hover:disabled  {
     background-color:  ${
       outline ? Colors.White : `${btnStyles[color].color}4D`
     }; // 30% opacity 

     color: ${outline ? `${btnStyles[color].color}4D` : `${Colors.White}B2`};
     border-color: ${outline ? `${btnStyles[color].color}4D}` : 'transparent'}; 
  };
  &:hover, &:active, &:focus {
     background-color:  ${
       outline ? 'transparent' : btnStyles[color].hoverColor
     };
     color: ${outline ? btnStyles[color].hoverColor : Colors.White};
     border-color: ${outline ? btnStyles[color].hoverColor : 'transparent'};
  };
`;

export const SButton = styled(Button)`
  ${(props: TButtonProps) => {
    switch (props.type) {
      case 'default':
        return createButtonStyles(TButtonTypes.Default, props.outline);
      case 'primary':
        if (props.color) {
          return createButtonStyles(props.color, props.outline);
        }
        return createButtonStyles(TButtonTypes.Primary, props.outline);
      default:
        return createButtonStyles(TButtonTypes.Primary, props.outline);
    }
  }}
`;
