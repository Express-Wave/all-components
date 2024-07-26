// src/routes/(app)/projects/[year]/[quarter]/+page.ts

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { year } = params;

  // You can add additional logic here as needed
  return {
    year,
  };
};
