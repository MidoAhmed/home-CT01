import { IRule } from '../interfaces/rule.interface';

export const RULES: IRule[] = [
  {
    name: 'rule::firstname::length',
    pattern: /^.{3,}$/i,
  },
  {
    name: 'rule::lastname::length',
    pattern: /^.{3,}$/i,
  },
  {
    name: 'rule:✉:alpha_rate',
    pattern: /^.[A-Z0-9]{1,}@/i,
  },
  {
    name: 'rule:✉:number_rate',
    pattern: /^.[A-Z0-9]{1,}@/i,
  },
  {
    name: 'rule::price::quotation_rate',
    pattern: '',
  },
  {
    name: 'rule::registernumber::blacklist',
    pattern: '',
  },
];

export const mapNamePattern = (ruleName: string) : IRule | undefined => {
  return RULES.find((rule: IRule) => rule.name === ruleName);
};
