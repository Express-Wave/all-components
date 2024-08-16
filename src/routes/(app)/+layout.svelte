<!-- LAYOUT FOR ALL APP PAGES -->
<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';

	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import AppMenu from '$lib/components/AppMenu.svelte';
	import AppSubMenu from '$lib/components/AppSubMenu.svelte';
</script>

<div
	class="h-full max-h-[100vh] overflow-hidden"
	style="min-height: 100vh; --dot-bg: hsl(240, 10%, 3.9%); --dot-color: hsl(0, 0%, 99%); --dot-size: 1px; --dot-space: 18px; background: linear-gradient(90deg, hsl(0, 0%, 99%) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), linear-gradient(hsl(0, 0%, 99%) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space), hsl(240, 3.8%, 46.1%); background-attachment: fixed;"
>
	<div class="min-h-full flex flex-col">
		<div class="flex-none"></div>
		<div class="h-screen basis-0 flex-1">
			<div class="flex h-full">
				<AppSidebar />
				<div class="flex flex-1 flex-col">
					<AppMenu />
					{#if $page.url.pathname.includes('rural') || $page.url.pathname.includes('urban')}
						<AppSubMenu />
					{/if}
					<div id="scrollable" class="p-4 bh-inherit overflow-y-scroll grow">
						<slot />
						<br />
						<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Always show the scrollbar */
	#scrollable {
		overflow-y: scroll; /* Ensure the scrollbar is always visible */
	}

	/* Thin scrollbar for Webkit-based browsers (Chrome, Safari, Edge) */
	#scrollable::-webkit-scrollbar {
		width: 8px; /* Set the scrollbar width */
		height: 8px; /* Set the scrollbar height */
	}

	#scrollable::-webkit-scrollbar-thumb {
		background-color: #a0aec0; /* Customize the scrollbar thumb color */
		border-radius: 4px; /* Add some rounding to the edges */
	}

	/* Thin scrollbar for Firefox */
	#scrollable {
		scrollbar-width: thin; /* Use the thin scrollbar preset */
		scrollbar-color: #a0aec0 transparent; /* Customize the scrollbar thumb and track colors */
	}
</style>
