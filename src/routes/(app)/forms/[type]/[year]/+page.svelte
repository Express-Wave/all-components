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

	let type = segments[segments.length - 2]; // Second last segment
	let year = segments[segments.length - 1]; // Last segment

	onMount(() => {
        console.log(
            "Current Type:", type,
            "Current Year:", year
        );
	});
</script>

<ul>
	{#each quarters as quarter}
		<li>
			<a href={`/forms/${type}/${year}/${quarter}`}>
				{quarter.toUpperCase()}
			</a>
		</li>
	{/each}
</ul>