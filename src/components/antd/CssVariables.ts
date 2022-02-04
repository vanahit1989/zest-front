/**
 * https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
 * declare here antd variables and additional variables
 *
 * antd variables should be declared in camel case,
 * it will be formatted in kebab case and used in less loader to overwrite antd styles
 *
 * !!!
 * Please, use full color codes (i.e. #eeeeee instead of #eee).
 * And don't use less variables as values (like `inputHoverBorderColor: 'primaryColor'`).
 * Otherwise ColorHelper will not work properly.
 * !!!
 */

import _ from 'lodash';

export enum Colors {
  PrimaryColor = '#602DD3',
  SecondaryColor = '#9A49FF',
  InfoColor = '#0078F9',
  InfoColorHover = '#3295FF',
  SuccessColor = '#39B473',
  SuccessColorHover = '#2ECB77',
  WarningColor = '#F6AE2D',
  WarningColorHover = '#ECBE6C',
  ErrorColor = '#FF4141',
  ErrorColorHover = '#FF6161',
  White = '#ffffff',
  BodyBackground = '#ffffff',
  Grey = '#606060',
  DisabledGrey = '#6060604D',
  InputBorderColor = '#ECECEC',
  LightGrey = '#9E9E9E',
  DisabledLightGrey = '#606060B2',
  TextColorPrimary = '#1C2732',
  InputBackgroundLight = '#F9F9F9',
}
export enum FontSizes {
  Font8 = '8px',
  Font12 = '12px',
  Font14 = '14px',
  Font16 = '16px',
  Font24 = '24px',
  Font32 = '32px',
  Font40 = '40px',
}

export enum Spacing {
  Spacing4 = '4px',
  Spacing8 = '8px',
  Spacing12 = '12px',
  Spacing16 = '16px',
  Spacing24 = '24px',
  Spacing40 = '40px',
  Spacing64 = '64px',
}

export enum LineHeights {
  ExtraShort = '1',
  Short = '1.25',
  Tall = '1.28',
  MediumTall = '1.5',
  ExtraTall = '1.7',
}

export enum BorderRadiuses {
  Radius4 = '4px',
  Radius8 = '8px',
  Radius12 = '12px',
  Radius16 = '16px',
  Radius20 = '20px',
}

export enum Sizes {
  HeightBase = '40px',
  HeightSmall = '20px',
}

export const CssColors = {
  // Primary
  primaryColor: Colors.PrimaryColor,
  primaryColorHover: Colors.SecondaryColor,
  primaryColorActive: Colors.SecondaryColor,
  primaryColorOutline: Colors.SecondaryColor,
  primaryColorDeprecatedDg: Colors.SecondaryColor,
  primaryColorDeprecatedBorder: Colors.SecondaryColor,

  // Success
  successColor: Colors.SuccessColor,
  successColorHover: Colors.SuccessColorHover,
  successColorActive: Colors.SuccessColorHover,
  successColorOutline: Colors.SuccessColorHover,
  successColorDeprecatedDg: Colors.SuccessColorHover,
  successColorDeprecatedBorder: Colors.SuccessColorHover,

  // Danger
  errorColor: Colors.ErrorColor,
  errorColorHover: Colors.ErrorColorHover,
  errorColorActive: Colors.ErrorColorHover,
  errorColorOutline: Colors.ErrorColorHover,
  errorColorDeprecatedDg: Colors.ErrorColorHover,
  errorColorDeprecatedBorder: Colors.ErrorColorHover,

  // Warning
  warningColor: Colors.WarningColor,
  warningColorHover: Colors.WarningColorHover,
  warningColorActive: Colors.WarningColorHover,
  warningColorOutline: Colors.WarningColorHover,
  warningColorDeprecatedDg: Colors.WarningColorHover,
  warningColorDeprecatedBorder: Colors.WarningColorHover,

  // Info
  infoColor: Colors.InfoColor,
  infoColorHover: Colors.InfoColorHover,
  infoColorActive: Colors.InfoColorHover,
  infoColorOutline: Colors.InfoColorHover,
  infoColorDeprecatedDg: Colors.InfoColorHover,
  infoColorDeprecatedBorder: Colors.InfoColorHover,

  linkColor: '#2469F5',
  linkHoverColor: '#2469F5',
  textColorPrimary: '#1C2732',
  textColorSecondary: '#121920',

  // non antd
  defaultBg: '#f0f0f0',
};

export const CssSizes = {
  fontSizeSmall: FontSizes.Font12,
  fontSizeBase: FontSizes.Font14,
  fontSizeLarge: FontSizes.Font24,
  heading1Size: FontSizes.Font40,
  heading2Size: FontSizes.Font32,
  heading3Size: FontSizes.Font24,
  heading4Size: FontSizes.Font16,
  heading5Size: FontSizes.Font14,
  heading6Size: FontSizes.Font12,
  borderRadiusBase: BorderRadiuses.Radius20,
  borderRadiusSm: BorderRadiuses.Radius20,
  // non antd
  basicHeight: '40px',
};

export const CssOtherVars = {
  linkDecoration: 'none',
  linkHoverDecoration: 'underline',
};

export const CssSpacing = {};

export const CSSBtnStyles = {
  btnFontWeight: '400',
  borderRadiusBase: BorderRadiuses.Radius20,
  borderRadiusSmall: BorderRadiuses.Radius20,
  btnFontSizeSm: FontSizes.Font14,
  btnFontSizeBase: FontSizes.Font14,
  btnPaddingHorizontalBase: Spacing.Spacing24,
  btnPaddingHorizontalSmall: Spacing.Spacing8,
  btnHeightBase: Sizes.HeightBase,
  btnHeightSm: Sizes.HeightSmall,
  btnLineHeightBase: LineHeights.ExtraTall,
  btnLineHeightSm: LineHeights.Short,
  btnDefaultColor: Colors.Grey,
  btnDefaultBg: Colors.White,
  btnDefaultBorder: Colors.White,
  btnDefaultGhostColor: Colors.Grey,
  btnDefaultGhostBg: 'transparent',
  btnDefaultGhostBorder: Colors.Grey,
  btnDangerColor: Colors.White,
  btnDangerBg: Colors.ErrorColor,
  btnDangerBorder: Colors.ErrorColor,
  btnSuccessColor: Colors.White,
  btnSuccessBg: Colors.SuccessColor,
  btnSuccessBorder: Colors.SuccessColor,
};

export const CssInputStyles = {
  inputHeightBase: Sizes.HeightBase,
  inputPlaceholderColor: Colors.LightGrey,
  inputHoverBorderColor: Colors.SecondaryColor,
  inputDisabledColor: Colors.DisabledGrey,
};

export const CssProgressStyles = {
  progressDefaultColor: Colors.LightGrey,
};

export const CssVariables = {
  ...CssColors,
  ...CssSizes,
  ...CssOtherVars,
  ...CSSBtnStyles,
  ...CssInputStyles,
  ...CssProgressStyles,
};

function getKebabVariables(variables: Record<string, string>) {
  const entriesKebab = Object.entries(variables).map(([key, value]) => {
    return [_.kebabCase(key), value];
  });
  return Object.fromEntries(entriesKebab);
}

export const CssVariablesKebabCase = getKebabVariables(CssVariables);
