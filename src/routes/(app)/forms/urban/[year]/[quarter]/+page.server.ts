import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    // Extract year and quarter from params
    const { year, quarter } = params;

    // Redirect to the default page if no specific item is provided
    return {
        redirect: `/forms/urban/${year}/${quarter}/overview`
    };
}