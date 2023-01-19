import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const { data, error: err } = await locals.sb.from("games").select();

    if (err) {
        // TODO error handling
        console.error(err);
    }

    // returns an array of 1 object
    return data[0];
}

export const actions: Actions = {
    updateWinner: async ({ url, locals }) => {
        console.warn('actions getting hit: ', url.searchParams.get('winner'));
        // console.log(url, locals);
    }
}