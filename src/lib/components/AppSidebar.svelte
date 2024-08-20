<script lang="ts">
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import LogoutIcon from '$lib/icons/LogoutIcon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import '../../app.css';
	import { animationDuration } from '$lib/stores/animation.store';
	import { onDestroy } from 'svelte';

	let height: string = '3.5rem';
	let closed: boolean = true;
	export let width: string;

	function toggleSidebar(event: Event) {
		event.preventDefault();
		closed = !closed;
		console.log('Sidebar closed?', closed);
	}
	let widthClass = `w-${width}`;

	let fadeDuration: number;
	let shouldFadeIn: boolean = false;

	const unsubscribe = animationDuration.subscribe((value) => {
		// fadeDuration = value;
		fadeDuration = value - 200;
	});

	// Clean up subscription on component destroy
	onDestroy(() => {
		unsubscribe();
	});

	// Reactive statement to handle fade-in delay
	$: {
		if (!closed) {
			setTimeout(() => {
				shouldFadeIn = true;
			}, fadeDuration);
		} else {
			shouldFadeIn = false;
		}
	}
</script>

<header
	role="menu"
	aria-label="Sidebar"
	aria-orientation="vertical"
	aria-labelledby="options-menu"
	class={`h-[100vh] max-h-[100vh] flex flex-col capitalize min-h-full bg-[#f8f8f8] hide-scrollbar overflow-hidden border-r border-neutral-200 transition-all duration-500 ease-in-out dark:border-neutral-700 ${closed ? 'w-16' : widthClass}`}
>
	<button
		class={`flex cursor-pointer min-h-[${height}] max-h-12 items-center border-b px-6 border-neutral-200 dark:border-neutral-700`}
		on:click={toggleSidebar}
	>
		{#if closed}
			<MenuIcon />
		{:else}
			<div class="flex items-center">
				<CloseIcon />
				<span class="ml-4">Close</span>
			</div>
		{/if}
	</button>
	<div class="min-h-[100%] max-h-90vh overflow-none py-5 px-6">
		{#if !closed}
			<div
				class={`ease-in-out transition-opacity ${shouldFadeIn ? 'opacity-100' : 'opacity-0'}`}
				style={`transition-duration: ${fadeDuration}ms;`}
			>
				<span>Here's some Menu stuff!</span>
			</div>
		{/if}
	</div>
	<a
		target="_self"
		href="/"
		role="menuitem"
		class="block -mt-1 flex flex-col border-t py-5 px-6 border-neutral-200 dark:border-neutral-700"
		style="position: sticky; bottom: 0;"
	>
		<div
			class="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1-muted focus-visible:z-10 group py-1 font-normal border-neutral-200 dark:border-neutral-700"
		>
			<div class="transition truncate text-sm group-hover min-w-fit">
				<LogoutIcon />
			</div>
			<span class="transition truncate text-sm w-full">Log out</span>
		</div>
	</a>
</header>
