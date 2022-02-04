import { Tag } from 'antd';
import { TagProps } from 'antd/es/tag';
import styled, { ThemeProps } from 'styled-components';
import { TThemeProps } from 'src/theme';
import { TButtonTypes } from 'src/components/base/Button/types';
import { Colors } from 'src/core/CssVariables';
import { TTag } from 'src/components/base/Tag/types';

const createTagStyles = (outline?: boolean, color?: boolean) => `
  border: ${outline && 0};
  background-color: ${color || 'transparent'};
  font-size: 8px;
  margin-right: 4px;
  padding: 0;
  .anticon+span {
  margin-left: 4px;
  }
`;

export const STag = styled(Tag)`
  ${(props: TTag & ThemeProps<TThemeProps>) => {
    return createTagStyles(props.outline);
  }}
`;
