<!-- 
RELATIVE PATH:
src\routes\(app)\forms\[type]\[year]\+page.svelte
----------------------------------------------------------------------->

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const quarters: string[] = ['q1', 'q2', 'q3', 'q4'];
	const pathname = $page.url.pathname;
	const segments = pathname.split('/').filter(Boolean);

	let type = segments[segments.length - 2]; // Penultimate path text
	let year = segments[segments.length - 1]; // Last path text

	onMount(() => {
        console.log(
            "Current Type:", type,
            "Current Year:", year
        );
	});
</script>

<ul class="space-y-4 max-w-2xl">
	{#each quarters as quarter}
		<li>
			<a href={`/forms/${type}/${year}/${quarter}`}>
				<div class="relative overflow-x-auto border backdrop-blur-sm p-4 rounded-lg hover:border-theme">{quarter.toUpperCase()}</div>
			</a>
		</li>
	{/each}
</ul>