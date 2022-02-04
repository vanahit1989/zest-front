import { Colors } from './core/CssVariables';

export type TThemeProps = {
  input: {
    backgroundColor: string;
    placeholder: string;
    disabledPlaceholder: string;
  };
};
export const DarkTheme = {
  input: {
    backgroundColor: Colors.InputBackgroundLight,
    placeholder: Colors.LightGrey,
    disabledPlaceholder: Colors.DisabledLightGrey,
  },
};
export const LightTheme: TThemeProps = {
  input: {
    backgroundColor: Colors.InputBackgroundLight,
    placeholder: Colors.LightGrey,
    disabledPlaceholder: Colors.DisabledLightGrey,
  },
};
