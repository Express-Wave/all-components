// src/routes/forms/urban/[year]/[quarter]/+page.ts

import { redirect } from '@sveltejs/kit';

export async function load({ url, params }) {
    const { year, quarter } = params;

    // Check if URL ends with `/forms/urban/[year]/[quarter]` without further path
    if (url.pathname === `/forms/urban/${year}/${quarter}`) {
        throw redirect(302, `/forms/urban/${year}/${quarter}/overview`);
    }

    // Return an empty object or data to proceed with normal page loading
    return {};
}
