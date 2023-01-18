<script lang="ts">
	import type { Scores } from 'src/models/games.model';

	export let score: Scores;
</script>

<div class="mx-auto rounded shadow-xl p-6 text-white">
	<div class="mx-auto text-center">
		<h1 class="block text-5xl font-bold">Scores</h1>
	</div>
	<div class="flex flex-row justify-evenly text-3xl">
		<h1 class="inline-block">Player: {score.player_score}</h1>
		<h1 class="inline-block">Computer: {score.computer_score}</h1>
	</div>
</div>
