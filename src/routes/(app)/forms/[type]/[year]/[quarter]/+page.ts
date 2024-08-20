/* 
RELATIVE PATH: 
src\routes\(app)\forms\[type]\[year]\[quarter]\+page.ts
---------------------------------------------------------------------*/

import { redirect } from '@sveltejs/kit';

export async function load({ url, params }) {
    const { type, year, quarter } = params;

    // Check if URL ends with `/forms/[type]/[year]/[quarter]` without further path
    if (url.pathname === `/forms/${type}/${year}/${quarter}`) {
        throw redirect(302, `/forms/${type}/${year}/${quarter}/overview`);
    }

    // Return an empty object or data to proceed with normal page loading
    return {};
}