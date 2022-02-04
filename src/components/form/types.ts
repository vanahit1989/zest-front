import { Rule } from 'antd/es/form';

export type TRegexPatters = {
  [key: string]: RegExp;
};
export type TValidationRules = {
  [key: string]: Rule[];
};
