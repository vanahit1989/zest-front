import { TRegexPatters, TValidationRules } from './types';

export const regexPatterns: TRegexPatters = {
  oneUpperCase: /[A-Z]+/,
  oneLowerCase: /[a-z]+/,
  oneNumber: /\d/,
  oneSymbol: /[*@!#%&()^~{}]+/,
  letters8: /.{8,}/,
};
export const validationRules: TValidationRules = {
  password: [
    { required: true, message: 'Password is required!' },
    { type: 'regexp', pattern: regexPatterns.oneUpperCase },
    { type: 'regexp', pattern: regexPatterns.oneLowerCase },
    { type: 'regexp', pattern: regexPatterns.oneNumber },
    { type: 'regexp', pattern: regexPatterns.oneSymbol },
    { type: 'regexp', pattern: regexPatterns.letters8 },
  ],
};
