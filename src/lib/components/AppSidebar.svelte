<script lang="ts">
	import CloseIcon from '$lib/icons/CloseIcon.svelte';
	import LogoutIcon from '$lib/icons/LogoutIcon.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	let height: string = '3.5rem';
	import '../../app.css';

	let closed: boolean = true;

	function toggleSidebar(event: Event) {
		event.preventDefault();
		closed = !closed;
		console.log('Sidebar closed?', closed);
	}
</script>

<header
	role="menu"
	aria-label="Sidebar"
	aria-orientation="vertical"
	aria-labelledby="options-menu"
	class={`h-[100vh] max-h-[100vh] flex flex-col capitalize min-h-full bg-[#f8f8f8] hide-scrollbar overflow-hidden border-r border-neutral-200 dark:border-neutral-700 ${closed ? 'w-16' : 'w-[45vw]'}`}
>
	<button
		class={`flex cursor-pointer min-h-[${height}] max-h-12 items-center border-b px-6 border-neutral-200 dark:border-neutral-700`}
		on:click={toggleSidebar}
		on:click={() => console.log('Button clicked')}
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
			<span>Here's some Menu stuff!</span>
		{/if}
	</div>
	<a
		target="_self"
		href="/"
		role="menuitem"
		class="block -mt-1 flex flex-col border-t py-5 px-6 border-nuetral-200 dark:border-nuetral-700"
		style="position: sticky; bottom: 0;"
	>
		<div
			class="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1-muted focus-visible:z-10 group py-1 font-normal border-nuetral-200 dark:border-nuetral-700"
		>
			<div class="transition truncate text-sm group-hover min-w-fit">
				<LogoutIcon />
			</div>
			<span class="transition truncate text-sm w-full">Log out</span>
		</div>
	</a>
</header>
