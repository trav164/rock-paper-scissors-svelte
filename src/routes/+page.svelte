<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { supabase } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	<div class="flex items-center justify-center min-h-screen bg-gray-900">
		<div class="flex flex-col items-center bg-slate-300 p-8 rounded shadow-xl">
			<h1 class="font-bold md:text-center sm:text-lg md:text-3xl xl:text-5xl">
				Rock Paper Scissors Game
			</h1>
			<p class="font-light text-sm">Built with SvelteKit & Supabase</p>

			{#if data.session}
				<div class="mt-12">
					<p>Welcome, <b>{data.session.user.email}</b></p>
					<div class="flex flex-col w-full items-center justify-center gap-6 mt-12 md:flex-row">
						<button
							class="bg-violet-500 w-full h-12 md:w-24 rounded text-white font-semibold shadow-lg hover:bg-violet-600 hover:scale-105 transition duration:1000 focus:border-none"
							type="submit"><a href="/play">Play</a></button
						>
						<form
							action="/logout"
							method="POST"
							use:enhance={submitLogout}
							class="w-full h-12 md:w-24"
						>
							<button
								class="bg-gray-900 w-full h-12 md:w-24 rounded text-white font-semibold shadow-lg hover:bg-gray-700 transition duration:1000"
								type="submit">Logout</button
							>
						</form>
					</div>
				</div>
			{:else}
				<div class="w-full">
					<div class="flex flex-col items-center justify-center gap-6 mt-12 md:flex-row">
						<button
							class="bg-violet-500 w-full h-12 md:w-24 rounded text-white font-semibold shadow-lg hover:bg-violet-600 transition duration:1000"
							><a href="/login">Login</a></button
						>
						<button
							class="bg-gray-900 w-full h-12 md:w-24 rounded text-white font-semibold shadow-lg hover:bg-gray-700 transition duration:1000"
							><a href="/register">Register</a></button
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>
