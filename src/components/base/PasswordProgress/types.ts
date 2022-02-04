import { ChangeEvent } from 'react';

export type TPasswordProgress = {
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // value: string;
  placeholder?: string;
};

export type TValidationRules = {
  [key in TValidationTags]: RegExp;
};

export type TPassedValidations = {
  [key in TValidationTags]?: boolean;
};

export enum TValidationTags {
  LETTERS8 = 'Letters 8',
  LOWERCASE = 'Lower Case',
  UPPERCASE = 'Upper Case',
  SYMBOL = 'Symbol',
  NUMBER = 'Number',
}
