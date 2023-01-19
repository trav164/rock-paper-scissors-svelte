<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Score from '$lib/components/score.svelte';
	import type { Scores } from 'src/models/games.model';
	import type { PageData } from './$types';

	export let data: PageData;

	let currentWinner: string | null = null;

	const selectWinner = (player: string) => {
		const computerMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)][0];
		let result;
		switch (player + computerMove) {
			case 'rs':
			case 'sp':
			case 'pr':
				result = 'player';
				score.player_score++;
				break;
			case 'sr':
			case 'ps':
			case 'rp':
				result = 'computer';
				score.computer_score++;
				break;
			case 'pp':
			case 'ss':
			case 'rr':
				result = null;
				break;
			default:
				result = null;
				break;
		}
		currentWinner = result;
		return result;
	};

	const submitScore: SubmitFunction = ({ form, data, action, cancel }) => {
		console.log(form);
		console.log(data);

		// if (!currentWinner) cancel(); // tie

		console.log('CURRENT WINNER', currentWinner);
		return async ({ result, update }) => {
			await applyAction(result);
			await invalidateAll();
		};
	};

	// to pass to scores component
	let score: Scores = {
		player_score: data.player_score,
		computer_score: data.computer_score
	};
</script>

<main class="bg-gray-900">
	<Score {score} />
	<div class="flex flex-row gap-12 items-center justify-center min-h-screen bg-gray-900">
		<form
			method="POST"
			action="?/updateWinner&winner={selectWinner('r')}"
			use:enhance={submitScore}
		>
			<button
				type="submit"
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			>
				<img src="./images/rock.png" alt="" class="w-24" />
			</button>
		</form>

		<form
			method="POST"
			action="?/updateWinner&winner={selectWinner('p')}"
			use:enhance={submitScore}
		>
			<button
				type="submit"
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			>
				<img src="./images/paper.png" alt="" class="w-24" />
			</button>
		</form>

		<form
			method="POST"
			action="?/updateWinner&winner={selectWinner('s')}"
			use:enhance={submitScore}
		>
			<button
				type="submit"
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			>
				<img src="./images/scissors.png" alt="" class="w-24" />
			</button>
		</form>
	</div>
</main>
