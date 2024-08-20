import { readable } from 'svelte/store';

type AnimationDuration = number; // in milliseconds

const defaultDuration: AnimationDuration = 500;

export const animationDuration = readable<AnimationDuration>(defaultDuration);
