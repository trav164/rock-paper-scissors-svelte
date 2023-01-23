<script lang="ts">
	import Score from '$lib/components/score.svelte';
	import { supabase } from '$lib/supabase';
	import type { Games, Scores } from 'src/models/games.model';
	import type { PageData } from './$types';

	export let data: PageData;

	let currentWinner: string | null = null;

	// to pass to scores component
	let score: Scores = {
		player_score: data.player_score,
		computer_score: data.computer_score
	};

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

	const handleClick = async (move: string) => {
		selectWinner(move);

		const { error } = await supabase
			.from('games')
			.update({ player_score: score.player_score, computer_score: score.computer_score })
			.eq('user_id', data.user_id);

		console.warn(error);
	};
</script>

<main class="bg-gray-900">
	<Score {score} />
	<div class="flex flex-row gap-12 items-center justify-center min-h-screen bg-gray-900">
		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('r')}
		>
			<img src="./images/rock.png" alt="" class="w-24" />
		</button>

		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('p')}
		>
			<img src="./images/paper.png" alt="" class="w-24" />
		</button>

		<button
			type="submit"
			class="flex items-center bg-slate-300 p-8 rounded-full shadow-xl hover:scale-110 transition duration:1000 cursor-pointer"
			on:click={() => handleClick('s')}
		>
			<img src="./images/scissors.png" alt="" class="w-24" />
		</button>
	</div>
</main>
