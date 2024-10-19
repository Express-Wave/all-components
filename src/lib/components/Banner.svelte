<script lang="ts">
	import Megaphone from '$lib/icons/Megaphone.svelte';
	import '../../global.css';

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
		class="${styling} grid custom-grid-cols gap-x-clamp grid-rows-auto row-span-1 z-50 place-items-center col-span-3 col-start-1 w-full h-20 md:h-16 font-semibold bg-amber-300 text-mono-700 "
	>
		<div
			class="grid grid-cols-[3rem_1fr_3rem] max-w-[95vw] md:max-w-[850px] gap-x-clamp col-span-3 col-start-1 row-span-1 row-start-1 w-full h-full place-content-center place-items-center "
		>
			<span
				class="inline-flex col-span-1 col-start-1 justify-center items-center ml-2 w-8 h-8 bg-gray-200 rounded-full"
			>
				<Megaphone />
				<span class="sr-only">Megaphone</span>
			</span>

			<a
				href="#events"
				class="flex col-span-1 col-start-2 items-center text-sm cursor-pointer title debug-border"
			>
				{bannerText}
			</a>

			<!-- Close Button Column -->
			<div class="flex col-span-1 col-start-3 justify-center items-center w-12 h-full">
				<button
					on:click={closeBanner}
					type="button"
					class="inline-flex justify-center items-center w-8 h-8 text-sm rounded-full text-mono-800 hover:bg-red-500 hover:text-mono-100"
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
