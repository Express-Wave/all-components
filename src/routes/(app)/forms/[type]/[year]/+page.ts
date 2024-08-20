/* 
RELATIVE PATH:
src\routes\(app)\forms\[type]\[year]\+page.ts 
----------------------------------------------------------*/
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { year } = params;

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Calculate the valid range of years (within the last 5 years)
  const validYears = Array.from({ length: 5 }, (_, i) => currentYear - i);

  // Convert the `year` param to a number and check if it's valid
  const yearNumber = parseInt(year, 10);
  if (!validYears.includes(yearNumber)) {
    throw error(404, 'Invalid year'); // Throw a 404 error if the year is invalid
  }

  // If the year is valid, return it along with the quarter
  return {
    year: yearNumber,
  };
};