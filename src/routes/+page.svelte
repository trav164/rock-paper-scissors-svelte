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
	<div class="flex h-screen">
		<div class="m-auto bg-slate-200 shadow-lg rounded-lg h-64 p-6">
			<h1 class="text-3xl font-bold underline">
				Rock Paper Scissors Game with Svelte and Supabase
			</h1>

			{#if data.session}
				<p>Welcome, {data.session.user.email}</p>

				<form action="/logout" method="POST" use:enhance={submitLogout}>
					<button
						class="bg-red-500 p-2 rounded text-white font-bold text-md shadow hover:bg-red-800 focus:outline-none focus:shadow-outline"
						type="submit">Logout</button
					>
				</form>
			{:else}
				<p>Lets play some rock paper scissors!</p>
				<div class="flex bg-red-400">
					<button
						class="font-serif p-4 font-medium bg-gradient-to-r from-[#0BAB64] to-[#3BB78F] text-slate-200 shadow-lg rounded-lg"
						><a href="/login">Login</a></button
					>
					<button
						class="p-4 font-medium bg-gradient-to-r from-[#FE5858] to-[#EE9617] text-slate-200 shadow-lg rounded-lg"
						><a href="/register">Register</a></button
					>
				</div>
			{/if}
		</div>
	</div>
</main>
