import { linear } from 'svelte/easing';

interface FlyParams {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  x?: number | string;
  y?: number | string;
  opacity?: number;
  reverse?: boolean; // New parameter to reverse the direction
}

interface FlyReturn {
  delay: number;
  duration: number;
  easing: (t: number) => number;
  css: (t: number, u: number) => string;
}

export function fly(node: HTMLElement, {
  delay = 0,
  duration = 200,
  easing = linear,
  x = 0,
  y = 0,
  opacity = 0,
  reverse = false // Default to false, so it behaves as before if not specified
}: FlyParams = {}): FlyReturn {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;

  const od = target_opacity * (1 - opacity);

  let xValue: number = typeof x === 'number' ? x : 0;
  let xUnit: string = 'px';
  if (typeof x === 'string') {
    const xMatch = x.match(/([-\d.]+)(\D+)/);
    if (xMatch) {
      xValue = Number(xMatch[1]);
      xUnit = xMatch[2];
    }
  }

  let yValue: number = typeof y === 'number' ? y : 0;
  let yUnit: string = 'px';
  if (typeof y === 'string') {
    const yMatch = y.match(/([-\d.]+)(\D+)/);
    if (yMatch) {
      yValue = Number(yMatch[1]);
      yUnit = yMatch[2];
    }
  }

  // Adjust values if reverse is true
  const xStart = reverse ? 0 : xValue;
  const xEnd = reverse ? xValue : 0;
  const yStart = reverse ? 0 : yValue;
  const yEnd = reverse ? yValue : 0;

  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
      transform: ${transform} translate(${(1 - t) * xStart + t * xEnd}${xUnit}, ${(1 - t) * yStart + t * yEnd}${yUnit});
      opacity: ${target_opacity - (od * u)}`
  };
}
