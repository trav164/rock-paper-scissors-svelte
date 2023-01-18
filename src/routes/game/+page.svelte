<script lang="ts">
	let current: string | null = null;
	const selection = (type: string) => {
		current = type;
		console.warn(`${type} has been clicked`);
	};
</script>

<main class="bg-gray-900">
	<div class="flex flex-col items-center justify-center bg-blue-300">
		{#if current}
			<h1 class="text-slate-200">Your picked: {current.toUpperCase()}</h1>
		{/if}
	</div>
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
