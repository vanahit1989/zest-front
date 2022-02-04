import { FontSizes } from 'core/CssVariables';
import styled from 'styled-components';
import { Typography } from 'antd';
import { TParagraphProps, TTextProps, TTitleProps } from './types';

const { Paragraph, Text, Title } = Typography;

const fontSizes = [
  FontSizes.Font40,
  FontSizes.Font32,
  FontSizes.Font24,
  FontSizes.Font16,
  FontSizes.Font14,
  FontSizes.Font12,
  FontSizes.Font8,
];

export const SText = styled(Text)`
  font-size: ${(props: TTextProps) => fontSizes[props.level - 1]};
`;

export const STitle = styled(Title)`
  font-size: ${(props: TTitleProps) => fontSizes[props.level - 1]};
`;

export const SParagraph = styled(Paragraph)`
  font-size: ${(props: TParagraphProps) => fontSizes[props.level - 1]};
`;
