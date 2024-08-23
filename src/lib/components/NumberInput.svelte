<script lang="ts">
	export let id: string;
	// export let label: string;
	export let required: boolean;
	export let max: number = 99;

	let value = 0;

	function increment() {
		if (value < max) {
			value++;
		}
	}

	function decrement() {
		if (value > 0) {
			value--;
		}
	}
</script>

<div class="flex flex-col items-start relative" >
	<div class="relative flex items-center max-w-[8rem]">
		<button
			type="button"
			on:click={decrement}
			class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
		>
			<svg
				class="w-3 h-3 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 2"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h16"
				/>
			</svg>
		</button>
		<input
			type="text"
			{id}
			bind:value
			data-input-counter
			aria-describedby="helper-text-explanation"
			class="px-3 py-[0.5rem] bg-gray-50 border-y border-gray-300 text-center text-gray-900 text-sm focus:ring-theme focus:border-theme block w-full min-w-[100px] py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme"
			placeholder="0"
			{required}
		/>
		<button
			type="button"
			on:click={increment}
			class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
		>
			<svg
				class="w-3 h-3 text-gray-900 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 1v16M1 9h16"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	input {
		background-color: white;
	}
</style>
