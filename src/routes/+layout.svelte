<script lang="ts">
	import '../app.css'; // tailwind
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />
