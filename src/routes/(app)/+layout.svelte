<!-- LAYOUT FOR ALL APP PAGES -->
<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';

	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import AppMenu from '$lib/components/AppMenu.svelte';
	import AppSubMenu from '$lib/components/AppSubMenu.svelte';

	let width: number = 32;
	let sideBarWidth: string = `[${width}rem]`;
</script>

<div id="container" class="h-full max-h-[100vh] overflow-hidden">
	<div class="min-h-full flex flex-col">
		<div class="flex-none" />
		<div class="h-screen basis-0 flex-1">
			<div class="flex h-full">
				<AppSidebar width={sideBarWidth} />
				<div class={`flex flex-1 flex-col -mr-${sideBarWidth}`}>
					<AppMenu />
					{#if $page.url.pathname.includes('rural') || $page.url.pathname.includes('urban')}
						<AppSubMenu />
					{/if}
					<div id="scrollable" class="p-4 bh-inherit overflow-y-scroll grow">
						<slot />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#container {
		min-height: 100vh;
		--dot-bg: hsl(240, 10%, 3.9%);
		--dot-color: hsl(0, 0%, 99%);
		--dot-size: 1px;
		--dot-space: 18px;
		background:
			linear-gradient(
					90deg,
					hsl(0, 0%, 99%) calc(var(--dot-space) - var(--dot-size)),
					transparent 1%
				)
				center / var(--dot-space) var(--dot-space),
			linear-gradient(hsl(0, 0%, 99%) calc(var(--dot-space) - var(--dot-size)), transparent 1%)
				center / var(--dot-space) var(--dot-space),
			hsl(240, 3.8%, 46.1%);
		background-attachment: fixed;
	}
	#scrollable {
		overflow-y: scroll; /* Ensure the scrollbar is always visible */
	}

	#scrollable::-webkit-scrollbar {
		width: 0.5rem; /* Set the scrollbar width */
		height: 0.5rem; /* Set the scrollbar height */
	}

	#scrollable::-webkit-scrollbar-thumb {
		background-color: #a0aec0; /* Customize the scrollbar thumb color */
		border-radius: 0.25rem; /* Add some rounding to the edges */
	}

	/* Thin scrollbar for Firefox */
	#scrollable {
		scrollbar-width: 0.25rem;
		scrollbar-color: #D4D4D4 transparent; /* Customize the scrollbar thumb and track colors */
	}
</style>
