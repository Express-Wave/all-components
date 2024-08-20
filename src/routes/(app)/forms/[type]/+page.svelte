<!-- 
RELATIVE PATH:
src\routes\(app)\forms\[type]\+page.svelte
----------------------------------------------------------------------->

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const currentYear: number = new Date().getFullYear();
	const lastFiveYears: number[] = Array.from({ length: 5 }, (_, i) => currentYear - i);

	const segments: string[] = $page.url.pathname.split('/');
	const type: string = segments[segments.length - 1];

	// Determine the type based on the last segment of the pathname
	onMount(() => {
		//   const segments = $page.url.pathname.split('/');
		//   type = segments[segments.length - 1];
	});
</script>

<ul class="space-y-4 max-w-2xl">
	{#each lastFiveYears as year}
		<li>
			<a href={`/forms/${type}/${year}`}>
				<div
					class="relative overflow-x-auto border backdrop-blur-sm p-4 rounded-lg hover:border-[var(--clr-theme-color)]"
				>
					{year}
				</div>
			</a>
		</li>
	{/each}
</ul>
