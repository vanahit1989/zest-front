import React from 'react';
import {
  TParagraphProps,
  TTextProps,
  TTitleProps,
} from 'src/components/base/Typography/types';
import {
  SParagraph,
  SText,
  STitle,
} from 'src/components/base/Typography/style';

export function Title(props: TTitleProps) {
  return <STitle {...props} />;
}

export function Text(props: TTextProps) {
  return <SText {...props} />;
}

export function Paragraph(props: TParagraphProps) {
  return <SParagraph {...props} />;
}
