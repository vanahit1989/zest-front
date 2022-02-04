import {
  ParagraphProps,
  TitleProps,
  TextProps,
} from 'components/antd/Typography';

export type TLevel = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
};
export type TTextProps = TextProps & TLevel;
export type TTitleProps = TitleProps & TLevel;
export type TParagraphProps = ParagraphProps & TLevel;
