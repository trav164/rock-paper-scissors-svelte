import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {
    // console.warn('hooks.server.ts');
    // console.warn({ event });
    const { session, supabaseClient } = await getSupabase(event);

    event.locals.sb = supabaseClient;
    event.locals.session = session;

    return resolve(event);
}