import { redirect, error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const { type } = params;

    // Validate the type
    if (type !== 'urban' && type !== 'rural') {
        throw error(404, 'Not found');
    }

    // Continue to load the page if the type is valid
    return {
        type
    };
};


/* ---------- OLD CODE: */

// src/routes/(app)/projects/[year]/[quarter]/+page.ts

// import type { PageLoad } from './$types';

// export const load: PageLoad = async ({ params }) => {
//   const { year } = params;

//   // You can add additional logic here as needed
//   return {
//     year,
//   };
// };