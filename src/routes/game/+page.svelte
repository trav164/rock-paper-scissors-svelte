<script lang="ts">
	import Score from '$lib/components/score.svelte';
	import type { Scores } from 'src/models/games.model';
	import type { PageData } from './$types';

	export let data: PageData;
	let playerMove: string | null = null;
	let computerMove: string | null = null;
	const validMoves = ['rock', 'paper', 'scissors'];

	const selection = (move: string) => {
		computerMove = validMoves[Math.floor(Math.random() * 3)];
		playerMove = move;
		console.warn(selectWinner(move[0], computerMove[0])); // this needs removing from a console warn
	};

	const selectWinner = (player: string, computerMove: string) => {
		let result;
		switch (player + computerMove) {
			case 'rs':
			case 'sp':
			case 'pr':
				result = 'Player';
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
		return result;
	};

	// to pass to scores component
	let score: Scores = {
		player_score: data.player_score,
		computer_score: data.computer_score
	};
</script>

<main class="bg-gray-900">
	<div class="flex flex-col items-center justify-center bg-slate-300 text-2xl text-black font-bold">
		{#if playerMove}
			<h1 class="">Your picked: {playerMove?.toUpperCase()}</h1>
			<h1 class="">Computer picked: {computerMove?.toUpperCase()}</h1>
		{/if}
	</div>
	<Score {score} />
	<div class="flex flex-row gap-12 items-center justify-center min-h-screen bg-gray-900">
		<a href={'#'} on:click={(e) => selection('rock')}>
			<div
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			>
				<img src="./images/rock.png" alt="" class="w-24" />
			</div>
		</a>
		<a href={'#'} on:click={(e) => selection('paper')}>
			<div
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			>
				<img src="./images/paper.png" alt="" class="w-24" />
			</div>
		</a>

		<a href={'#'} on:click={(e) => selection('scissor')}>
			<div
				class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 hover:bg-slate-200 transition duration:1000 cursor-pointer"
			>
				<img src="./images/scissors.png" alt="" class="w-24" />
			</div>
		</a>
	</div>
</main>
