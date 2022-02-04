import React from 'react';
import {
  SGroup,
  SInput,
  SPassword,
  SSearch,
  STextArea,
} from 'src/components/base/Input/style';
import {
  TGroupProps,
  TInputProps,
  TPasswordProps,
  TSearchProps,
  TTextAreaProps,
} from 'src/components/base/Input/types';

export function Input(props: TInputProps) {
  return <SInput {...props} />;
}

export function Password(props: TPasswordProps) {
  return <SPassword {...props} />;
}

export function TextArea(props: TTextAreaProps) {
  return <STextArea {...props} />;
}

export function Search(props: TSearchProps) {
  return <SSearch {...props} />;
}

export function Group(props: TGroupProps) {
  return <SGroup {...props} />;
}
