<script lang="ts">
	import Logo from '$lib/icons/Logo.icon.svelte';
	import Wordmark from '$lib/icons/Wordmark.icon.svelte';

	let menuText: string[] = ['Discover', 'events', 'media', 'give'];
</script>

<div class="flex items-center justify-center h-full text-lg">
	<div class="flex items-center justify-start w-full max-w-[900px]">
		<a href="#hero" class="flex flex-1 items-center">
			<Logo size={12} />
			<Wordmark topLineColor="white" bottomLineColor="#FAFAFA" />
		</a>
		<nav class="flex">
			<ul class="hidden lg:flex items-center space-x-12 pr-4">
				{#each menuText as text}
					<li>
						<!-- <a href={`#${text.toLowerCase()}`} class="`hover:text-blue-600 hover:font-bold hover:underline capitalize text-outfit underline-offset-8 decoration-[2px] after:content-[''] after:rounded-md">
							{text}
						</a> -->
						<a
							href={`#${text.toLowerCase()}`}
							class="relative hover:text-blue-600 hover:font-bold capitalize text-outfit after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-theme after:rounded-md after:scale-x-0 hover:after:scale-x-100 after:translate-y-2 after:transition-transform after:duration-300"
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
			<button class="lg:hidden p-2 text-foreground focus:outline-none" aria-label="Toggle menu">
				<svg
					class="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<div class="flex justify-start ml-14 items-center lg:hidden">
				<button
					class="text-foreground-lighter focus:ring-brand bg-background hover:bg-surface-100 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
					aria-expanded="false"
					><span class="sr-only">Open main menu</span><svg
						class="block w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					><svg
						class="hidden w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path></svg
					></button
				>
			</div>
		</nav>
	</div>
</div>
