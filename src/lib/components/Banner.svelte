<script lang="ts">
	import Megaphone from '$lib/icons/Megaphone.svelte';
	import "../../global.css";
	
	export let bannerText: string;
	export let styling: string = ''; 

	let isBannerVisible = true;

	function closeBanner() {
		isBannerVisible = false;
	}
</script>

{#if isBannerVisible}
	<div
		tabindex="-1"
		class={`${styling} grid grid-cols-components z-50 justify-center w-full items-center h-14 font-semibold bg-yellow-500 text-mono-800`}
	>
	
	<!-- <div
		class="flex justify-center items-center w-full max-w-[80ch] h-full border-4 border-green-600"
	> -->
	<div
	id="hero-info"
	class="col-span-1 col-start-2 row-span-1 row-start-1 w-full h-full min-h-full border-4 border-purple-500"
>
		<div
			class="flex items-center h-full border border-transparent border-violet-700 grow md:mx-auto border-1"
		>
			<p class="flex items-center text-sm">
				<span
				class="inline-flex flex-shrink-0 justify-center items-center w-6 h-6 bg-gray-200 rounded-full me-3"
			  >
				<Megaphone />
				<span class="sr-only">Megaphone</span>
			  </span>
				<span class="capitalize">
					{bannerText}
					<a
						href="#events"
						class="block ml-1 underline sm:inline text-theme-900 underline-offset-2 decoration-600 decoration-solid hover:no-underline"
					>
						Learn More
					</a>
				</span>
			</p>
		</div>

		<div class="flex justify-center items-center w-10 h-full border border-transparent">
			<button
				on:click={closeBanner}
				type="button"
				class="inline-flex flex-shrink-0 justify-center items-center w-10 h-10 text-sm rounded-lg text-mono-800 hover:bg-gray-200 hover:text-gray-900"
			>
				<svg
					class="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
				<span class="sr-only">Close banner</span>
			</button>
		</div>
	</div>
	</div>
{/if}
