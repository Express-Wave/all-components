import { writable } from 'svelte/store';

export const urbanMenu = writable<string[]>([
  'overview',
  'weekday',
]);

export const ruralMenu = writable<string[]>([
  'overview',
  'weekday',
  'saturday',
  'weekly totals',
  'dashboard',
  'finance',
  'annual statistics',
  'completion'
]);
