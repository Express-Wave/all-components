<script lang="ts">
	import HamburgerMenu from '$lib/icons/HamburgerMenu.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import Wordmark from '$lib/icons/Wordmark.svelte';
	
	export let styling: string = ''; 
	
	let menuText: string[] = ['Discover', 'events', 'media', 'give'];
</script>

<!-- <div class="flex justify-center items-center h-20 text-lg"> -->
	<div
		class={`${styling} flex items-center justify-start w-full h-16 col-span-1 col-start-2 row-span-1 row-start-1 min-h-full border-4 border-purple-500`}
	>
		<a href="#hero" class="flex flex-1 items-center">
			<Logo size={12} />
			<Wordmark topLineTextColor="white" bottomLineTextColor="#FAFAFA" />
		</a>
		<nav class="flex">
			<div class="flex flex-col justify-center items-end w-[150px] lg:hidden">
				<HamburgerMenu size={12} />
			</div>
			<ul class="hidden items-center pr-4 space-x-12 lg:flex">
				{#each menuText as text}
					<li>
						<a
							href={`#${text.toLowerCase()}`}
							class="relative hover:text-theme-100 capitalize text-outfit after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-theme-100 after:rounded-md after:scale-x-0 hover:after:scale-x-100 after:translate-y-2 after:transition-transform after:duration-300"
						>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
<!-- </div> -->
