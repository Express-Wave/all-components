<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { urbanMenu, ruralMenu } from '$lib/stores/menus.store.ts';
	import type { Writable } from 'svelte/store';

	// Define types for the menus
	let urban: string[] = [];
	let rural: string[] = [];
	let currentMenu: string[] = [];
	let isUrbanPath: boolean = false;
	let isRuralPath: boolean = false;
	let lastPathSegment: string = '';
	let year: number = new Date().getFullYear();
	let quarter: string = 'q1';
	let shouldShowMenu: boolean = false;

	// Subscribe to the urban and rural menus
	urbanMenu.subscribe((value: string[]) => urban = value);
	ruralMenu.subscribe((value: string[]) => rural = value);

	// Function to update the current menu based on the pathname
	function updateMenu(pathname: string): void {
		isUrbanPath = pathname.includes('urban');
		isRuralPath = pathname.includes('rural');

		if (isUrbanPath) {
			currentMenu = urban.slice();
			if (pathname.includes('q4')) {
				if (!currentMenu.includes('Finance')) currentMenu.push('Finance');
				if (!currentMenu.includes('Reconciliation')) currentMenu.push('Reconciliation');
			} else if (pathname.includes('q')) {
				currentMenu = currentMenu.filter(item => item !== 'Finance' && item !== 'Reconciliation');
			}
		}

		if (isRuralPath) {
			currentMenu = rural;
		}

		lastPathSegment = pathname.split('/').filter(Boolean).pop() || '';

		console.log('Current Menu:', currentMenu);
	}

	// Update the menu and shouldShowMenu reactively based on the current pathname
	$: {
		const { pathname }: { pathname: string } = $page.url;
		if (pathname) {
			updateMenu(pathname);
			shouldShowMenu = currentMenu.length > 0 && /q/i.test(pathname);
		}
	}

	// Function to determine if the current pathname matches or contains the item
	function isActive(item: string): boolean {
		return item.toLowerCase() === lastPathSegment.toLowerCase();
	}
</script>



{#if shouldShowMenu}
	<div
		class="pl-3 text-sm font-medium text-center text-gray-700 border-b border-gray-200 dark:text-gray-400 backdrop-blur-md"
	>
		<ul class="flex flex-wrap -mb-px">
			{#each currentMenu as item}
				<li class="me-2">
					<a
						href={`/forms/${isUrbanPath ? 'urban' : 'rural'}/${year}/${quarter}/${item}`}
						class={`capitalize inline-block p-4 border-b-2 rounded-t-lg
              ${isActive(item) ? 'text-theme font-semibold border-theme dark:text-theme dark:border-theme' : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}
              ${item === 'disabled' ? 'text-gray-400 cursor-not-allowed dark:text-gray-500' : ''}
            `}
						aria-current={isActive(item) ? 'page' : undefined}
					>
						{item}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
