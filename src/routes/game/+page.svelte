<script lang="ts">
	import Score from '$lib/components/score.svelte';
	import type { Scores } from 'src/models/games.model';
	import type { PageData } from './$types';

	export let data: PageData;

	let gameInfo = data;

	// to pass to scores component
	let scores: Scores = {
		player_score: gameInfo.player_score,
		computer_score: gameInfo.computer_score
	};

	let computerMove: string | null = null;

	const selectWinner = (player: string): string | null => {
		computerMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
		let result;
		switch (player + computerMove[0]) {
			case 'rs':
			case 'sp':
			case 'pr':
				result = 'player';
				scores.player_score++;
				break;
			case 'sr':
			case 'ps':
			case 'rp':
				result = 'computer';
				scores.computer_score++;
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
		return result;
	};

	const handleClick = async (move: string) => {
		if (!selectWinner(move)) return; // don't patch to database if the game is a draw.
		const response = await fetch('/api/game', {
			method: 'POST',
			body: JSON.stringify(scores),
			headers: {
				'content-type': 'application/json'
			},
			credentials: 'include'
		});

		let returnedData = await response.json();
		gameInfo = returnedData[0];
	};
</script>

<main class="bg-gray-900">
	{#if computerMove}
		<h1 class="capitalize text-white font-3xl font-bold">Computer Move: {computerMove}</h1>
	{/if}

	<Score score={scores} />
	<div class="flex flex-row gap-12 items-center justify-center min-h-screen bg-gray-900">
		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 hover:bg-violet-400 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('r')}
		>
			<img src="./images/rock.png" alt="" class="w-24" />
		</button>

		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 hover:bg-violet-400 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('p')}
		>
			<img src="./images/paper.png" alt="" class="w-24" />
		</button>

		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 hover:bg-violet-400 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('s')}
		>
			<img src="./images/scissors.png" alt="" class="w-24" />
		</button>
	</div>
</main>
