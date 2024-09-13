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
						<a
							href={`#${text.toLowerCase()}`}
							class="relative hover:text-theme-900 capitalize text-outfit after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-theme-900 after:rounded-md after:scale-x-0 hover:after:scale-x-100 after:translate-y-2 after:transition-transform after:duration-300"
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
			<div class="flex justify-start pr-6 items-center lg:hidden">
				<!-- <button
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
				> -->
				<div
					class="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-transparent p-2"
				>
					<div class="space-y-2">
						<span
							class="block h-1 w-10 origin-center rounded-full bg-mono-100 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"
						></span>
						<span
							class="block h-[0.255rem] w-8 origin-center rounded-full bg-[dodgerblue] transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"
						></span>
					</div>
				</div>
			</div>
		</nav>
	</div>
</div>
