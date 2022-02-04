import React from 'react';
import { SButton } from 'src/components/base/Button/style';
import { TButtonProps } from 'src/components/base/Button/types';

function Button(props: TButtonProps) {
  return <SButton {...props} />;
}

export default Button;
