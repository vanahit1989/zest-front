import React from 'react';
import { SButton } from 'components/base/Button/style';
import { TButtonProps } from 'components/base/Button/types';

function Button(props: TButtonProps) {
  return <SButton {...props} />;
}

export default Button;
