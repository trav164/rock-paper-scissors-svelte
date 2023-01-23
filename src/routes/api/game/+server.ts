import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request, locals }) => {
    const req = await request.json();
    const { data, error: err } = await locals.sb
        .from("games")
        .update({ player_score: req.player_score, computer_score: req.computer_score })
        .eq('user_id', locals.session.user.id)
        .select();

    if (err) {
        console.warn(err);
    }

    return json(data);
}