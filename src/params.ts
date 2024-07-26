import type { ParamMatcher } from '@sveltejs/kit';

// Matcher for [year] to ensure it's a number
export const matchYear: ParamMatcher = (param: string): boolean => {
  return /^\d+$/.test(param);
};

// Matcher for [quarter] to ensure it's a string (e.g., "Q1", "Q2", "Q3", "Q4")
export const matchQuarter: ParamMatcher = (param: string): boolean => {
  return ['Q1', 'Q2', 'Q3', 'Q4'].includes(param);
};
