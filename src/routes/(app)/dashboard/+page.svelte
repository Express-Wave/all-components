<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const options: string[] = ['forms', 'users'
    ]

	const segments: string[] = $page.url.pathname.split('/');
	const type: string = segments[segments.length - 1];

	// Determine the type based on the last segment of the pathname
	onMount(() => {
		//   const segments = $page.url.pathname.split('/');
		//   type = segments[segments.length - 1];
	});
</script>

<ul class="space-y-4 max-w-2xl">
	{#each options as option}
		<li>
			<a href={`/${option}`}>
				<div
					class="relative capitalize overflow-x-auto border backdrop-blur-sm p-4 rounded-lg hover:border-[var(--clr-theme-color)]"
				>
					{option}
				</div>
			</a>
		</li>
	{/each}
</ul>