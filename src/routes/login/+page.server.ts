import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        const { data, error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string,
        })


        if (err) {
            console.warn(err);
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid login credentials.',
                })
            }
            return fail(500, {
                error: 'Server error. Please try again later.',
            })
        }

        throw redirect(303, '/');
    }
}